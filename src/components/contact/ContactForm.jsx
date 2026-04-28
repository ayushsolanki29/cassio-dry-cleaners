"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-white p-12 text-center shadow-card">
            <div className="mb-6 inline-grid h-20 w-20 place-items-center rounded-full bg-mint text-brand">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-navy">Message sent successfully!</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thank you for contacting Cassio Dry Cleaners. We'll get back to you within 2 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Send us a message</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Contact form
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fill out the form below and we'll respond as soon as possible
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-card lg:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="+44 7700 900000"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-navy">
              Subject *
            </label>
            <select
              id="subject"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="service">Service Question</option>
              <option value="order">Order Status</option>
              <option value="business">Business Partnership</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-base font-semibold text-white shadow-soft transition hover:scale-105 md:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
