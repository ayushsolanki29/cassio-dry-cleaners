"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LogOut, LayoutDashboard, Inbox, Activity, Settings as SettingsIcon, Menu, Shield, Save
} from "lucide-react";

export default function AdminSettings() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      router.push("/admin");
    } else {
      // Decode email from token (token format: base64(email:timestamp))
      try {
        const token = localStorage.getItem("adminToken");
        const decoded = atob(token);
        const tokenEmail = decoded.split(":")[0];
        setEmail(tokenEmail);
      } catch (e) {
        setEmail("admin@cassio.com");
      }
    }
  }, [router]);

  async function handleSave(e) {
    e.preventDefault();
    if (!email || !currentPassword) {
      setMessage({ type: "error", text: "Email and Current Password are required." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const res = await fetch(`${apiBase}/admin/update_credentials.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify({ email, currentPassword, newPassword })
      });

      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: "Credentials updated successfully!" });
        setCurrentPassword("");
        setNewPassword("");
        
        // Update token with new email so it persists
        const newToken = btoa(`${email}:${Date.now()}`);
        localStorage.setItem("adminToken", newToken);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to update credentials." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error occurred." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f6fa] font-body">
      {/* ════════ SIDEBAR ════════ */}
      <AnimatePresence>
        {navOpen && (
          <motion.div key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
        <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
          <Image src="/assets/cassio-logo.jpeg" alt="" width={36} height={36} className="rounded-full ring-2 ring-white/20" />
          <div>
            <p className="font-display text-base font-bold text-white leading-none">Cassio<span className="text-brand">.</span></p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mt-0.5">Admin</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: false, path: "/admin/dashboard" },
            { icon: Inbox,           label: "Contacts",  active: false, path: "/admin/contacts" },
            { icon: Activity,        label: "Footfall",  active: false, path: "/admin/footfall" },
            { icon: SettingsIcon,    label: "Settings",  active: true,  path: "/admin/settings" },
          ].map(({ icon: Icon, label, active, path }) => (
            <button key={label} onClick={() => path && router.push(path)}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all
                ${active ? "bg-white/15 text-white" : "text-white/50 hover:bg-white/8 hover:text-white/80"}`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-3">
          <button onClick={() => { localStorage.removeItem("adminToken"); router.push("/admin"); }}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-white/50 transition-all hover:bg-white/8 hover:text-red-400"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Log out
          </button>
        </div>
      </aside>

      {/* ════════ CONTENT ════════ */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setNavOpen(v => !v)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 lg:hidden hover:bg-slate-200">
              <Menu className="h-4 w-4 text-slate-600" />
            </button>
            <div>
              <h1 className="font-display text-lg font-bold text-navy">Settings</h1>
              <p className="text-xs text-slate-400">Manage your admin account credentials</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-6 py-10">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <Shield className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h2 className="font-display text-base font-bold text-navy">Admin Credentials</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Update the email and password used to access this panel.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-5">
                {message.text && (
                  <div className={`rounded-xl p-4 text-sm font-semibold ${message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                    {message.text}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Admin Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Current Password</label>
                      <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required
                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">New Password</label>
                      <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Leave blank to keep same"
                        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy shadow-sm focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button type="submit" disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-brand px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-brand/90 disabled:opacity-50"
                  >
                    {loading ? <div className="h-4 w-4 animate-spin rounded-full border-2 border-navy/30 border-t-navy" /> : <Save className="h-4 w-4" />}
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
