import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const milestones = [
  { year: "2018", title: "Founded", desc: "First Cassio location opens in Watford" },
  { year: "2019", title: "Expansion", desc: "Launched pickup & delivery service across East Watford" },
  { year: "2021", title: "Growth", desc: "Reached 10,000 customers and expanded to Central Watford" },
  { year: "2023", title: "Innovation", desc: "Introduced eco-friendly cleaning technology" },
  { year: "2026", title: "Today", desc: "Serving 5K+ customers across all of Watford" }
];

export function Timeline() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-16 md:mb-24 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our journey</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl lg:text-6xl">
            Cassio milestones
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-[2px] bg-border/60 md:block" />

          {/* Tablet Vertical Line */}
          <div className="absolute bottom-10 left-[47px] top-10 hidden w-[2px] bg-border/60 sm:block md:hidden" />

          <StaggerList className="flex flex-col sm:gap-12 md:flex-row md:gap-4 lg:gap-8 justify-between">
            {milestones.map((milestone, i) => {
              const colors = [
                { bg: "bg-mint/40", text: "text-emerald-800" },
                { bg: "bg-sun/40", text: "text-amber-800" },
                { bg: "bg-lilac/40", text: "text-purple-800" },
                { bg: "bg-cream", text: "text-brand" },
                { bg: "bg-navy", text: "text-white" }
              ];
              const theme = colors[i % colors.length];

              return (
                <StaggerItem key={milestone.year} className="relative flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center group flex-1 mb-12 sm:mb-0 last:mb-0">
                  
                  {/* Year Circle */}
                  <div className={`relative z-10 shrink-0 flex h-24 w-24 items-center justify-center rounded-full ${theme.bg} font-display text-2xl font-bold ${theme.text} shadow-sm transition-transform duration-500 group-hover:scale-110 mb-5 sm:mb-0 md:mb-8 mx-auto sm:mx-0 md:mx-auto`}>
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="sm:ml-8 md:ml-0 sm:pt-4 md:pt-0 max-w-xs mx-auto sm:mx-0 md:mx-auto">
                    <h3 className="font-display text-xl font-semibold text-navy group-hover:text-brand transition-colors">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{milestone.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerList>
        </div>
      </div>
    </section>
  );
}
