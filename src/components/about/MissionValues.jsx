import { Target, Heart, Leaf } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const values = [
  {
    title: "Quality First",
    desc: "We treat every garment with expert care, using professional techniques and equipment to deliver exceptional results every time.",
    Icon: Target,
    color: "bg-mint"
  },
  {
    title: "Customer Care",
    desc: "Your satisfaction is our priority. From pickup to delivery, we're committed to making your experience seamless and stress-free.",
    Icon: Heart,
    color: "bg-sun"
  },
  {
    title: "Sustainability",
    desc: "We're dedicated to protecting the planet with eco-friendly cleaning methods, biodegradable products, and responsible practices.",
    Icon: Leaf,
    color: "bg-lilac"
  }
];

export function MissionValues() {
  return (
    <section className="bg-cream/50 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 md:mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">What drives us</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Our mission & values
          </h2>
          <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            The principles that guide everything we do at Cassio Dry Cleaners
          </p>
        </FadeUp>

        <StaggerList className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 -mb-8 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 sm:px-0 sm:mx-0 scroll-pl-6 sm:scroll-pl-0">
          {values.map((value) => (
            <StaggerItem key={value.title} className="w-[75vw] min-w-[280px] md:w-auto shrink-0 snap-center rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-border/40 transition-transform hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-4 sm:mb-6 inline-grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl ${value.color} text-brand shadow-sm`}>
                <value.Icon className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy">{value.title}</h3>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{value.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
