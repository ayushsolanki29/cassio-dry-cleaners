import { Leaf, Droplet, Recycle, Wind } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const commitments = [
  { Icon: Leaf, title: "100% biodegradable solvents", desc: "Plant-based cleaning agents" },
  { Icon: Droplet, title: "70% water reduction", desc: "Advanced conservation systems" },
  { Icon: Wind, title: "Solar-powered facilities", desc: "Renewable energy sources" },
  { Icon: Recycle, title: "Zero-waste packaging", desc: "Fully recyclable materials" }
];

export function Sustainability() {
  return (
    <section className="bg-mint py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our commitment</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Sustainability at Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're committed to protecting the environment while delivering exceptional garment care
          </p>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {commitments.map((item) => (
            <StaggerItem key={item.title} className="rounded-2xl bg-white p-4 sm:p-6 lg:p-8 text-center shadow-sm border border-border/40 transition-transform hover:-translate-y-1 hover:shadow-card">
              <div className="mx-auto mb-3 sm:mb-5 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-mint/50 text-brand shadow-sm">
                <item.Icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>

        <FadeUp delay={0.4} className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Certified by <strong className="text-navy">Green Business UK</strong> and <strong className="text-navy">EcoClean Alliance</strong>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
