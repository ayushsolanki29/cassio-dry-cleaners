"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LogOut, Mail, Phone, Calendar, Search, Download, Trash2, Eye, X, Users,
  CheckCircle, Clock, Star, Menu, ChevronDown, Inbox, LayoutDashboard, Activity, Settings
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/* ── helpers ───────────────────────────────────────────── */

const SERVICE_PILL = {
  "Dry Cleaning":           "bg-sky-50    text-sky-700   border-sky-200",
  "Wash + Iron":            "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Wash, Dry & Fold":       "bg-violet-50 text-violet-700 border-violet-200",
  "Iron Only":              "bg-amber-50  text-amber-700  border-amber-200",
  "Commercial / Business":  "bg-orange-50 text-orange-700 border-orange-200",
  "Request My Area":        "bg-pink-50   text-pink-700   border-pink-200",
  "General Inquiries":      "bg-slate-50  text-slate-600  border-slate-200",
  "Other":                  "bg-slate-50  text-slate-500  border-slate-200",
};

function Pill({ label }) {
  const cls = SERVICE_PILL[label] ?? "bg-slate-50 text-slate-500 border-slate-200";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}>
      {label}
    </span>
  );
}

const AVATAR_COLORS = [
  "from-sky-400 to-blue-600",
  "from-violet-400 to-purple-600",
  "from-pink-400 to-rose-600",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-600",
];

function Avatar({ name, size = "sm" }) {
  const safeName = name || "?";
  const initials = safeName.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const grad = AVATAR_COLORS[(safeName.charCodeAt(0) || 0) % AVATAR_COLORS.length];
  const sz = size === "lg" ? "h-14 w-14 text-lg" : size === "md" ? "h-10 w-10 text-sm" : "h-8 w-8 text-xs";
  return (
    <div className={`${sz} shrink-0 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center font-bold text-white shadow-sm`}>
      {initials}
    </div>
  );
}

const fmt = d => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const fmtLg = d => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });

const SERVICES = ["Iron Only","Wash + Iron","Wash, Dry & Fold","Dry Cleaning","Commercial / Business","Request My Area","General Inquiries","Other"];

const DATE_FILTERS = [
  { label: "All time", value: "all" },
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "7 Days", value: "7days" },
  { label: "30 Days", value: "30days" },
  { label: "Last Month", value: "lastmonth" },
  { label: "Last 3 Months", value: "3months" },
  { label: "Last 6 Months", value: "6months" },
  { label: "This Year", value: "thisyear" },
];

/* ── component ─────────────────────────────────────────── */

