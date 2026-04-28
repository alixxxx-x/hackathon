import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-1">
                            <span className="text-xl font-bold text-white">MedSafe</span>
                            <span className="text-primary text-2xl">.</span>
                        </Link>
                        <p className="leading-relaxed text-gray-400">
                            Empowering Algerian patients and pharmacists with clinical-grade drug interaction analysis. Explained in Darija for everyone.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Platform</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/check" className="hover:text-primary transition-colors">Interaction Checker</Link></li>
                            <li><Link to="/pharmacist" className="hover:text-primary transition-colors">Pharmacist Portal</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link to="/register" className="hover:text-primary transition-colors">Join Now</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/ddinter" className="hover:text-primary transition-colors">DDInter Database</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/support" className="hover:text-primary transition-colors">Support Center</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Email: <a href="mailto:support@medsafe.dz" className="hover:text-primary transition-colors">support@medsafe.dz</a></li>
                            <li>Phone: <span>+213 21 00 00 00</span></li>
                            <li>Address: <span>Algiers, Algeria</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>© 2026 MedSafe — Axis 3 Pharmatech Innovation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
