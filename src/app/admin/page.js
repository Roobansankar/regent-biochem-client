"use client";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Products", value: "24", icon: "fa-box", bg: "bg-green-light" },
    { label: "Active Services", value: "18", icon: "fa-concierge-bell", bg: "bg-sky-50" },
    { label: "Pending Orders", value: "7", icon: "fa-shopping-cart", bg: "bg-amber-50" },
    { label: "Total Users", value: "142", icon: "fa-users", bg: "bg-rose-50" },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-brand-black tracking-tight">Dashboard</h1>
          <p className="text-sm text-brand-muted mt-1">Welcome back, Admin. Here&apos;s your business overview.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-muted">
          <i className="fas fa-sync-alt"></i>
          <span className="font-medium">Updated just now</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-brand-border p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <i className={`fas ${stat.icon} text-green text-lg`}></i>
              </div>
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">This month</span>
            </div>
            <p className="text-2xl font-black text-brand-black">{stat.value}</p>
            <p className="text-xs text-brand-muted mt-0.5 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}