"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, TrendingUp, Award } from "lucide-react";

export function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-white text-foreground">
      {/* Ultra-light minimal ambient blurs matching How It Works / Services */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.02_250)] to-[oklch(0.95_0.03_85)] opacity-80" />
      <div className="pointer-events-none absolute -left-32 -top-16 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />
      
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-24 md:grid-cols-2 lg:gap-16 md:pb-20 md:pt-32">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary md:text-sm border border-primary/10 shadow-sm">
              <Building2 className="h-3.5 w-3.5" />
              <span>Cassio Business Solutions</span>
            </span>
          </div>

          <h1 className="font-display font-semibold leading-tight text-[2.2rem] sm:text-5xl lg:text-6xl text-navy">
            Commercial laundry <br />
            <span className="text-primary block mt-2 font-medium">for your business</span>
          </h1>

          <p className="max-w-xl text-base text-foreground/65 md:text-lg md:text-foreground/70 leading-relaxed">
            Professional, reliable garment care tailored for Watford's businesses. Experience seamless pickup & delivery and let us handle your commercial laundry needs.
          </p>

          {/* Business Stats Pill Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: "50+", label: "Partners", color: "text-primary", bg: "bg-primary/10" },
              { value: "24/7", label: "Support", color: "text-brand", bg: "bg-brand/10" },
              { value: "99%", label: "On-time", color: "text-navy", bg: "bg-navy/10" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 rounded-full border border-border/50 bg-white/60 backdrop-blur-sm pl-2 pr-4 py-2 shadow-sm hover:shadow-md transition duration-300">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${stat.bg} ${stat.color} font-display font-bold text-sm`}>
                  {stat.value}
                </div>
                <span className="text-xs font-semibold text-navy md:text-sm tracking-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-pop transition hover:scale-105 md:px-8 md:py-4 md:text-base"
            >
              Talk to sales
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#industries"
              className="rounded-full border border-border bg-white/60 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-white md:px-8 md:py-4 md:text-base"
            >
              Explore solutions
            </a>
          </div>
        </motion.div>

        {/* Right Visual Element (Unique Floating 2x2 Grid) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md mx-auto md:max-w-none md:ml-auto mt-10 md:mt-0 lg:pl-10"
        >
          <div className="relative w-full">
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10 w-full">
              {[
                { Icon: Building2, title: "Hotels & Hospitality", desc: "Linen, towels & guest uniform care", bg: "bg-mint", text: "text-emerald-700", delay: 0.5 },
                { Icon: Users, title: "Gyms & Studios", desc: "Towel cleaning & member wear", bg: "bg-sun", text: "text-amber-700", delay: 0.6, shift: "mt-0 md:mt-12" },
                { Icon: TrendingUp, title: "Offices & Coworking", desc: "Corporate attire laundry", bg: "bg-lilac", text: "text-purple-700", delay: 0.7, shift: "mt-0 md:-mt-12" },
                { Icon: Award, title: "Restaurants & Spas", desc: "Table linens & spa uniforms", bg: "bg-cream", text: "text-brand", delay: 0.8 },
              ].map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: ind.delay, ease: "easeOut" }}
                  className={`flex flex-col items-start p-5 sm:p-6 lg:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-border/40 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 w-full ${ind.shift || ""}`}
                >
                  <div className={`grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl ${ind.bg} ${ind.text} mb-4 sm:mb-6`}>
                    <ind.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="font-display text-sm sm:text-lg lg:text-xl font-bold text-navy leading-snug w-full">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed w-full">{ind.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 lg:h-96 lg:w-96 rounded-full bg-gradient-to-br from-mint/40 to-sun/40 blur-[80px] opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
