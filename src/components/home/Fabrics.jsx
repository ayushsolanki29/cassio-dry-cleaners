"use client";

import { useState } from "react";
import { Award, Shield, Droplets, Wind, Sparkles, CheckCircle2 } from "lucide-react";

const fabricTypes = [
  {
    name: "Cotton & Linen",
    image: "/assets/service-washfold.jpg",
    description: "Natural fibers treated with gentle care",
    icon: Wind,
    accent: "bg-mint",
    height: "h-56",
  },
  {
    name: "Silk & Satin",
    image: "/assets/service-premium.jpg",
    description: "Delicate luxury fabrics handled by experts",
    icon: Award,
    accent: "bg-lilac",
    height: "h-40",
  },
  {
    name: "Wool & Cashmere",
    image: "/assets/service-drycleaning.jpg",
    description: "Premium materials with specialized cleaning",
    icon: Shield,
    accent: "bg-sun",
    height: "h-44",
  },
  {
    name: "Synthetic & Blends",
    image: "/assets/service-ironing.jpg",
    description: "Modern fabrics with advanced care techniques",
    icon: Droplets,
    accent: "bg-brand",
    height: "h-60",
  },
];

const fabricFeatures = [
  "Temperature-controlled cleaning",
  "pH-balanced solutions",
  "Fabric-specific treatments",
  "Color protection guarantee",
];

export function Fabrics() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left: text content ── */}
          <div className="space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-brand" />
              Fabric Expertise
            </span>

            {/* Heading */}
            <div>
              <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
                Every fabric
                <br />
                <span className="text-brand">deserves</span>
                <br />
                expert care
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                From everyday cotton to luxury cashmere, our specialists
                understand the unique needs of every material in your wardrobe.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {fabricFeatures.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm font-medium text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand shadow-pop">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">100% Fabric Safety</p>
                <p className="text-sm text-white/60">Guaranteed protection for all fabric types</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-display text-3xl font-bold text-brand">99%</p>
                <p className="text-xs text-white/50">satisfaction rate</p>
              </div>
            </div>
          </div>

          {/* ── Right: Pinterest masonry grid ── */}
          <div className="columns-2 gap-4">
            {fabricTypes.map((fabric) => (
              <div
                key={fabric.name}
                className="mb-4 cursor-pointer"
                style={{ breakInside: "avoid" }}
                onMouseEnter={() => setHovered(fabric.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`
                    group relative overflow-hidden rounded-3xl ${fabric.height}
                    transition-transform duration-300 ease-out
                    ${hovered === fabric.name ? "scale-[1.03]" : "scale-100"}
                  `}
                >
                  {/* Full-bleed photo */}
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                  {/* Top icon pill */}
                  <div className="absolute left-3 top-3">
                    <div className={`flex items-center gap-1.5 rounded-full ${fabric.accent} px-3 py-1.5 shadow-soft`}>
                      <fabric.icon className="h-3.5 w-3.5 text-navy" />
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base font-bold text-white">
                      {fabric.name}
                    </h3>
                    <p
                      className={`mt-1 text-xs text-white/70 transition-all duration-300 ${
                        hovered === fabric.name ? "max-h-10 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {fabric.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
