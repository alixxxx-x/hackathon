import { useState } from "react";
import api from "@/api/api";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Layout, User } from "lucide-react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let EmptyErrors = {};
        if (!username.trim()) EmptyErrors.username = "Username is required";
        if (!email.trim()) EmptyErrors.email = "Email is required";
        if (!password) EmptyErrors.password = "Password is required";

        if (Object.keys(EmptyErrors).length > 0) {
            setErrors(EmptyErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        try {
            await api.post("/auth/register/", { username, email, password });
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                const backendErrors = error.response.data;
                const newErrors = {};
                for (const key in backendErrors) {
                    newErrors[key] = Array.isArray(backendErrors[key]) ? backendErrors[key][0] : backendErrors[key];
                }
                setErrors(newErrors);
            } else {
                alert("Registration failed. Please check your connection and try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            {/* ─── Logo ─── */}
            <div className="mb-8 flex flex-col items-center gap-2">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        <Layout className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Template
                    </span>
                </Link>
            </div>

            {/* ─── Standard Shadcn Card ─── */}
            <Card className="w-full max-w-md border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none bg-white dark:bg-zinc-900 rounded-xl overflow-hidden">
                <CardHeader className="space-y-1.5 pt-8 pb-6 px-8 text-center sm:text-left border-b border-zinc-100 dark:border-zinc-800/50">
                    <CardTitle className="text-2xl font-semibold tracking-tight">Create an account</CardTitle>
                    <CardDescription className="text-zinc-500 dark:text-zinc-400">
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="johndoe"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value); setErrors(prev => ({ ...prev, username: null })) }}
                                    className="pl-10 h-11 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg"
                                />
                            </div>
                            {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: null })) }}
                                    className="pl-10 h-11 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg"
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="password"
                                    type={showPw ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: null })) }}
                                    className="pl-10 pr-10 h-11 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw(!showPw)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-sm transition-colors mt-2"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Creating account...
                                </div>
                            ) : (
                                "Sign Up"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="bg-zinc-50 dark:bg-zinc-800/30 p-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                    <div className="w-full text-center">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary font-semibold hover:underline underline-offset-4">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardFooter>
            </Card>

            {/* ─── Simple Footer ─── */}
            <div className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
                © 2026 Template Platform. All rights reserved.
            </div>
        </div>
    );
}

export default Register;
