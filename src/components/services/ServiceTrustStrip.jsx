"use client";

import { Award, Clock, Leaf, ShieldCheck, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { Icon: Clock,       title: "Fast Service",       description: "24–48h turnaround time",             color: "bg-brand",           },
  { Icon: Leaf,        title: "Eco-Friendly",        description: "100% biodegradable solutions",       color: "bg-[oklch(0.72_0.14_165)]" },
  { Icon: ShieldCheck, title: "Quality Guaranteed",  description: "Re-clean for free if not satisfied", color: "bg-[oklch(0.75_0.14_95)]"  },
  { Icon: Star,        title: "Expert Care",         description: "Trained fabric specialists",          color: "bg-[oklch(0.72_0.12_295)]" },
  { Icon: Award,       title: "Premium Quality",     description: "Industry-leading standards",          color: "bg-primary",         },
  { Icon: Users,       title: "Trusted by 5K+",      description: "Watford's favourite service",         color: "bg-navy",            },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function ServiceTrustStrip() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Why Choose Cassio
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-4xl">
            The Cassio difference
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3 xl:grid-cols-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <f.Icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-3 font-display text-sm font-semibold text-navy md:text-base">
                {f.title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
