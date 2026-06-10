"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-[100px]"></div>

      <div className="relative w-full max-w-md mx-4">
        {/* Logo bar */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <i className="fas fa-droplet text-white text-sm"></i>
            </div>
            <span className="text-sm font-semibold text-white/80">Bio-Chem Admin</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-400 mt-2">Sign in to your account to continue</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {error && (
            <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm">
              <i className="fas fa-circle-exclamation"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Username</label>
              <div className="relative">
                <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-sky-400 transition-all shadow-lg shadow-indigo-500/25"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-xs text-slate-600 text-center mt-6">
          Default: admin / admin123
        </p>
      </div>
    </div>
  );
}
