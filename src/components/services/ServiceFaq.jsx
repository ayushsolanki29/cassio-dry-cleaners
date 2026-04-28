"use client";

import { useState } from "react";

const faqs = [
  { 
    q: "What services does Cassio Dry Cleaners offer?", 
    a: "Cassio offers dry cleaning, wash & fold, ironing, premium care for luxury items, wedding dress cleaning, leather & suede care, curtains & home textiles, and shoe care services." 
  },
  { 
    q: "How long does the cleaning process take?", 
    a: "Standard orders are returned within 24-48 hours. Premium services and same-day options are available in select areas for urgent needs." 
  },
  { 
    q: "Are your cleaning methods eco-friendly?", 
    a: "Yes! Cassio uses 100% biodegradable solvents, water-saving technology, and recyclable packaging. We're committed to protecting both your garments and the planet." 
  },
  { 
    q: "What if my garment is damaged during cleaning?", 
    a: "Every garment is fully insured. In the rare case of damage, we will reimburse you fully. Your satisfaction is our priority." 
  },
  { 
    q: "Do you handle delicate and luxury fabrics?", 
    a: "Absolutely. Our Premium Care service includes white-glove handling for silk, cashmere, leather, suede, sequined items, and designer pieces." 
  },
  { 
    q: "Is pickup and delivery really free?", 
    a: "Yes! Cassio Dry Cleaners offers completely free pickup and delivery across London with no minimums or hidden fees." 
  },
];

export function ServiceFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Got questions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about Cassio Dry Cleaners services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-secondary"
              >
                <span className="font-display text-lg font-semibold text-navy">{f.q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-lg transition ${open === i ? "rotate-45 bg-brand text-white" : ""}`}>+</span>
              </button>
              {open === i && <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
