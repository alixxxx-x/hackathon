import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AdminRoute from "@/routes/AdminRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import AdminPanel from "@/pages/AdminPanel";
import AboutUs from "@/pages/AboutUs";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const hideNavFooter = isAuthPage || isDashboardPage;

  return (
    <ThemeProvider defaultTheme="light" storageKey="template-theme">
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground tracking-tight">
          {!hideNavFooter && <Navbar />}
          {!hideNavFooter && <div className="h-16"></div>}
          
          <main className={!isDashboardPage ? "flex-1" : "flex flex-col min-h-screen"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminPanel />
                  </AdminRoute>
                }
              />
              <Route path="/logout" element={<Logout />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Dashboard />} />
                <Route path="listings" element={<Dashboard />} />
                <Route path="applications" element={<Dashboard />} />
              </Route>

              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

          {!hideNavFooter && <Footer />}
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

export default App;

