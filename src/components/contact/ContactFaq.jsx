"use client";

import { useState } from "react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const faqs = [
  { q: "How quickly will I get a response?", a: "We aim to respond to all inquiries within 2 hours during business hours. For urgent matters, please call us directly at +44 1923 256212." },
  { q: "Can I visit your office in person?", a: "Yes! Our Watford HQ at 166 Cassiobury Dr is open Monday-Friday 8am-8pm, Saturday 9am-6pm, and Sunday 10am-4pm. Walk-ins are welcome." },
  { q: "Do you offer support in languages other than English?", a: "Yes, our team speaks multiple languages including Spanish, French, Polish, and Mandarin. Let us know your preference when you contact us." },
  { q: "What's the best way to track my order?", a: "You can track your order by calling us, emailing, or using WhatsApp. We'll provide real-time updates on your garment's status." },
  { q: "How do I make a complaint or provide feedback?", a: "We take all feedback seriously. Please email us at hello@cassio.com or call our customer service line. We'll address your concerns promptly." }
];

export function ContactFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Support FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Common questions
          </h2>
        </FadeUp>

        <StaggerList className="space-y-4">
          {faqs.map((faq, i) => (
            <StaggerItem key={faq.q} className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm transition hover:shadow-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6 text-left transition hover:bg-secondary/30"
              >
                <span className="font-display text-base sm:text-lg font-semibold text-navy pr-4">{faq.q}</span>
                <span className={`grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-secondary text-lg sm:text-xl transition-all duration-300 ${open === i ? "rotate-45 bg-navy text-white shadow-sm" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 sm:px-8 sm:pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground animate-in slide-in-from-top-2 fade-in duration-300">{faq.a}</div>
              )}
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
