"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services",     href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Areas",        href: "/areas" },
  { label: "Business",     href: "/business" },
  { label: "About",        href: "/about" },
  { label: "Blog",         href: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-primary shadow-[0_4px_24px_-4px_oklch(0.62_0.21_252/0.35)] backdrop-blur-md"
            : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/assets/cassio-logo.jpg"
              alt="Cassio Dry Cleaners"
              className="h-11 w-11 rounded-full ring-2 ring-white/30"
            />
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              Cassio Dry Cleaners<span className="text-cream">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop md:block"
            >
              Contact us
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — glass effect */}
      <div
        className={`
          fixed inset-x-0 top-0 z-40 pt-20
          transition-all duration-300 ease-in-out
          md:hidden
          ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="mx-4 overflow-hidden rounded-3xl border border-white/20 bg-primary/80 shadow-[0_20px_60px_-10px_oklch(0.2_0.05_250/0.5)] backdrop-blur-xl">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA inside mobile menu */}
            <div className="mt-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl bg-brand px-4 py-3 text-center text-base font-semibold text-white shadow-soft transition hover:opacity-90"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop to close menu on outside tap */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
