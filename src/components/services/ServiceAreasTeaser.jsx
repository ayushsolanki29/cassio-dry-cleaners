import { ArrowRight, MapPin } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const areas = [
  "Central Watford",
  "North Watford",
  "South Watford",
  "East Watford",
  "West Watford",
  "Shoreditch",
  "Chelsea",
  "Notting Hill",
  "Camden",
  "Kensington",
  "Westminster",
  "Canary Wharf",
];

export function ServiceAreasTeaser() {
  return (
    <section className="bg-lilac py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-8 text-center md:mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service coverage</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Serving all of Watford
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-muted-foreground md:mt-4">
            Cassio Dry Cleaners offers free pickup & delivery across Greater Watford. Check if we serve your area.
          </p>
        </FadeUp>

        <StaggerList className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
          {areas.map((area) => (
            <StaggerItem key={area}>
              <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-brand" />
                {area}
              </span>
            </StaggerItem>
          ))}
        </StaggerList>

        <FadeUp delay={0.2} className="text-center">
          <a
            href="/contact#contact-form"
            className="inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm md:text-base font-semibold text-brand-foreground shadow-soft transition-all hover:scale-105"
          >
            Check your area
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