export default function AdminContacts() {
  const router = useRouter();

  // Data states
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, today: 0, thisWeek: 0, avgRating: "4.9" });
  const [totalRecords, setTotalRecords] = useState(0);

  // Pagination & Filtering
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [svc, setSvc] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  
  // UI states
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selected, setSelected] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const { targetRef, isIntersecting } = useIntersectionObserver();

  // Load stats
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) return router.push("/admin");
    const loadStats = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api"}/admin/contacts_stats.php`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
        });
        if (res.ok) {
          const d = await res.json();
          if (d.success) setStats({ total: d.total, today: d.today, thisWeek: d.thisWeek, thisMonth: d.thisMonth });
        }
      } catch (err) {}
    };
    loadStats();
  }, []);

  // Fetch page data
  const fetchContacts = useCallback(async (pageNum, reset = false) => {
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const params = new URLSearchParams({ page: pageNum, limit: 10, search, service: svc, dateFilter });
      
      const res = await fetch(`${apiBase}/admin/contacts.php?${params.toString()}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
      });
      
      if (res.ok) {
        const d = await res.json();
        if (reset) {
          setContacts(d.contacts);
        } else {
          setContacts(prev => {
            // Prevent duplicates using a Map
            const combined = [...prev, ...d.contacts];
            const uniqueMap = new Map(combined.map(c => [c.id, c]));
            return Array.from(uniqueMap.values());
          });
        }
        setTotalRecords(d.total);
        setHasMore(d.hasMore);
      }
    } catch (err) {
      console.error(err);
    }
  }, [search, svc, dateFilter]);

  // Initial load and filter changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    
    // Add small debounce for typing search
    const timer = setTimeout(async () => {
      setInitialLoading(true);
      await fetchContacts(1, true);
      setInitialLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [search, svc, dateFilter, fetchContacts]);

  // Load more trigger
  useEffect(() => {
    if (isIntersecting && hasMore && !loadingMore && !initialLoading) {
      const loadNext = async () => {
        setLoadingMore(true);
        const nextPage = page + 1;
        setPage(nextPage);
        await fetchContacts(nextPage, false);
        setLoadingMore(false);
      };
      loadNext();
    }
  }, [isIntersecting, hasMore, loadingMore, initialLoading, page, fetchContacts]);

  async function del(id) {
    if (!confirm("Delete this submission?")) return;
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
    const r = await fetch(`${apiBase}/admin/contacts.php?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
    });
    if (r.ok) {
      setContacts(prev => prev.filter(c => c.id !== id));
      setTotalRecords(prev => prev - 1);
      setStats(prev => ({ ...prev, total: prev.total - 1 }));
      if (selected?.id === id) setSelected(null);
    }
  }

  async function exportCSV() {
    // For export, we fetch all records without limits matching the current filter
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const params = new URLSearchParams({ search, service: svc, dateFilter }); // No page/limit to fetch all filtered
      const res = await fetch(`${apiBase}/admin/contacts.php?${params.toString()}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
      });
      if (res.ok) {
        const d = await res.json();
        const rows = [
          ["Name","Email","Phone","Service","Message","Date"],
          ...d.contacts.map(c => [c.name, c.email, c.phone||"", c.service, c.message.replace(/,/g,";"), fmt(c.date)]),
        ].map(r => r.map(v => `"${v}"`).join(",")).join("\n");
        Object.assign(document.createElement("a"), {
          href: URL.createObjectURL(new Blob([rows], { type: "text/csv" })),
          download: `contacts-${new Date().toISOString().slice(0,10)}.csv`,
        }).click();
      }
    } catch (err) {
      alert("Failed to export");
    }
  }

  // Skeleton Row Component
  const SkeletonRow = () => (
    <div className="grid grid-cols-[2fr_2fr_1.4fr_1fr_80px] gap-4 items-center px-5 py-4 border-t border-slate-50 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-slate-200" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-24 rounded bg-slate-200" />
          <div className="h-3 w-40 rounded bg-slate-100" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-32 rounded bg-slate-200" />
        <div className="h-3 w-24 rounded bg-slate-100" />
      </div>
      <div><div className="h-5 w-20 rounded-full bg-slate-200" /></div>
      <div><div className="h-4 w-16 rounded bg-slate-200" /></div>
      <div className="flex justify-end"><div className="h-7 w-16 rounded bg-slate-200" /></div>
    </div>
  );

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
          <Image src="/assets/cassio-logo.jpeg" alt="" width={36} height={36} className="rounded-full ring-2 ring-white/20" />
          <div>
            <p className="font-display text-base font-bold text-white leading-none">Cassio<span className="text-brand">.</span></p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mt-0.5">Admin</p>
          </div>
        </div>

        {/* nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: false, path: "/admin/dashboard" },
            { icon: Inbox,           label: "Contacts",  active: true,  path: "/admin/contacts" },
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
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 lg:hidden hover:bg-slate-200"
            >
              <Menu className="h-4 w-4 text-slate-600" />
            </button>
            <div>
              <h1 className="font-display text-lg font-bold text-navy">Contact Submissions</h1>
              <p className="text-xs text-slate-400">{stats.total} total &nbsp;·&nbsp; {stats.today} today</p>
            </div>
          </div>
          <button onClick={exportCSV} className="hidden sm:flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col px-6 py-8 space-y-7 overflow-hidden">

            {/* ── STAT CARDS ── */}
            <div className="shrink-0 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { label: "Total submissions", value: stats.total,    Icon: Users,       from: "from-sky-400",     to: "to-blue-600" },
                { label: "Received today",    value: stats.today,    Icon: CheckCircle, from: "from-emerald-400", to: "to-teal-600" },
                { label: "This week",         value: stats.thisWeek, Icon: Clock,       from: "from-amber-400",   to: "to-orange-500" },
                { label: "This month",        value: stats.thisMonth,Icon: Calendar,    from: "from-violet-400",  to: "to-purple-600" },
              ].map(({ label, value, Icon, from, to }) => (
                <div key={label} className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                  <div className={`absolute right-3 top-3 h-10 w-10 rounded-xl bg-gradient-to-br ${from} ${to} flex items-center justify-center shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="mt-2 font-display text-3xl font-bold text-navy">{value}</p>
                </div>
              ))}
            </div>

            {/* ── FILTER BAR ── */}
            <div className="shrink-0 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search name, email or message…"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-navy shadow-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="relative sm:w-48">
                <select
                  value={svc}
                  onChange={e => setSvc(e.target.value)}
                  className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-4 pr-9 text-sm text-navy shadow-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="all">All services</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>

              <div className="relative sm:w-48">
                <select
                  value={dateFilter}
                  onChange={e => setDateFilter(e.target.value)}
                  className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-4 pr-9 text-sm text-navy shadow-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {DATE_FILTERS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <p className="shrink-0 text-xs text-slate-400 -mt-3">
              Showing <span className="font-semibold text-navy">{contacts.length}</span> of <span className="font-semibold text-navy">{totalRecords}</span> filtered submissions
            </p>

            {/* ── TABLE ── */}
            {initialLoading ? (
              <div className="flex-1 flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="shrink-0 grid grid-cols-[2fr_2fr_1.4fr_1fr_80px] gap-4 border-b border-slate-100 bg-slate-50 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <span>Customer</span><span>Contact</span><span>Service</span><span>Date</span><span />
                </div>
                <div className="flex-1 overflow-y-auto">
                  {[1, 2, 3, 4, 5].map(i => <SkeletonRow key={i} />)}
                </div>
              </div>
            ) : contacts.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-20">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                  <Inbox className="h-6 w-6 text-slate-400" />
                </div>
                <p className="font-display text-base font-semibold text-navy">No submissions found</p>
                <p className="mt-1 text-sm text-slate-400">Try a different search or filter</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="shrink-0 grid grid-cols-[2fr_2fr_1.4fr_1fr_80px] gap-4 border-b border-slate-100 bg-slate-50 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <span>Customer</span><span>Contact</span><span>Service</span><span>Date</span><span />
                </div>

                <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
                  {contacts.map((c, i) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0, duration: 0.2 }}
                      className="group grid grid-cols-[2fr_2fr_1.4fr_1fr_80px] gap-4 items-center px-5 py-4 hover:bg-slate-50 transition-colors"
                    >
                      {/* customer */}
                      <div className="flex items-center gap-3 min-w-0">
                        <Avatar name={c.name} />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-navy">{c.name}</p>
                          <p className="mt-0.5 max-w-[160px] truncate text-xs text-slate-400">{c.message}</p>
                        </div>
                      </div>

                      {/* contact */}
                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Mail className="h-3 w-3 shrink-0 text-primary" />
                          <span className="truncate">{c.email}</span>
                        </div>
                        {c.phone && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <Phone className="h-3 w-3 shrink-0 text-brand" />
                            <span>{c.phone}</span>
                          </div>
                        )}
                      </div>

                      {/* service */}
                      <div><Pill label={c.service} /></div>

                      {/* date */}
                      <div className="flex items-center gap-1 text-xs text-slate-400 whitespace-nowrap">
                        <Calendar className="h-3 w-3 shrink-0" />
                        {fmt(c.date)}
                      </div>

                      {/* actions */}
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setSelected(c)} className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white" title="View">
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => del(c.id)} className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white" title="Delete">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Infinity Scroll Anchor & Feedback */}
                  {hasMore && (
                    <div ref={targetRef} className="py-4">
                      {loadingMore && <SkeletonRow />}
                    </div>
                  )}
                  {!hasMore && contacts.length > 0 && (
                    <div className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                      No More Records Available
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ════════ DETAIL DRAWER ════════ */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div key="bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy/20 backdrop-blur-sm" onClick={() => setSelected(null)} />

            <motion.div key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col bg-white shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <Avatar name={selected.name} size="md" />
                  <div>
                    <p className="font-display text-base font-bold text-navy leading-tight">{selected.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{fmtLg(selected.date)}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200">
                  <X className="h-4 w-4 text-slate-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Service</p>
                  <Pill label={selected.service} />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Contact info</p>
                  <a href={`mailto:${selected.email}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100"><Mail className="h-4 w-4 text-sky-600" /></div>
                    <div className="min-w-0"><p className="text-[10px] text-slate-400">Email</p><p className="truncate text-sm font-semibold text-navy">{selected.email}</p></div>
                  </a>
                  {selected.phone ? (
                    <a href={`tel:${selected.phone}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 group">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100"><Phone className="h-4 w-4 text-orange-600" /></div>
                      <div><p className="text-[10px] text-slate-400">Phone</p><p className="text-sm font-semibold text-navy">{selected.phone}</p></div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100"><Phone className="h-4 w-4 text-slate-300" /></div>
                      <p className="text-sm text-slate-400">No phone provided</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Message</p>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-4"><p className="text-sm leading-relaxed text-navy whitespace-pre-wrap">{selected.message}</p></div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4">
                <button onClick={() => { del(selected.id); setSelected(null); }} className="flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-500">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
                <button onClick={() => setSelected(null)} className="ml-auto flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white">
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
