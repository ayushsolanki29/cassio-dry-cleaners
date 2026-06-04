import { Check, Award } from "lucide-react";
import { FadeUp, FadeIn, StaggerList, StaggerItem } from "@/components/common/Animate";

const features = [
  "Eco-friendly solvents safe for all fabrics",
  "Expert stain removal and odor treatment",
  "Hand-finished pressing for perfect results",
  "Free pickup & delivery in 24-48 hours",
  "Fully insured — your garments are protected",
  "Specialized care for delicate and luxury items",
];

export function FeaturedSpotlight() {
  return (
    <section className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <FadeIn className="relative order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="blob absolute inset-0 -z-0 bg-mint" />
            <img
              src="https://server.speedylaundry.co.uk/cdn/uploads/images/6a21cb515467e.jpeg"
              alt="Professional dry cleaning service by Cassio"
              loading="lazy"
              className="relative z-10 h-72 w-full rounded-3xl object-cover shadow-card md:h-96"
            />
            <div className="absolute -bottom-6 right-2 z-20 rounded-2xl bg-white p-3 shadow-pop md:-bottom-4 md:-right-4 md:p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white md:h-12 md:w-12">
                  <Award className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground md:text-xs">Trusted by</p>
                  <p className="font-display text-sm font-semibold text-navy md:text-lg">5K+ customers</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 space-y-6 lg:order-2">
            <FadeUp>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Featured service</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl lg:text-5xl">
                Premium dry cleaning you can trust
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                At Cassio Dry Cleaners, we combine cutting-edge technology with traditional craftsmanship to deliver exceptional results for every garment.
              </p>
            </FadeUp>

            <StaggerList className="space-y-3 pt-2">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white md:h-6 md:w-6">
                      <Check className="h-3 w-3 md:h-4 md:w-4" />
                    </span>
                    <span className="text-sm leading-tight text-navy md:text-base md:leading-normal">{feature}</span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerList>

            <FadeUp delay={0.2} className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop md:px-7 md:py-4 md:text-base"
              >
                Get in touch
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
