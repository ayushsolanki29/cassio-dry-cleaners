const fabrics = [
  { name: "Cotton", image: "/assets/service-washfold.jpg", tint: "bg-mint" },
  { name: "Silk", image: "/assets/service-premium.jpg", tint: "bg-lilac" },
  { name: "Wool", image: "/assets/service-drycleaning.jpg", tint: "bg-sun" },
  { name: "Linen", image: "/assets/section-towels.jpg", tint: "bg-cream" },
  { name: "Denim", image: "/assets/service-washfold.jpg", tint: "bg-mint" },
  { name: "Leather", image: "/assets/service-ironing.jpg", tint: "bg-cream" },
  { name: "Cashmere", image: "/assets/service-premium.jpg", tint: "bg-lilac" },
  { name: "Sequins", image: "/assets/service-drycleaning.jpg", tint: "bg-sun" },
];

export function Fabrics() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Fabric expertise</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Every fabric. Every care.
          </h2>
          <p className="mt-4 text-muted-foreground">From everyday cotton to delicate cashmere, our specialists know exactly how to treat your wardrobe.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {fabrics.map((f) => (
            <div
              key={f.name}
              className={`group flex flex-col items-center gap-4 rounded-3xl ${f.tint} p-6 text-center transition hover:-translate-y-1 hover:shadow-card md:p-7`}
            >
              <img
                src={f.image}
                alt={f.name}
                className="h-24 w-24 rounded-2xl border-2 border-white/70 object-cover object-center shadow-md transition group-hover:scale-105 md:h-28 md:w-28"
              />
              <p className="font-display text-lg font-semibold text-navy">{f.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
