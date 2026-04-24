const steps = [
  { n: "01", title: "Schedule pickup", desc: "Pick a slot that works for you in just 10 seconds.", color: "bg-primary text-white" },
  { n: "02", title: "We collect", desc: "Our friendly driver picks up at your door, contact-free.", color: "bg-brand text-white" },
  { n: "03", title: "Cleaned with care", desc: "Sorted by fabric and cleaned by trained specialists.", color: "bg-sun text-navy" },
  { n: "04", title: "Delivered fresh", desc: "Returned within 24 hours, neatly packed and pressed.", color: "bg-mint text-navy" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Laundry day, simplified.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">From pickup to delivery, the whole experience takes seconds of your time.</p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl font-display text-xl font-semibold ${s.color}`}>
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
