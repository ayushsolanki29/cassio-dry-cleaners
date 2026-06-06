"use client";

import { useState } from "react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";
import { Phone, Mail, MessageCircle, Send, CheckCircle, Accessibility, Store, CreditCard, Check } from "lucide-react";

const methods = [
  {
    Icon: Phone,
    title: "Phone",
    detail: "+44 1923 256212",
    description: "Mon-Sat, 9am-5:30pm",
    color: "bg-mint/40 text-emerald-800",
    href: "tel:+441923256212"
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "hello@cassio.com",
    description: "We reply within 2 hours",
    color: "bg-sun/40 text-amber-800",
    href: "mailto:hello@cassio.com"
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "07412 093766",
    description: "Quick responses",
    color: "bg-lilac/40 text-purple-800",
    href: "https://web.whatsapp.com/send/?phone=07412093766"
  }
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: service,
      message: e.target.message.value,
      otherService: service === "Other" ? e.target.otherService?.value : null,
    };

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
      const response = await fetch(`${apiBase}/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setService("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Methods & Form Section */}
      <section id="contact-form" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Contact Methods */}
            <FadeUp className="flex flex-col">
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand">How to reach us</span>
                <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
                  Choose your preferred method
                </h2>
              </div>

              <StaggerList className="flex-1 space-y-4">
                {methods.map((method) => (
                  <StaggerItem key={method.title} className="w-full">
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="group flex w-full items-center gap-4 rounded-2xl border border-border/40 bg-white p-5 shadow-sm transition hover:shadow-card hover:-translate-y-1 hover:border-brand/30"
                    >
                      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${method.color} transition-colors group-hover:bg-brand group-hover:text-white`}>
                        <method.Icon className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-display text-lg font-semibold text-navy group-hover:text-brand transition-colors">{method.title}</h3>
                        <p className="mt-0.5 text-sm font-semibold text-brand group-hover:text-navy transition-colors">{method.detail}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeUp>

            {/* Right: Contact Form */}
            <FadeUp delay={0.2} className="flex flex-col">
              {submitted ? (
                <div className="flex flex-1 items-center justify-center rounded-3xl bg-cream/40 p-12 text-center shadow-sm border border-border/50">
                  <div>
                    <div className="mx-auto mb-6 inline-grid h-20 w-20 place-items-center rounded-full bg-mint/40 text-emerald-800 shadow-sm">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-navy md:text-3xl">Message sent!</h3>
                    <p className="mt-3 text-base text-muted-foreground">
                      We've received your request and will get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition hover:scale-105 shadow-sm"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col rounded-3xl bg-secondary/30 p-6 sm:p-8 md:p-10 border border-border/50">
                  <div className="mb-8">
                    <span className="text-sm font-semibold uppercase tracking-wider text-brand">Send a message</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-navy md:text-3xl">
                      Contact form
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-5">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                        {error}
                      </div>
                    )}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                        placeholder="+44 1923 256212"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy">
                        Service *
                      </label>
                      <select
                        id="service"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                      >
                        <option value="">Select a service</option>
                        <option value="Iron Only">Iron Only</option>
                        <option value="Wash + Iron">Wash + Iron</option>
                        <option value="Wash, Dry & Fold">Wash, Dry & Fold</option>
                        <option value="Dry Cleaning">Dry Cleaning</option>
                        <option value="Commercial / Business">Commercial / Business</option>
                        <option value="Request My Area">Request My Area</option>
                        <option value="General Inquiries">General Inquiries</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {service === "Other" && (
                      <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <label htmlFor="otherService" className="mb-2 block text-sm font-semibold text-navy">
                          Please specify *
                        </label>
                        <input
                          type="text"
                          id="otherService"
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                          placeholder="Tell us what you need..."
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-base font-semibold text-white shadow-sm transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Full Width Satellite Map */}
      <section className="bg-secondary py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Find us</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
              Visit our location
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              166 Cassiobury Dr, Watford WD17 3AJ, United Kingdom
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="overflow-hidden rounded-3xl border border-border/50 shadow-card bg-white p-2">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.616054198855!2d-0.4200722231134329!3d51.66686569904104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a8e7ffe1f01%3A0x48d5575efb35931c!2sCassio%20Cleaners!5e0!3m2!1sen!2sin!4v1780516344634!5m2!1sen!2sin&maptype=satellite"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cassio Dry Cleaners Location"
                className="w-full"
              />
            </div>
          </FadeUp>

          {/* Store Features */}
          <FadeUp delay={0.3} className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Accessibility */}
            <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card hover:border-brand/30">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-mint/40 text-emerald-800">
                  <Accessibility className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">Accessibility</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>Wheelchair-accessible car park</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>Wheelchair-accessible entrance</span>
                </li>
              </ul>
            </div>

            {/* Service options */}
            <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card hover:border-brand/30">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sun/40 text-amber-800">
                  <Store className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">Service Options</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>Online estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>On-site services</span>
                </li>
              </ul>
            </div>

            {/* Payments */}
            <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card hover:border-brand/30 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-lilac/40 text-purple-800">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">Payments</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>Credit cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>Debit cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>NFC mobile payments</span>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
