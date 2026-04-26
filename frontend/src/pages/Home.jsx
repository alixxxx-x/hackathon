import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Rocket, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section - Split Layout with Framer Motion */}
            <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-background">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Left Content Column */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                            }}
                            className="flex flex-col items-start text-left max-w-2xl"
                        >
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
                            >
                                <Rocket className="w-4 h-4" />
                                <span>v1.0 is officially live</span>
                            </motion.div>

                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
                            >
                                The modern way to <br />
                                <span className="text-primary relative inline-block">
                                    build web apps.
                                    {/* Decorative swoosh under text */}
                                    <motion.svg
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                                        className="absolute w-full h-3 -bottom-1 left-0 text-primary/40" viewBox="0 0 100 10" preserveAspectRatio="none"
                                    >
                                        <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                                    </motion.svg>
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium"
                            >
                                Stop reinventing the wheel. Use our battle-tested components,
                                beautiful layouts, and robust architecture to launch in days, not months.
                            </motion.p>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="flex flex-wrap items-center gap-6"
                            >
                                <Link to="/templates">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button size="lg" className="rounded-xl px-8 h-14 text-base font-bold shadow-xl shadow-primary/30">
                                            Start Building Free
                                        </Button>
                                    </motion.div>
                                </Link>
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-4 h-4 text-primary" /> No credit card required
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Visual Column (Floating Code/UI Mockup) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
                            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mt-12 lg:mt-0"
                        >
                            {/* Glow behind mockup - Continuously Rotating */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 via-blue-500/20 to-purple-500/30 rounded-full blur-3xl -z-10"
                            />

                            {/* Mockup Container - Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                            >
                                {/* Fake Window Header */}
                                <div className="flex items-center px-4 py-3 border-b border-border/50 bg-muted/50">
                                    <div className="flex gap-1.5 hover:*:opacity-80 cursor-pointer">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="mx-auto text-xs font-medium text-muted-foreground flex items-center gap-2">
                                        <Briefcase className="w-3 h-3" /> App.jsx
                                    </div>
                                </div>
                                {/* Fake Code Content */}
                                <div className="p-6 font-mono text-sm text-left overflow-x-auto whitespace-nowrap">
                                    <div className="flex text-muted-foreground mb-4">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">1</span>
                                        <span><span className="text-purple-500">import</span> <span className="text-foreground">{' { ThemeProvider } '}</span> <span className="text-purple-500">from</span> <span className="text-green-500">"@/components/theme"</span>;</span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-4">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">2</span>
                                        <span><span className="text-purple-500">import</span> <span className="text-foreground">{' { Hero } '}</span> <span className="text-purple-500">from</span> <span className="text-green-500">"@/components/ui/hero"</span>;</span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">3</span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">4</span>
                                        <span><span className="text-blue-500">export default function</span> <span className="text-yellow-500">App</span><span className="text-foreground">() {'{'}</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">5</span>
                                        <span><span className="ml-4 text-purple-500">return</span> <span className="text-foreground">(</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">6</span>
                                        <span><span className="ml-8 text-foreground">{'<'}</span><span className="text-red-400">ThemeProvider</span><span className="text-foreground">{'>'}</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">7</span>
                                        <span><span className="ml-12 text-foreground">{'<'}</span><span className="text-red-400">Hero</span> <span className="text-yellow-500">variant</span>=<span className="text-green-500">"split"</span> <span className="text-foreground">{'/>'}</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground mb-2">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">8</span>
                                        <span><span className="ml-8 text-foreground">{'</'}</span><span className="text-red-400">ThemeProvider</span><span className="text-foreground">{'>'}</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">9</span>
                                        <span><span className="ml-4 text-foreground">)</span></span>
                                    </div>
                                    <div className="flex text-muted-foreground">
                                        <span className="w-8 text-right mr-4 opacity-50 shrink-0">10</span>
                                        <span><span className="text-foreground">{'}'}</span></span>
                                    </div>

                                    {/* Blinking cursor */}
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="w-2 h-4 bg-primary mt-2 ml-8"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Premium Bento Grid Features Section */}
            <section className="py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border/40">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
                            Everything you need. <br className="hidden sm:block" />
                            <span className="text-muted-foreground">Nothing you don't.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl font-medium">
                            We've obsessed over every detail so you don't have to. Experience a platform built for speed, scale, and developer happiness.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Feature 1: Large Card (Span 2) */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors p-8 lg:p-12">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 transform group-hover:scale-110">
                                <Rocket className="w-64 h-64 text-foreground" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-background shadow-sm border border-border flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500">
                                    <Rocket className="text-primary w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground tracking-tight">Lightning Fast Matching</h3>
                                    <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                                        Our proprietary algorithm connects your skills with the perfect role in milliseconds. Say goodbye to endless scrolling and application black holes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Standard Card */}
                        <div className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors p-8 lg:p-10">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-background shadow-sm border border-border flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform duration-500">
                                    <Users className="text-blue-500 w-6 h-6" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">Student Network</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Connect with ambitious peers, get CV feedback, and learn from former interns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Standard Card */}
                        <div className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors p-8 lg:p-10">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-background shadow-sm border border-border flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                                    <Briefcase className="text-green-500 w-6 h-6" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">Company Space</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Review profiles, schedule interviews, and manage contracts in one unified dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Wide Bottom Card (Span 2) */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/50 text-xs font-semibold mb-6 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Real-time Analytics
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">Data-driven decisions</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Track application success rates, profile views, and engagement metrics with our beautiful, intuitive analytics engine.
                                </p>
                            </div>
                            {/* Abstract Animated Data Visual */}
                            <div className="w-full sm:w-56 h-36 rounded-2xl bg-background border border-border/50 shadow-sm p-5 flex items-end gap-3 shrink-0">
                                <div className="w-full bg-primary/20 rounded-t h-[40%] group-hover:h-[60%] transition-all duration-700 ease-out delay-0"></div>
                                <div className="w-full bg-primary/40 rounded-t h-[70%] group-hover:h-[85%] transition-all duration-700 ease-out delay-75"></div>
                                <div className="w-full bg-primary rounded-t h-[50%] group-hover:h-[100%] transition-all duration-700 ease-out delay-150 shadow-[0_0_15px_rgba(var(--primary),0.3)]"></div>
                                <div className="w-full bg-primary/60 rounded-t h-[90%] group-hover:h-[40%] transition-all duration-700 ease-out delay-200"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Built For Everyone Section */}
            <section className="py-24 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
                <div className="max-w-5xl mx-auto px-6">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Built For Everyone
                        </h2>
                        <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                            Whether you are a candidate looking for opportunities or a company seeking talent, <br className="hidden md:block"/>
                            Template has you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Candidates Card */}
                        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">For Candidates</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Launch your career with the perfect opportunity</p>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Build a professional profile and CV</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Get matched with relevant opportunities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Track all your applications in one place</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Receive notifications for new matches</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Download your agreements</span>
                                </li>
                            </ul>

                            <Link to="/register" className="w-full mt-auto">
                                <Button className="w-full h-12 rounded-lg text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Join as Candidate
                                </Button>
                            </Link>
                        </div>

                        {/* Companies Card */}
                        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">For Companies</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Find talented candidates who match your requirements</p>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Post unlimited job offers</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Access a pool of qualified candidates</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">AI-powered candidate recommendations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Streamlined interview scheduling</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-white fill-emerald-500 shrink-0" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300">Digital agreement management</span>
                                </li>
                            </ul>

                            <Link to="/register" className="w-full mt-auto">
                                <Button className="w-full h-12 rounded-lg text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Partner With Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section in a Colored Container */}
            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                        {/* Background subtle pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-sm">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                                Join us and <br className="md:hidden" /> start building.
                            </h2>
                            <p className="text-xl text-blue-100 max-w-2xl font-medium leading-relaxed mb-12">
                                The next generation of professional matching is here. <br className="hidden sm:block" />
                                Experience the future of talent acquisition and career growth.
                            </p>
                            <Link to="/register">
                                <Button size="lg" className="bg-white hover:bg-blue-50 text-primary rounded-2xl px-12 h-16 text-lg font-semibold tracking-tight border-b-4 border-slate-200 shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-2xl active:translate-y-[0px]">
                                    Create Your Account
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
