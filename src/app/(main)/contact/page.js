"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        
        // Disappear after 4 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 4000);
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <ScrollReveal />

      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              Get in <span className="text-green-mid">Touch</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
             Reach out to our technical team today for product specifications, custom quotes, or maintenance support.
            </p>
          </div>
        </div>
      </section>

      <main className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 reveal">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-6">
                  <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Contact Information
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                  How can we <span className="text-green-600">help you?</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
                  Whether you&apos;re looking for a specific cleaning system, chemical formulation or need technical support, we&apos;re here to provide the expertise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">24, Sungam Bypass Road,<br/>Paari Nagar,<br/>Coimbatore,<br/>Tamil Nadu - 641045</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">0422 231 0396</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">info@regentbiochem.com<br/>support@regentbiochem.com</p>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    <Link href="#" className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-600 transition-all"><i className="fab fa-linkedin-in"></i></Link>
                    <Link href="#" className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-600 transition-all"><i className="fab fa-twitter"></i></Link>
                    <Link href="#" className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-600 transition-all"><i className="fab fa-facebook-f"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 reveal flex flex-col items-center lg:items-end">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-10 shadow-card w-full max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="form-input py-3" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="form-input py-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                      <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className="form-input py-3" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Subject</label>
                      <div className="relative">
                        <select id="subject" value={formData.subject} onChange={handleChange} className="form-input appearance-none pr-10 py-3">
                          <option value="">Select an option</option>
                          <option value="product">Product Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="consultation">Request Consultation</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <i className="fas fa-chevron-down text-[10px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Your Message</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us about your requirements..." className="form-input resize-none py-3"></textarea>
                  </div>

                  {status.message && (
                    <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      {status.message}
                    </div>
                  )}

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className={`w-full sm:w-auto bg-green text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-dark hover:-translate-y-1 transition-all shadow-lg shadow-green/20 text-sm flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}>
                      {loading ? "Sending..." : "Send Message"} <i className="fas fa-paper-plane text-[10px]"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>


        </div>
      </main>
    </main>
  );
}
