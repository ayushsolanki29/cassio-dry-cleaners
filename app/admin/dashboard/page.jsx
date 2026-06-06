"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LogOut, Users, Menu, Activity, Globe, Inbox, LayoutDashboard, Settings
} from "lucide-react";

/* ── component ─────────────────────────────────────────── */

export default function AdminDashboard() {
  const router  = useRouter();
  const [loading,  setLoading ] = useState(true);
  const [navOpen,  setNavOpen ] = useState(false);
  
  const [dashboardStats, setDashboardStats] = useState({
    totalVisitors: 0, totalContacts: 0, monthContacts: 0, monthVisitors: 0
  });

  /* auth */
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) { router.push("/admin"); return; }
    load();
  }, []);

  async function load() {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const opts = { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } };
      
      const [rContacts, rAllVisitors, rMonthVisitors] = await Promise.all([
        fetch(`${apiBase}/admin/contacts.php`, opts),
        fetch(`${apiBase}/admin/footfall/summary.php?filter=all`, opts),
        fetch(`${apiBase}/admin/footfall/summary.php?filter=30days`, opts)
      ]);

      if (rContacts.ok) { 
        const d = await rContacts.json(); 
        const mContacts = d.contacts.filter(c => new Date(c.date) >= new Date(Date.now() - 30*864e5)).length;
        
        let tVisitors = 0, mVisitors = 0;
        if (rAllVisitors.ok) tVisitors = (await rAllVisitors.json()).uniqueVisitors || 0;
        if (rMonthVisitors.ok) mVisitors = (await rMonthVisitors.json()).uniqueVisitors || 0;

        setDashboardStats({
          totalVisitors: tVisitors,
          totalContacts: d.contacts.length,
          monthContacts: mContacts,
          monthVisitors: mVisitors
        });
      }
      else router.push("/admin");
    } finally { setLoading(false); }
  }

  /* ── loading screen ── */
  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-[#f5f6fa]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-primary border-t-transparent" />
        <p className="text-sm font-medium text-slate-500">Loading dashboard…</p>
      </div>
    </div>
  );

  /* ── page ── */
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6fa] font-body">

      {/* ════════ SIDEBAR ════════ */}
      <AnimatePresence>
        {navOpen && (
          <motion.div key="overlay"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed inset-y-0 left-0 z-50 flex w-[240px] flex-col bg-navy shadow-2xl
        transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]
        lg:relative lg:translate-x-0
        ${navOpen ? "translate-x-0" : "-translate-x-full"}
      `}>

        {/* brand */}
        <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
          <Image src="/assets/cassio-logo.jpeg" alt="" width={36} height={36}
            className="rounded-full ring-2 ring-white/20" />
          <div>
            <p className="font-display text-base font-bold text-white leading-none">
              Cassio<span className="text-brand">.</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mt-0.5">Admin</p>
          </div>
        </div>

        {/* nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true,  path: "/admin/dashboard" },
            { icon: Inbox,           label: "Contacts",  active: false, path: "/admin/contacts" },
            { icon: Activity,        label: "Footfall",  active: false, path: "/admin/footfall" },
            { icon: Settings,        label: "Settings",  active: false, path: "/admin/settings" },
          ].map(({ icon: Icon, label, active, path }) => (
            <button key={label}
              onClick={() => path && router.push(path)}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all
                ${active ? "bg-white/15 text-white" : "text-white/50 hover:bg-white/8 hover:text-white/80"}`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
            </button>
          ))}
        </nav>

        {/* logout */}
        <div className="border-t border-white/10 p-3">
          <button
            onClick={() => { localStorage.removeItem("adminToken"); router.push("/admin"); }}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-white/50 transition-all hover:bg-white/8 hover:text-red-400"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Log out
          </button>
        </div>
      </aside>

      {/* ════════ CONTENT ════════ */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* top bar */}
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setNavOpen(v => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 lg:hidden hover:bg-slate-200 transition-colors"
            >
              <Menu className="h-4 w-4 text-slate-600" />
            </button>
            <div>
              <h1 className="font-display text-lg font-bold text-navy">Dashboard Overview</h1>
              <p className="text-xs text-slate-400">High-level metrics for your business</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 py-8 space-y-7">

            {/* ── STAT CARDS ── */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Total Visitors",         value: dashboardStats.totalVisitors, sub: "All time website visitors",    Icon: Users,    from: "from-sky-400",     to: "to-blue-600"    },
                { label: "Total Submissions",      value: dashboardStats.totalContacts, sub: "All time contact forms",       Icon: Inbox,    from: "from-emerald-400", to: "to-teal-600"    },
                { label: "This Month Submissions", value: dashboardStats.monthContacts, sub: "Last 30 days submissions",     Icon: Activity, from: "from-amber-400",   to: "to-orange-500"  },
                { label: "This Month Visitors",    value: dashboardStats.monthVisitors, sub: "Last 30 days visitors",        Icon: Globe,    from: "from-violet-400",  to: "to-purple-600"  },
              ].map(({ label, value, sub, Icon, from, to }) => (
                <div key={label}
                  className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`absolute right-3 top-3 h-10 w-10 rounded-xl bg-gradient-to-br ${from} ${to} flex items-center justify-center shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="mt-2 font-display text-3xl font-bold text-navy">{value}</p>
                  <p className="mt-1 text-[10px] text-slate-400">{sub}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-24 mt-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                <LayoutDashboard className="h-8 w-8 text-slate-300" />
              </div>
              <p className="font-display text-lg font-semibold text-navy">Welcome to your dashboard</p>
              <p className="mt-2 text-sm text-slate-400 text-center max-w-md">
                Select <span className="font-semibold text-slate-500">Contacts</span> or <span className="font-semibold text-slate-500">Footfall</span> from the sidebar menu to view detailed records and analytics.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
