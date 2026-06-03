import { Users, MapPin, Package, TrendingUp } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const stats = [
  { Icon: Users, value: "5K+", label: "Happy customers" },
  { Icon: MapPin, value: "32", label: "Watford boroughs" },
  { Icon: Package, value: "10K+", label: "Garments cleaned" },
  { Icon: TrendingUp, value: "8", label: "Years of excellence" }
];

export function AboutStats() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 text-center">
          <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            Cassio by the numbers
          </h2>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center rounded-2xl bg-white/5 p-4 sm:p-0 sm:bg-transparent">
              <div className="mb-3 sm:mb-4 inline-grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl bg-cream text-brand shadow-sm">
                <stat.Icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="font-display text-4xl font-semibold text-cream sm:text-5xl md:text-6xl">
                {stat.value}
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm uppercase tracking-wider text-white/70">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
