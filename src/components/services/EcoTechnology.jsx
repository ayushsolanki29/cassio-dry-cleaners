import { Leaf, Droplet, Wind, Recycle } from "lucide-react";
import { FadeUp, FadeIn, StaggerList, StaggerItem } from "@/components/common/Animate";

const ecoFeatures = [
  { Icon: Leaf, title: "Biodegradable solvents", desc: "Plant-based cleaning agents safe for you and the planet." },
  { Icon: Droplet, title: "Water conservation", desc: "Advanced systems reduce water usage by 70% vs traditional methods." },
  { Icon: Wind, title: "Energy efficient", desc: "Solar-powered facilities and low-energy drying technology." },
  { Icon: Recycle, title: "Recyclable packaging", desc: "All garment bags and hangers are 100% recyclable." },
];

export function EcoTechnology() {
  return (
    <section className="bg-mint py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div className="space-y-8 lg:space-y-10">
            <FadeUp>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Eco-friendly commitment</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl lg:text-5xl">
                Clean technology for a cleaner planet
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                At Cassio Dry Cleaners, we believe premium care shouldn't come at the planet's expense. Our eco-friendly processes deliver exceptional results while protecting the environment.
              </p>
            </FadeUp>

            <StaggerList className="grid gap-6 sm:grid-cols-2">
              {ecoFeatures.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-soft md:h-14 md:w-14">
                      <feature.Icon className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy md:text-lg">{feature.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>

          <FadeIn className="relative mt-4 lg:mt-0">
            <div className="blob absolute inset-0 -z-0 bg-sun" />
            <img
              src="https://server.speedylaundry.co.uk/cdn/uploads/images/6a21c88b92922.jpeg"
              alt="Eco-friendly cleaning at Cassio Dry Cleaners"
              loading="lazy"
              className="relative z-10 h-72 w-full rounded-3xl object-cover shadow-card md:h-96 lg:h-[500px]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
