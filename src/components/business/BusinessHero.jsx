"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, TrendingUp, Award } from "lucide-react";

export function BusinessHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-navy text-white">
      {/* Background Image with Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/section-towels.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-navy/90 to-primary/95" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />

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
                <img src="/assets/cassio-logo.jpg" alt="Cassio" className="h-5 w-5 rounded-full object-cover mix-blend-lighten" />
                Cassio Business Solutions
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Laundry solutions for
              <br />
              <span className="text-sun">hotels, gyms & offices</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              Cassio provides professional, reliable laundry services for businesses across London. From hotels to gyms, we handle your commercial garment care needs.
            </p>

            {/* Business Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <p className="font-display text-xl font-semibold text-mint">200+</p>
                <p className="mt-1 text-xs text-white/70">Businesses</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <p className="font-display text-xl font-semibold text-sun">24/7</p>
                <p className="mt-1 text-xs text-white/70">Support</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                <p className="font-display text-xl font-semibold text-lilac">99%</p>
                <p className="mt-1 text-xs text-white/70">On-time</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#industries"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-pop transition hover:scale-105"
              >
                Explore solutions
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                Talk to sales
              </a>
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
                  {/* Industry Cards */}
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-navy">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">Hotels & Hospitality</h3>
                      <p className="text-xs text-white/70">Linen & uniform care</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun text-navy">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">Gyms & Studios</h3>
                      <p className="text-xs text-white/70">Towel & equipment cleaning</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac text-navy">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">Offices & Coworking</h3>
                      <p className="text-xs text-white/70">Professional attire care</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream text-navy">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">Restaurants & Spas</h3>
                      <p className="text-xs text-white/70">Premium service standards</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -left-8 -bottom-8 -z-10 h-48 w-48 rounded-full bg-brand/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
