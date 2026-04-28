"use client";

import { useState } from "react";

const faqs = [
  { q: "Do you serve my postcode?", a: "Cassio covers all 32 London boroughs and most postcodes across Greater London. Enter your postcode on our contact page to confirm availability." },
  { q: "Is delivery really free?", a: "Yes! Pickup and delivery are completely free across all our service areas with no minimum order required." },
  { q: "What's the difference between same-day and next-day service?", a: "Same-day service is available in select central London areas for pickups before 10am. All other areas receive our standard 24-48 hour service." },
  { q: "Can you deliver to my office?", a: "Absolutely! We deliver to homes, offices, and any address within our coverage area. Just specify your preferred delivery location." },
  { q: "Do you serve areas outside London?", a: "Currently, Cassio operates exclusively in Greater London. We're expanding to other UK cities soon - check our roadmap for upcoming locations." },
  { q: "How do I know if same-day service is available in my area?", a: "Same-day service is available in Central London, Westminster, City of London, Canary Wharf, and select neighborhoods. Contact us to confirm for your specific location." }
];

export function AreasFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Coverage questions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-secondary"
              >
                <span className="font-display text-lg font-semibold text-navy">{faq.q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-lg transition ${open === i ? "rotate-45 bg-brand text-white" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
