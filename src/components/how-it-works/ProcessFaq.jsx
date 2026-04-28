"use client";

import { useState } from "react";

const faqs = [
  { q: "How do I schedule a pickup with Cassio?", a: "You can schedule online through our website, call us directly, or use our mobile app. Choose your preferred date and time slot, and we'll be there." },
  { q: "What happens if I'm not home during pickup?", a: "No problem! You can leave your items in a designated safe location, or reschedule for a more convenient time. Just let us know your preference." },
  { q: "How long does the entire process take?", a: "Standard turnaround is 24-48 hours from pickup to delivery. Same-day service is available in select areas for urgent requests." },
  { q: "Can I track my order?", a: "Yes! You'll receive real-time notifications and can track your garments through every stage - from pickup to cleaning to delivery." },
  { q: "What if I need to change my delivery time?", a: "Simply contact us or update your preferences online. We're flexible and work around your schedule." },
  { q: "Is there a minimum order for Cassio services?", a: "No minimum order required. Whether it's a single item or a full wardrobe, we're happy to help." }
];

export function ProcessFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Common questions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Process FAQ
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
