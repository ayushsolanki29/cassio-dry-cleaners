"use client";

import { useState } from "react";

export function ServiceFaq({ service }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Common questions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            FAQ about {service.title.toLowerCase()}
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, i) => (
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
