"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Headphones, Send, CheckCircle } from "lucide-react";

const methods = [
  {
    Icon: Phone,
    title: "Phone",
    detail: "+44 20 1234 5678",
    description: "Mon-Sat, 8am-8pm",
    color: "bg-mint"
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "hello@cassio.com",
    description: "We reply within 2 hours",
    color: "bg-sun"
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "+44 7700 900000",
    description: "Quick responses",
    color: "bg-lilac"
  },
  {
    Icon: Headphones,
    title: "Live Chat",
    detail: "Available now",
    description: "Instant support",
    color: "bg-cream"
  }
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Contact Methods & Form Section */}
      <section className="bg-white py-12 md:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left: Contact Methods */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand">How to reach us</span>
                <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
                  Choose your preferred method
                </h2>
              </div>

              <div className="flex-1 space-y-3">
                {methods.map((method) => (
                  <div
                    key={method.title}
                    className={`flex items-start gap-3 rounded-xl ${method.color} p-4 transition hover:shadow-card`}
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-soft">
                      <method.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy">{method.title}</h3>
                      <p className="mt-0.5 text-sm font-semibold text-brand">{method.detail}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="flex flex-col">
              {submitted ? (
                <div className="flex flex-1 items-center justify-center rounded-2xl bg-secondary p-8">
                  <div className="text-center">
                    <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-full bg-mint text-brand">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">Message sent!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col">
                  <div className="mb-5">
                    <span className="text-sm font-semibold uppercase tracking-wider text-brand">Send a message</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-navy md:text-3xl">
                      Contact form
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                        placeholder="+44 7700 900000"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-navy">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="service">Service Question</option>
                        <option value="order">Order Status</option>
                        <option value="business">Business Partnership</option>
                      </select>
                    </div>

                    <div className="flex-1">
                      <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-white shadow-soft transition hover:scale-105"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Satellite Map */}
      <section className="bg-secondary py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Find us</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy md:text-3xl lg:text-4xl">
              Visit our location
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
              166 Cassiobury Dr, Watford WD17 3AJ, United Kingdom
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-card md:rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19814.4!2d-0.3947!3d51.6556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a6c0c0c0c0d%3A0x0!2s166%20Cassiobury%20Dr%2C%20Watford%20WD17%203AJ%2C%20UK!5e1!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk&maptype=satellite&zoom=17"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cassio Dry Cleaners Location - Satellite View"
              className="w-full md:h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
