"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb, Search } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/blog-1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-navy/90 to-primary/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-lilac/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid h-full items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
                <BookOpen className="h-4 w-4 text-sun" />
                Cassio Blog
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Tips, guides &
              <br />
              <span className="text-sun">care stories</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              Expert advice on garment care, fabric guides, and insights from the Cassio team in London.
            </p>

            {/* Blog Categories */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-mint/20 px-3 py-1 text-sm font-medium text-mint backdrop-blur-md">
                Garment Care
              </span>
              <span className="rounded-full bg-sun/20 px-3 py-1 text-sm font-medium text-sun backdrop-blur-md">
                Fabric Guide
              </span>
              <span className="rounded-full bg-lilac/20 px-3 py-1 text-sm font-medium text-lilac backdrop-blur-md">
                London Life
              </span>
              <span className="rounded-full bg-cream/20 px-3 py-1 text-sm font-medium text-cream backdrop-blur-md">
                Sustainability
              </span>
            </div>

            {/* Search Bar */}
            <div className="pt-2">
              <div className="flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
                <Search className="h-4 w-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="flex-1 bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                <div className="space-y-3">
                  {/* Popular Topics */}
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-navy">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">Trending Now</h3>
                        <p className="text-xs text-white/70">Most popular articles</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm">→ Silk garment care guide</div>
                      <div className="text-sm">→ Wine stain removal tips</div>
                      <div className="text-sm">→ Understanding care labels</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun text-navy">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">Expert Tips</h3>
                        <p className="text-xs text-white/70">From our specialists</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80">
                      Learn professional techniques to keep your garments looking their best
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md">
                      <p className="font-display text-xl font-semibold text-sun">50+</p>
                      <p className="mt-1 text-xs text-white/70">Articles</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md">
                      <p className="font-display text-xl font-semibold text-mint">10K+</p>
                      <p className="mt-1 text-xs text-white/70">Readers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -left-8 -bottom-8 -z-10 h-48 w-48 rounded-full bg-lilac/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
