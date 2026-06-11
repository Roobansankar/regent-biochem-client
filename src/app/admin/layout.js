"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: "fa-chart-pie" },
  { label: "Messages", href: "/admin/messages", icon: "fa-envelope" },
  { label: "Blog", href: "/admin/blog", icon: "fa-newspaper" },
  { label: "Products", href: "/admin/products", icon: "fa-box" },
  { label: "Services", href: "/admin/services", icon: "fa-concierge-bell" },
  { label: "Orders", href: "/admin/orders", icon: "fa-shopping-cart" },
  { label: "Users", href: "/admin/users", icon: "fa-users" },
  { label: "Settings", href: "/admin/settings", icon: "fa-gear" },
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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 z-30 ${
          sidebarOpen ? "w-64" : "w-16"
        } bg-slate-900 text-white flex flex-col transition-all duration-300 shrink-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-white/5 shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30">
            <i className="fas fa-droplet text-white text-sm"></i>
          </div>
          {sidebarOpen && (
            <div>
              <span className="text-sm font-bold tracking-tight">Bio-Chem</span>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Nav - scrollable */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-2 scrollbar-thin">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  active
                    ? "bg-gradient-to-r from-indigo-600/80 to-indigo-600/20 text-white shadow-sm shadow-indigo-600/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <i className={`fas ${link.icon} text-base w-5 text-center ${active ? "text-indigo-300" : ""}`}></i>
                {sidebarOpen && <span className="font-medium">{link.label}</span>}
                {active && sidebarOpen && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom fixed section */}
        <div className="shrink-0">
          <div className="px-3 py-3 border-t border-white/5">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                A
              </div>
              {sidebarOpen && (
                <div className="text-xs">
                  <p className="font-semibold text-white">{user.username}</p>
                  <p className="text-slate-500 capitalize">{user.role}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </aside>

      {/* Main area */}
      <div className={`flex-1 flex flex-col min-w-0 ${sidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300`}>
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              <i className={`fas fa-bars text-sm`}></i>
            </button>
            <div>
              <h2 className="text-sm font-bold text-slate-800 capitalize">
                {pathname === "/admin" ? "Dashboard" : pathname.split("/").pop().replace(/-/g, " ")}
              </h2>
              <p className="text-[11px] text-slate-400">Bio-Chem Surface Technology</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all relative">
              <i className="fas fa-bell text-sm"></i>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">3</span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <button
              onClick={() => {
                localStorage.removeItem("admin_user");
                router.push("/admin/login");
              }}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 transition-colors"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className="hidden sm:inline font-medium">Logout</span>
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
