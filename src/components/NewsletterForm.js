"use client";

import { useState, useEffect } from "react";
import { API } from "@/lib/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(`${API}/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setShowAlert(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-6 right-6 z-50 animate-slide-down">
          <div className="bg-white rounded-2xl shadow-2xl border border-green/20 p-5 flex items-center gap-4 min-w-[320px]">
            <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
              <i className="fas fa-check-circle text-green text-lg"></i>
            </div>
            <div>
              <p className="font-bold text-brand-black text-sm">Successfully Subscribed!</p>
              <p className="text-xs text-brand-muted mt-0.5">Thank you! You&apos;re subscribed.</p>
            </div>
            <button onClick={() => setShowAlert(false)} className="ml-auto text-slate-400 hover:text-slate-600">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="form-input flex-1"
          required
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-green text-white font-bold px-8 py-3 rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </>
  );
}
