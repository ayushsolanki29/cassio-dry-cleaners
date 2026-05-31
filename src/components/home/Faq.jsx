"use client";

import { useState } from "react";
import { FadeUp } from "@/components/common/Animate";

const faqs = [
  { q: "How fast is the turnaround?",          a: "Standard orders are returned within 24-48 hours. Premium and same-day options are also available in select areas." },
  { q: "Are pickups really free?",              a: "Yes. Pickup and delivery are completely free of charge - no minimums, no hidden fees." },
  { q: "What if my garment is damaged?",        a: "We are insured for every garment we handle. In the rare case of damage, we will fully reimburse you." },
  { q: "Do you handle leather and wedding wear?", a: "Absolutely. Our Premium care plan covers leather, suede, sequined, and couture pieces with white-glove handling." },
  { q: "Which areas do you serve?",             a: "We currently cover all of Greater Watford - including Central, North, South, East, and West Watford. New UK cities launching soon." },
  { q: "Can I reschedule a pickup?",            a: "Yes, simply open the app or website and reschedule up to 1 hour before your scheduled time - no fees." },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-6">

        <FadeUp className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Got questions</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">Frequently asked</h2>
        </FadeUp>

        <FadeUp delay={0.1} className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-secondary md:px-6 md:py-5"
              >
                <span className="font-display text-sm font-semibold text-navy md:text-lg">{f.q}</span>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-lg transition md:h-8 md:w-8 ${open === i ? "rotate-45 bg-brand text-white" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground md:px-6 md:pb-6 md:text-base">{f.a}</div>
              )}
            </div>
          ))}
        </FadeUp>

      </div>
    </section>
  );
}
