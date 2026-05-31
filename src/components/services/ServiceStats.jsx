import { Star } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const stats = [
  { value: "10K+", label: "Garments cleaned" },
  { value: "5K+", label: "Happy customers" },
  { value: "4.9", label: "Average rating", Icon: Star },
  { value: "24-48h", label: "Fast turnaround" },
];

export function ServiceStats() {
  return (
    <section className="bg-navy py-16 md:py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-10 text-center md:mb-12">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            Trusted by Watford's best-dressed
          </h2>
        </FadeUp>
        
        <StaggerList className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 font-display text-4xl font-semibold text-cream md:text-5xl lg:text-6xl">
                  <span>{s.value}</span>
                  {s.Icon ? <s.Icon className="h-6 w-6 fill-current md:h-7 md:w-7 lg:h-8 lg:w-8" /> : null}
                </div>
                <p className="mt-2 md:mt-3 text-xs md:text-sm uppercase tracking-wider text-white/60">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
