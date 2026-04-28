"use client";

import { useState } from "react";

const faqs = [
  { q: "What's the minimum order for business clients?", a: "There's no strict minimum, but our business services are designed for regular, ongoing needs. We can discuss volume requirements during consultation." },
  { q: "How does pricing work for business accounts?", a: "We offer custom pricing based on your volume, frequency, and specific needs. Contact our sales team for a tailored quote." },
  { q: "Can you handle same-day turnaround?", a: "Yes! Same-day service is available for business clients in central London areas. We'll work with you to establish the best schedule." },
  { q: "Do you provide contracts?", a: "We offer flexible contract terms from month-to-month to multi-year agreements. Choose what works best for your business." },
  { q: "What if we need to scale up or down?", a: "Our services are flexible. Your dedicated account manager will adjust your service level as your needs change." },
  { q: "How do you ensure quality control?", a: "Every order goes through multi-point quality checks, and your account manager monitors performance metrics monthly." }
];

export function BusinessFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Business FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Questions from business clients
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
