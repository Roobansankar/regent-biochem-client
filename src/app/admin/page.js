"use client";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Products", value: "24", icon: "fa-box", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50" },
    { label: "Active Services", value: "18", icon: "fa-concierge-bell", color: "from-sky-500 to-sky-600", bg: "bg-sky-50" },
    { label: "Pending Orders", value: "7", icon: "fa-shopping-cart", color: "from-amber-500 to-amber-600", bg: "bg-amber-50" },
    { label: "Total Users", value: "142", icon: "fa-users", color: "from-rose-500 to-rose-600", bg: "bg-rose-50" },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Welcome back, Admin. Here&apos;s your business overview.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <i className="fas fa-sync-alt"></i>
          <span>Updated just now</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <i className={`fas ${stat.icon} bg-gradient-to-br ${stat.color} bg-clip-text text-transparent text-lg`}></i>
              </div>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">This month</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
              <i className="fas fa-bolt text-sky-600 text-sm"></i>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Quick Actions</h3>
              <p className="text-[11px] text-slate-400">Common tasks</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { label: "Add New Product", icon: "fa-plus", color: "text-indigo-600 bg-indigo-50 hover:bg-indigo-100" },
              { label: "View Orders", icon: "fa-receipt", color: "text-sky-600 bg-sky-50 hover:bg-sky-100" },
              { label: "Manage Users", icon: "fa-user-gear", color: "text-amber-600 bg-amber-50 hover:bg-amber-100" },
              { label: "Generate Report", icon: "fa-file-chart-column", color: "text-rose-600 bg-rose-50 hover:bg-rose-100" },
            ].map((action) => (
              <button
                key={action.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium ${action.color} transition-all`}
              >
                <i className={`fas ${action.icon} text-sm`}></i>
                {action.label}
              </button>
            ))}
          </div>
        </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-indigo-600 text-sm"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">Monthly Revenue</h3>
                <p className="text-[11px] text-slate-400">Year 2026</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
          </div>
          <div className="flex items-end gap-1.5 h-36">
            {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-sky-400 rounded-t-md hover:from-indigo-600 hover:to-sky-500 transition-all"
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[10px] text-slate-400 font-medium">
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
