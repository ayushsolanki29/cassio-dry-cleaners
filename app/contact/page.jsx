import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const contactCards = [
  {
    title: "Call us",
    value: "+44 20 1234 5678",
    description: "Speak with the team about pickups, deliveries, or business laundry support.",
  },
  {
    title: "Email us",
    value: "hello@cassiocleaners.com",
    description: "Send order questions, service requests, or partnership enquiries any time.",
  },
  {
    title: "Visit us",
    value: "21 Market Street, London",
    description: "Drop by for help, garment advice, or to discuss regular cleaning plans.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary px-6 py-18 text-white">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Contact</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">We are here to help.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            Reach out for pickups, service questions, account support, or business laundry plans.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-border bg-secondary p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{card.title}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy">{card.value}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Quick message</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">Let us know what you need.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Whether you want a home pickup or want to talk about regular business service, the team can guide you to
              the right option quickly.
            </p>
          </div>

          <form className="space-y-4 rounded-[2rem] bg-white p-8 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy">First name</span>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy">Last name</span>
                <input
                  type="text"
                  placeholder="Morgan"
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-navy">Message</span>
              <textarea
                rows="5"
                placeholder="Tell us how we can help."
                className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.01]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
