"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Business", href: "/business" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating island nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`
            w-full max-w-5xl flex items-center justify-between
            rounded-2xl px-5 py-3.5 md:px-6 md:py-4
            transition-all duration-300 ease-in-out
            ${scrolled
              ? "bg-primary/60 shadow-[0_8px_32px_-4px_oklch(0.62_0.21_252/0.4)] backdrop-blur-xl border border-white/15"
              : "bg-primary/40 backdrop-blur-md border border-white/10"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/assets/cassio-logo.jpg" alt="Cassio Dry Cleaners" className="h-9 w-9 rounded-full ring-2 ring-white/30" />
            <span className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
              Cassio<span className="hidden sm:inline"> Dry Cleaners</span><span className="text-cream">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}
                className="rounded-xl px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Link href="/contact#contact-form"
              className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop md:block"
            >
              Contact us
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span key="open"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed left-0 right-0 z-40 flex justify-center px-4 md:hidden"
            style={{ top: "72px" }}
          >
            <div className="w-full max-w-5xl mt-3 overflow-hidden rounded-2xl border border-white/15 bg-primary/60 shadow-[0_20px_60px_-10px_oklch(0.2_0.05_250/0.5)] backdrop-blur-2xl">
              <nav className="flex flex-col p-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2, ease: "easeOut" }}
                  >
                    <Link href={item.href} onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                  className="mt-1 border-t border-white/10 pt-2"
                >
                  <Link href="/contact#contact-form" onClick={() => setMenuOpen(false)}
                    className="block rounded-xl bg-brand px-4 py-3 text-center text-base font-semibold text-white transition hover:opacity-90"
                  >
                    Contact us
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
