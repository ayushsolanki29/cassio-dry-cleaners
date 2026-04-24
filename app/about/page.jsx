import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const values = [
  {
    title: "Fast and reliable",
    description: "Pickup, expert garment care, and delivery arranged around busy daily routines.",
  },
  {
    title: "Fabric-first care",
    description: "Each item is handled with the right cleaning method to protect shape, color, and texture.",
  },
  {
    title: "Friendly service",
    description: "We keep updates simple, support responsive, and every order easy to track.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary px-6 py-18 text-white">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">About Cassio</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
            Modern laundry care with a neighborhood feel.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
            Cassio helps households and businesses keep clothes fresh, polished, and ready to wear without the usual
            stress of laundry day.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-border bg-secondary p-7 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-navy">{value.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Why people choose us</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Clean clothes, simple scheduling, and care you can trust.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              From workwear and everyday laundry to delicate pieces, we focus on quality results and a smooth customer
              experience from pickup to delivery.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-4xl font-semibold text-primary">24h</p>
                <p className="mt-2 text-sm text-muted-foreground">Quick turnaround for most regular orders.</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">7 days</p>
                <p className="mt-2 text-sm text-muted-foreground">Pickup and delivery windows built for flexibility.</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">100%</p>
                <p className="mt-2 text-sm text-muted-foreground">Attention to garment care, finishing, and packaging.</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">1 team</p>
                <p className="mt-2 text-sm text-muted-foreground">A single trusted partner for home and business laundry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
