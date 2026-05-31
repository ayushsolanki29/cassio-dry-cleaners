"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Business", href: "/business" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
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
        <div
          className={`
            w-full max-w-5xl
            flex items-center justify-between
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
            <img
              src="/assets/cassio-logo.jpg"
              alt="Cassio Dry Cleaners"
              className="h-9 w-9 rounded-full ring-2 ring-white/30"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
              Cassio<span className="hidden sm:inline"> Dry Cleaners</span><span className="text-cream">.</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact#contact-form"
              className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop md:block"
            >
              Contact us
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25 md:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown — slides down from the island */}
      <div
        className={`
          fixed left-0 right-0 z-40 flex justify-center px-4
          transition-all duration-300 ease-in-out
          md:hidden
          ${menuOpen
            ? "top-[72px] opacity-100 translate-y-0 pointer-events-auto"
            : "top-[72px] opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div className="w-full max-w-5xl mt-[15px] overflow-hidden rounded-2xl border border-white/15 bg-primary/60 shadow-[0_20px_60px_-10px_oklch(0.2_0.05_250/0.5)] backdrop-blur-2xl">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 border-t border-white/10 pt-2">
              <Link
                href="/contact#contact-form"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl bg-brand px-4 py-3 text-center text-base font-semibold text-white transition hover:opacity-90"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
