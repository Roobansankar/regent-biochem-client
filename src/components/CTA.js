"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { API } from "@/lib/api";

export default function CTA({ blogId, blogSlug }) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
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
    setMessage("");
    try {
      const res = await fetch(`${API}/cta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page_source: pathname,
          blog_id: blogId || null,
          blog_slug: blogSlug || null,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We'll be in touch soon.");
        setEmail("");
        setShowAlert(true);
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
    <>
      {showAlert && (
        <div className="fixed top-6 right-6 z-50 animate-slide-down">
          <div className="bg-white rounded-2xl shadow-2xl border border-green/20 p-5 flex items-center gap-4 min-w-[320px]">
            <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
              <i className="fas fa-check-circle text-green text-lg"></i>
            </div>
            <div>
              <p className="font-bold text-brand-black text-sm">Successfully Subscribed!</p>
              <p className="text-xs text-brand-muted mt-0.5">Thank you! We&apos;ll be in touch soon.</p>
            </div>
            <button onClick={() => setShowAlert(false)} className="ml-auto text-slate-400 hover:text-slate-600">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
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
          </form>
        </div>
      </section>
    </>
  );
}
