"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin_user", JSON.stringify({ username, role: "admin" }));
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel - Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-green to-green-dark">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-0 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col justify-between p-12 lg:p-16 w-full">
          <Link href="/" className="inline-block">
            <img src="/logo.png" alt="Bio-Chem Logo" className="h-16 w-auto brightness-0 invert" />
          </Link>

          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Admin Control Center
            </h1>
            <p className="text-white/80 text-base font-medium max-w-md leading-relaxed">
              Manage products, machines, orders, and customer inquiries for Bio-Chem's cleaning chemicals and equipment platform.
            </p>
          </div>

          <p className="text-white/60 text-sm font-bold">
            © {new Date().getFullYear()} Bio-Chem. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <div className="absolute inset-0 dot-bg opacity-30 lg:hidden"></div>

        <div className="relative w-full max-w-[420px]">
          {/* Mobile logo */}
          <Link href="/" className="inline-block mb-10 lg:hidden">
            <img src="/logo.png" alt="Bio-Chem Logo" className="h-16 w-auto" />
          </Link>

          <div className="hidden lg:block text-xs font-black text-green uppercase tracking-[0.2em] mb-3">
            Admin Panel
          </div>
          <h2 className="text-3xl font-black text-brand-black tracking-tight mb-2">Welcome back</h2>
          <p className="text-sm font-medium text-brand-muted mb-10">
            Sign in to access the admin dashboard
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-semibold animate-shake">
              <i className="fas fa-circle-exclamation"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-black text-brand-black uppercase tracking-[0.15em] mb-2.5 ml-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-muted group-focus-within:text-green transition-colors">
                  <i className="fas fa-user-shield text-sm"></i>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-brand-bg2 border border-brand-border rounded-2xl text-sm font-semibold text-brand-black placeholder-brand-muted/50 focus:outline-none focus:ring-4 focus:ring-green/10 focus:border-green focus:bg-white transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-brand-black uppercase tracking-[0.15em] mb-2.5 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-muted group-focus-within:text-green transition-colors">
                  <i className="fas fa-key text-sm"></i>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-14 py-4 bg-brand-bg2 border border-brand-border rounded-2xl text-sm font-semibold text-brand-black placeholder-brand-muted/50 focus:outline-none focus:ring-4 focus:ring-green/10 focus:border-green focus:bg-white transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-muted hover:text-green transition-colors"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-sm`}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-brand-border text-green focus:ring-green/20" />
                <span className="text-xs font-bold text-brand-body group-hover:text-green transition-colors">
                  Remember me
                </span>
              </label>
              <button type="button" className="text-xs font-bold text-green hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-green-dark transition-all shadow-lg shadow-green/25 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 flex justify-center gap-6">
            <Link href="/" className="text-xs font-black text-brand-black hover:text-green transition-colors">
              Website
            </Link>
            <Link href="/contact" className="text-xs font-black text-brand-black hover:text-green transition-colors">
              Support
            </Link>
            <Link href="/faq" className="text-xs font-black text-brand-black hover:text-green transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}