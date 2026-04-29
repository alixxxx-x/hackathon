"""
Darija Translator Service

Translates English drug interaction descriptions to Algerian Darija
using the OpenAI API (gpt-4o-mini).
"""

import asyncio
import logging
from typing import Optional

from openai import AsyncOpenAI

from app.core.config import settings

logger = logging.getLogger(__name__)

if settings.OPENAI_API_KEY:
    client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
else:
    client = None
    logger.warning("OPENAI_API_KEY is not set. Darija translation will be disabled.")

SYSTEM_PROMPT = """
أنت خبير في الترجمة الطبية للدارجة الجزائرية. ترجم النص الطبي التالي بصرامة.

**قواعد صارمة:**
- استعمل فقط الحروف العربية. ممنوع تماما أي حرف لاتيني (A-Z).
- ممنوع الأرقام الفرانكو-عربية (3، 7، 9، إلخ).
- الأسماء العلمية للأدوية (مثل Paracetamol) خلّيها باللاتيني فقط إذا ما لقيتش بديل.
- لا تكتب مقدمات: ممنوع "إليك الترجمة"، "الترجمة هي"، أو أي كلام قبل النص المترجم.

**التعليمات:**
1. ترجم بلهجة جزائرية أصيلة (ماشي فصحى ولا دارجة بلد أخرى).
2. لغة بسيطة كأنك تشرح لواحد من دارك مافهمش في الطب.
3. شرح المفاهيم الطبية الصعبة بالدارجة.
4. ركّز على المعلومات المهمة فقط:
   - شنو الدواء وكيفاش يخدم
   - الأعراض الجانبية الخطيرة (اللي تستدعي الطبيب)
   - التفاعلات مع الأدوية الأخرى
   - مين ميستعملوش (الحوامل، مرضى القلب، إلخ)
5. **حذف تام** لـ: تاريخ اكتشاف الدواء، قصص الشركات المصنعة، إحصائيات طويلة، أو أي "كلام فاضي".
6. **الملخص فقط** — ما تطوّلش.
"""

RISK_LABELS = {
    "danger":     "خطر كبير",
    "major":      "خطر كبير",
    "caution":    "خطر متوسط",
    "moderate":   "خطر متوسط",
    "compatible": "خطر خفيف",
    "minor":      "خطر خفيف",
    "unknown":    "ما عرفناش",
    "not_in_db":  "ما عرفناش",
}


async def translate_to_darija(
    english_text: str,
    risk_level: str,
    max_retries: int = 3,
    retry_delay: float = 2.0,
) -> dict:
    """
    Translate an English drug interaction description to Algerian Darija.

    Returns a dict with:
        darija_text:  str
        risk_label:   str
        risk_level:   str
        success:      bool
        error:        str | None
    """
    risk_key = risk_level.lower()
    risk_label = RISK_LABELS.get(risk_key, RISK_LABELS["unknown"])

    if not client:
        return {
            "darija_text": english_text,
            "risk_label": risk_label,
            "risk_level": risk_key,
            "success": False,
            "error": "OPENAI_API_KEY is not configured.",
        }

    prompt = f"{SYSTEM_PROMPT}\n\nText to translate:\n{english_text.strip()}"

    for attempt in range(1, max_retries + 1):
        try:
            logger.debug("Translation attempt %d/%d", attempt, max_retries)
            response = await client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=1000,
                temperature=0.3,
            )
            darija = response.choices[0].message.content.strip()

            return {
                "darija_text": darija,
                "risk_label": risk_label,
                "risk_level": risk_key,
                "success": True,
                "error": None,
            }

        except Exception as exc:
            logger.warning("Translation attempt %d failed: %s", attempt, exc)
            if attempt < max_retries:
                await asyncio.sleep(retry_delay)

    logger.error("All translation attempts failed. Returning original English text.")
    return {
        "darija_text": english_text,
        "risk_label": risk_label,
        "risk_level": risk_key,
        "success": False,
        "error": "Translation failed after all retries.",
    }
