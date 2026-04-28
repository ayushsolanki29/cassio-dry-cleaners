"use client";

import { useState } from "react";

const faqs = [
  { q: "How quickly will I get a response?", a: "We aim to respond to all inquiries within 2 hours during business hours. For urgent matters, please call us directly at +44 20 1234 5678." },
  { q: "Can I visit your office in person?", a: "Yes! Our London HQ at 123 Shoreditch High Street is open Monday-Friday 8am-8pm, Saturday 9am-6pm, and Sunday 10am-4pm. Walk-ins are welcome." },
  { q: "Do you offer support in languages other than English?", a: "Yes, our team speaks multiple languages including Spanish, French, Polish, and Mandarin. Let us know your preference when you contact us." },
  { q: "What's the best way to track my order?", a: "You can track your order by calling us, emailing, or using WhatsApp. We'll provide real-time updates on your garment's status." },
  { q: "How do I make a complaint or provide feedback?", a: "We take all feedback seriously. Please email us at hello@cassio.com or call our customer service line. We'll address your concerns promptly." }
];

export function ContactFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Support FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Common questions
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
