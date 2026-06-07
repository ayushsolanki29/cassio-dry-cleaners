"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, AlertCircle, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const response = await fetch(`${apiBase}/admin/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)] flex items-center justify-center px-5 py-16">

      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sun/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        {/* Brand chip */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <Link
            href="/"
            aria-label="Go to Cassio home page"
            className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-soft border border-border/50 transition-all hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <Image
              src="/assets/cassio-logo.jpeg"
              alt="Cassio Dry Cleaners"
              width={36}
              height={36}
              className="rounded-full ring-2 ring-primary/20"
            />
            <span className="flex items-center gap-3">
              <span className="font-display text-lg font-semibold text-navy tracking-tight">
                Cassio<span className="text-brand">.</span>
              </span>
              <span className="h-5 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div {...fadeUp(0.08)} className="text-center mb-8">
          <h1 className="font-display text-4xl font-semibold text-navy">
            Welcome back
          </h1>
          <p className="mt-2 text-muted-foreground text-base">
            Sign in to manage your contact submissions
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          {...fadeUp(0.16)}
          className="rounded-3xl bg-white border border-border/50 shadow-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 rounded-2xl bg-destructive/8 border border-destructive/20 p-4 text-sm text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-navy mb-2">
                <Mail className="h-4 w-4 text-primary" />
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                suppressHydrationWarning
                placeholder="Enter Admin Email"
                className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="flex items-center gap-2 text-sm font-semibold text-navy mb-2">
                <Lock className="h-4 w-4 text-primary" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 pr-12 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary py-4 font-display text-base font-semibold text-white shadow-pop transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>
                  Sign in
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.p {...fadeUp(0.24)} className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          Made with
          <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-label="heart" />
          by{" "}
          <a
            href="https://www.ayushsolanki.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary transition-colors hover:text-navy"
          >
            Ayush Solanki
          </a>
        </motion.p>

      </div>
    </div>
  );
}
