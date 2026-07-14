"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: "fa-chart-pie" },
  { label: "Messages", href: "/admin/messages", icon: "fa-envelope" },
  { label: "Blog", href: "/admin/blog", icon: "fa-newspaper" },
  { label: "Jobs", href: "/admin/jobs", icon: "fa-briefcase" },
  { label: "Case Studies", href: "/admin/case-studies", icon: "fa-book-open" },
  { label: "CTA", href: "/admin/cta", icon: "fa-bullhorn" },
  { label: "Products (Machines)", href: "/admin/products", icon: "fa-box" },
  { label: "Products (Liquids)", href: "/admin/liquid-products", icon: "fa-flask" },
  { label: "Product Filters", href: "/admin/product-filters", icon: "fa-filter" },
];

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const stored = localStorage.getItem("admin_user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else if (!isLoginPage) {
      router.push("/admin/login");
    }
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg2">
        <div className="animate-spin w-8 h-8 border-4 border-green border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg2">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 z-30 ${
          sidebarOpen ? "w-64" : "w-16"
        } bg-green text-white flex flex-col transition-all duration-300 shrink-0 shadow-xl`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center px-4 border-b border-white/10 shrink-0">
          <Link href="/admin">
            <img 
              src="/logo.png" 
              alt="Bio-Chem Logo" 
              className="h-11 w-auto brightness-0 invert" 
            />
          </Link>
        </div>

        {/* Nav - scrollable */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-2 scrollbar-thin">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  active
                    ? "bg-white text-green shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <i className={`fas ${link.icon} text-base w-5 text-center ${active ? "text-green" : ""}`}></i>
                {sidebarOpen && <span className="font-bold">{link.label}</span>}
                {active && sidebarOpen && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom fixed section */}
        <div className="shrink-0">
          <div className="px-3 py-3 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-green text-[10px] font-black shrink-0">
                {user.username.charAt(0).toUpperCase()}
              </div>
              {sidebarOpen && (
                <div className="text-xs">
                  <p className="font-bold text-white">{user.username}</p>
                  <p className="text-white/60 capitalize">{user.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className={`flex-1 flex flex-col min-w-0 ${sidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300`}>
        {/* Header */}
        <header className="h-16 bg-white border-b border-brand-border flex items-center justify-between px-6 shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 rounded-lg bg-brand-bg2 flex items-center justify-center text-brand-muted hover:bg-green-light hover:text-green transition-all"
            >
              <i className={`fas fa-bars text-sm`}></i>
            </button>
            <div>
              <h2 className="text-sm font-black text-brand-black capitalize">
                {pathname === "/admin" ? "Dashboard" : pathname.split("/").pop().replace(/-/g, " ")}
              </h2>
              <p className="text-[11px] text-brand-muted font-bold">Admin Panel</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-px bg-brand-border"></div>
            <button
              onClick={() => {
                localStorage.removeItem("admin_user");
                localStorage.removeItem("admin_token");
                router.push("/admin/login");
              }}
              className="flex items-center gap-2 text-sm text-brand-muted hover:text-red-500 transition-colors"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className="hidden sm:inline font-bold">Logout</span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}