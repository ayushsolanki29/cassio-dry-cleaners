export function ServiceProcess({ service }) {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our process</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            How we handle your {service.title.toLowerCase()}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand font-display text-xl font-bold text-white">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
