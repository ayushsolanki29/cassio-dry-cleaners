"use client";

import { motion } from "framer-motion";
import { Hotel, Dumbbell, UtensilsCrossed, Star, Briefcase, Activity } from "lucide-react";

const industries = [
  { 
    title: "Hotels", 
    desc: "Linen, towels, and guest garment services",
    Icon: Hotel,
    color: "bg-mint"
  },
  { 
    title: "Gyms & Studios", 
    desc: "Towels, uniforms, and member services",
    Icon: Dumbbell,
    color: "bg-sun"
  },
  { 
    title: "Restaurants", 
    desc: "Chef whites, aprons, and table linens",
    Icon: UtensilsCrossed,
    color: "bg-lilac"
  },
  { 
    title: "Spas & Salons", 
    desc: "Robes, towels, and treatment linens",
    Icon: Star,
    color: "bg-cream"
  },
  { 
    title: "Offices", 
    desc: "Uniforms, workwear, and corporate garments",
    Icon: Briefcase,
    color: "bg-mint"
  },
  { 
    title: "Healthcare", 
    desc: "Scrubs, lab coats, and medical linens",
    Icon: Activity,
    color: "bg-sun"
  }
];

export function IndustriesGrid() {
  return (
    <section id="industries" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our expertise</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Industries Cassio serves
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            Specialized laundry solutions tailored to your business needs
          </p>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              whileHover={{ y: -5 }}
              className={`group rounded-3xl ${industry.color} p-8 text-center shadow-sm hover:shadow-card transition-all duration-300`}
            >
              <div className="mb-4 mx-auto inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft group-hover:scale-110 transition-transform duration-300">
                <industry.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Auto-Scrolling Slider */}
      <div className="block md:hidden relative w-full pb-4">
        {/* Fade masks for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max" style={{ animation: "industries-scroll 18s linear infinite" }}>
          {[...industries, ...industries].map((industry, i) => (
            <div
              key={`${industry.title}-${i}`}
              className={`w-[260px] flex-shrink-0 mx-2 rounded-3xl ${industry.color} p-6 text-center shadow-sm`}
            >
              <div className="mb-4 mx-auto inline-grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                <industry.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline animation keyframes for the mobile slider */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes industries-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
