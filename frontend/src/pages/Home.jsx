import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Activity, Languages, Stethoscope, FileText, Sparkles, ChevronRight, ScanLine, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

import imgStethoscope from "@/assets/etactics-inc-g3PsF4_y7ZY-unsplash.jpg";
import imgNurse from "@/assets/jeshoots-com-l0j0DHVWcIE-unsplash.jpg";
import imgPillsSpilling from "@/assets/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg";
import imgLabScientist from "@/assets/benjamin-lehman-gkZ-k3xf25w-unsplash.jpg";
import imgPillOrganizer from "@/assets/towfiqu-barbhuiya-_04ev82q-s0-unsplash.jpg";
import imgBlisterPacks from "@/assets/roberto-sorin-RS0-h_pyByk-unsplash.jpg";
import imgGlovesHeart from "@/assets/anton-8q-U8X1zkvI-unsplash.jpg";

const fade = {
    hidden: { opacity: 0, y: 20 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: d * 0.12, ease: "easeOut" } }),
};

function Home() {
    return (
        <div className="w-full bg-white dark:bg-zinc-950 font-sans">

            {/* ────────────── INTRO ────────────── */}
            <section className="relative">
                {/* BG image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imgBlisterPacks})` }} />
                {/* Content on top */}
                <div className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-28 bg-black/50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.h1
                            variants={fade} initial="hidden" animate="show" custom={0}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
                        >
                            Check your medications{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                before they clash.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fade} initial="hidden" animate="show" custom={1}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            MedSafe checks drug interactions against 236,000+ clinical records and explains results in Algerian Darija — so every patient and pharmacist can understand.
                        </motion.p>

                        <motion.div
                            variants={fade} initial="hidden" animate="show" custom={2}
                            className="flex flex-col sm:flex-row justify-center gap-3"
                        >
                            <Link to="/check">
                                <Button size="lg" className="h-12 px-7 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg transition-all hover:scale-[1.02] group">
                                    Check Interactions
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/pharmacist">
                                <Button size="lg" className="h-12 px-7 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-white/90 shadow-sm border border-slate-100">
                                    <Stethoscope className="mr-2 w-4 h-4 text-slate-500" />
                                    Pharmacist Portal
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ────────────── HOW IT WORKS ────────────── */}
            <section className="py-20 lg:py-28 border-t border-slate-100 dark:border-zinc-800">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">How it works</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Three steps to safer prescriptions.</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Whether you're a patient checking your own pills or a pharmacist validating an ordonnance, MedSafe makes it simple.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                step: "01",
                                icon: <FileText className="w-5 h-5" />,
                                title: "Enter your medications",
                                desc: "Type the names of your drugs manually, or use our built-in OCR scanner to photograph your prescription. MedSafe extracts the medication names automatically — no medical knowledge required.",
                                color: "#3b82f6",
                            },
                            {
                                step: "02",
                                icon: <Activity className="w-5 h-5" />,
                                title: "We check for interactions",
                                desc: "Your medication list is instantly cross-referenced against the DDInter database containing 236,834 verified drug-drug interactions. Each pair is classified as dangerous, caution, or safe.",
                                color: "#6366f1",
                            },
                            {
                                step: "03",
                                icon: <Languages className="w-5 h-5" />,
                                title: "Get results in Darija",
                                desc: "Gemini AI translates every medical warning into plain Algerian Darija. No more confusing French or English medical jargon — just clear advice anyone can act on.",
                                color: "#06b6d4",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.1 }}
                                style={{ borderTop: `3px solid ${item.color}` }}
                                className="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.step}
                                </div>
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ────────────── FEATURE 1 — Clinical Database ────────────── */}
            <section className="py-20 lg:py-28 bg-slate-50 dark:bg-zinc-900/50 border-t border-slate-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="order-2 lg:order-1"
                        >
                            <img
                                src={imgLabScientist}
                                alt="Scientist analyzing a sample, representing clinical-grade drug verification"
                                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 mb-5">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                                Backed by real clinical data.
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-4">
                                MedSafe doesn't guess and it doesn't hallucinate. Every interaction result comes from <strong className="text-slate-700 dark:text-slate-300">DDInter</strong>, a peer-reviewed pharmacological database maintained by researchers — not scraped from the internet.
                            </p>
                            <p className="text-base text-slate-500 leading-relaxed mb-6">
                                The database covers <strong className="text-slate-700 dark:text-slate-300">236,834 known drug-drug interactions</strong> across <strong className="text-slate-700 dark:text-slate-300">1,833 approved drugs</strong>. Each interaction is categorized by severity level so you know exactly how serious the risk is — from minor caution to life-threatening danger.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-red-50 text-red-600 border-red-200 px-3 py-1">Dangerous</Badge>
                                <Badge className="bg-amber-50 text-amber-600 border-amber-200 px-3 py-1">Caution</Badge>
                                <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 px-3 py-1">Safe</Badge>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ────────────── FEATURE 2 — Darija Translation ────────────── */}
            <section className="py-20 lg:py-28 border-t border-slate-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 mb-5">
                                <Languages className="w-5 h-5" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                                Medical advice you can actually read.
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-4">
                                Drug warnings printed in French or English are useless if your patient speaks Darija. MedSafe uses <strong className="text-slate-700 dark:text-slate-300">Google Gemini AI</strong> to translate complex pharmacological language into plain Algerian Darija.
                            </p>
                            <p className="text-base text-slate-500 leading-relaxed mb-6">
                                This means a grandmother picking up her heart medication can finally understand what her doctor meant when he said "contraindicated with NSAIDs." We turn clinical jargon into sentences real people use every day.
                            </p>
                            <div className="bg-slate-50 dark:bg-zinc-800 rounded-xl p-5 border border-slate-200 dark:border-zinc-700">
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5" /> Example — Darija output
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">
                                    "Hadou zouj dwa ma yemchiwch m3a ba3d — yqadrou ydirou nezif fel me3da. Lazem techraver m3a tbib te3ek 9bel ma techrobhom m3a ba3d."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <img
                                src={imgNurse}
                                alt="Healthcare professional explaining medication guidance to patients"
                                className="w-full h-[420px] object-cover object-top rounded-3xl shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ────────────── FEATURE 3 — OCR + Pharmacist ────────────── */}
            <section className="py-20 lg:py-28 bg-slate-50 dark:bg-zinc-900/50 border-t border-slate-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                            className="order-2 lg:order-1"
                        >
                            <img
                                src={imgPillOrganizer}
                                alt="Patient organizing daily medications in a pill organizer"
                                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 text-violet-600 mb-5">
                                <ScanLine className="w-5 h-5" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                                Scan prescriptions. Skip the typing.
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-4">
                                Take a photo of any ordonnance and MedSafe's OCR engine will extract medication names automatically. No need to spell complicated drug names or search through lists.
                            </p>
                            <p className="text-base text-slate-500 leading-relaxed mb-6">
                                Built with pharmacists in mind — the dedicated Pharmacist Portal lets you manage multiple patients, run batch interaction checks, and generate professional PDF reports. Whether you're behind the counter or doing a home visit, MedSafe fits your workflow.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-slate-500">
                                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-violet-500" /> PDF reports</span>
                                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-violet-500" /> Multi-patient</span>
                                <span className="flex items-center gap-2"><ScanLine className="w-4 h-4 text-violet-500" /> OCR scanner</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ────────────── STATS ────────────── */}
            <section className="py-16 bg-slate-900 dark:bg-zinc-900 border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "236,834", label: "Verified interactions" },
                            { value: "1,833", label: "Approved drugs" },
                            { value: "Darija", label: "Native language support" },
                            { value: "Free", label: "For every patient" },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</p>
                                <p className="text-sm text-slate-400 font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ────────────── CTA ────────────── */}
            <section className="relative h-[700px] flex items-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ 
                        backgroundImage: `url(${imgGlovesHeart})`,
                        backgroundPosition: 'center' 
                    }} 
                />
                <div className="absolute inset-0 bg-black/50" />
                
                <div className="relative z-10 w-full">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <ShieldCheck className="w-10 h-10 text-white mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
                            Stop guessing. Start verifying.
                        </h2>
                        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                            MedSafe is free for patients and built for Algerian pharmacists. Check your first interaction in under 30 seconds.
                        </p>
                        <Link to="/check">
                            <Button size="lg" className="h-13 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg transition-all hover:scale-[1.02]">
                                Try MedSafe Now
                                <ChevronRight className="ml-1 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
