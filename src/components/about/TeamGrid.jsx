const team = [
  { name: "Maria Cassio", role: "Founder & CEO", image: "/assets/testimonial-1.jpg" },
  { name: "James Thompson", role: "Operations Director", image: "/assets/testimonial-2.jpg" },
  { name: "Sophie Chen", role: "Customer Experience Lead", image: "/assets/testimonial-3.jpg" },
  { name: "David Martinez", role: "Head of Sustainability", image: "/assets/testimonial-2.jpg" },
  { name: "Emma Wilson", role: "Business Development", image: "/assets/testimonial-1.jpg" },
  { name: "Oliver Brown", role: "Quality Assurance Manager", image: "/assets/testimonial-3.jpg" }
];

export function TeamGrid() {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Meet the team</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            The people behind Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our dedicated team works every day to deliver exceptional service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group rounded-3xl bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
