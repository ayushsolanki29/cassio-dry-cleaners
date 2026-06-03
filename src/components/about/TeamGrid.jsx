import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

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
        <FadeUp className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Meet the team</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            The people behind Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our dedicated team works every day to deliver exceptional service
          </p>
        </FadeUp>

        <StaggerList className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8 -mb-8 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 sm:px-0 sm:mx-0 scroll-pl-6 sm:scroll-pl-0">
          {team.map((member) => (
            <StaggerItem key={member.name} className="w-[75vw] min-w-[260px] sm:w-auto shrink-0 snap-center group rounded-3xl bg-white p-5 sm:p-6 text-center shadow-soft border border-border/40 transition hover:-translate-y-1 hover:shadow-card">
              <div className="mb-4 overflow-hidden rounded-2xl bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-56 sm:h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
