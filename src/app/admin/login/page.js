"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/lib/api";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("admin_user", JSON.stringify(data.user));
        localStorage.setItem("admin_token", data.token);
        router.push("/admin");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Server error. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green to-green-dark">
      <div className="w-full max-w-[420px] mx-4 bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <img src="/logo-header.webp" alt="Bio-Chem Logo" className="h-14 w-auto mx-auto mb-6" />
          <h2 className="text-2xl font-black text-brand-black tracking-tight">Welcome back</h2>
          <p className="text-sm font-medium text-brand-muted mt-1">
            Sign in to the admin dashboard
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-semibold">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-green text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-green-dark transition-all shadow-lg shadow-green/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}