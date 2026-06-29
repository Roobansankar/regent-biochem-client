"use client";

import { useState } from "react";
import { API } from "@/lib/api";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(`${API}/cta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We'll be in touch soon.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="bg-green py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-white/70 mb-4">
            <span className="w-8 h-px bg-white/30"></span> GREEN WAY TO GROWTH
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Ready to Modernize
            <br />
            Your Process?
          </h2>
          <p className="text-white/85 text-sm leading-relaxed">
            Consult with our application engineers to find the ideal cleaning or surface protection configuration for
            your facility.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 lg:justify-end">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 sm:max-w-xs bg-white/20 border border-white/35 text-white placeholder-white/60 px-4 py-3 rounded text-sm outline-none focus:border-white focus:bg-white/25 transition-colors font-sans disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-green font-bold text-sm px-6 py-3 rounded hover:-translate-y-0.5 transition-transform whitespace-nowrap disabled:opacity-50"
          >
            {status === "loading" ? "Submitting..." : "Request Consultation"}
          </button>
          {message && (
            <p className={`text-sm sm:text-xs font-medium mt-1 sm:mt-0 sm:absolute sm:bottom-0 sm:translate-y-full ${status === "success" ? "text-green-200" : "text-red-200"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
