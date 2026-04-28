const milestones = [
  { year: "2018", title: "Founded", desc: "First Cassio location opens in Shoreditch" },
  { year: "2019", title: "Expansion", desc: "Launched pickup & delivery service across East London" },
  { year: "2021", title: "Growth", desc: "Reached 10,000 customers and expanded to Central London" },
  { year: "2023", title: "Innovation", desc: "Introduced eco-friendly cleaning technology" },
  { year: "2026", title: "Today", desc: "Serving 50,000+ customers across all of London" }
];

export function Timeline() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our journey</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Cassio milestones
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-secondary md:block" />
          
          <div className="grid gap-8 md:grid-cols-5">
            {milestones.map((milestone, i) => {
              const colors = ["bg-mint", "bg-sun", "bg-lilac", "bg-cream", "bg-brand"];
              const bgColor = colors[i % colors.length];
              
              return (
                <div key={milestone.year} className="relative text-center">
                  <div className={`relative z-10 mx-auto mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full ${bgColor} font-display text-2xl font-bold text-navy shadow-pop`}>
                    {milestone.year}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
