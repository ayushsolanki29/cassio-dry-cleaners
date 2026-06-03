"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, UserCheck, FileText, Star, Clock, Building2, TrendingUp } from "lucide-react";

const stats = [
  { value: "4.9/5", label: "Client Rating", icon: Star, color: "text-amber-500" },
  { value: "99%", label: "On-time Delivery", icon: TrendingUp, color: "text-emerald-500" },
  { value: "50+", label: "Corporate Partners", icon: Building2, color: "text-blue-500" },
  { value: "24H", label: "Express Turnaround", icon: Clock, color: "text-purple-500" }
];

const features = [
  { label: "Fully Insured Service", icon: ShieldCheck },
  { label: "Premium Quality Guarantee", icon: Award },
  { label: "Dedicated Account Manager", icon: UserCheck },
  { label: "Flexible Invoicing", icon: FileText }
];

export function BusinessStats() {
  return (
    <section className="bg-cream py-16 md:py-24 text-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-sun/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand mb-3 sm:mb-4 block"
          >
            Business Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold text-navy sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Trusted by Watford's <br className="hidden sm:block" /> top companies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Join hundreds of businesses who trust Cassio for their professional garment care needs.
          </motion.p>
        </div>

        {/* Stats Grid - 2x2 on mobile, 1x4 on desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 mb-10 sm:mb-16 md:mb-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center shadow-soft border border-border/40 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-slate-50 mb-3 sm:mb-6 shadow-sm">
                <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
              </div>
              <div className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-navy mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List - Mobile friendly list, grid on tablet+ */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-border/50 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-2 text-center sm:text-left"
              >
                <div className="flex-shrink-0 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-base font-semibold text-navy leading-tight sm:leading-snug">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
