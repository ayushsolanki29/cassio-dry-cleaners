import { Clock, ShieldCheck, Sprout, Star, Trophy, Users } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const benefits = [
  { icon: Clock,       title: "24-Hour Service",  description: "Lightning-fast turnaround without compromising quality",    color: "bg-mint",    iconColor: "text-navy" },
  { icon: ShieldCheck, title: "100% Guarantee",   description: "Complete satisfaction or we'll re-clean for free",          color: "bg-brand",   iconColor: "text-white" },
  { icon: Sprout,      title: "Eco-Friendly",     description: "Biodegradable solutions safe for you and the planet",       color: "bg-sun",     iconColor: "text-navy" },
  { icon: Star,        title: "Expert Care",      description: "Trained specialists for every fabric type",                 color: "bg-lilac",   iconColor: "text-navy" },
  { icon: Trophy,      title: "Premium Quality",  description: "Industry-leading standards and techniques",                 color: "bg-cream",   iconColor: "text-navy" },
  { icon: Users,       title: "Trusted by 5K+",   description: "Join thousands of satisfied Watford customers",            color: "bg-primary", iconColor: "text-white" },
];

export function Newsletter() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">

        <FadeUp className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Why Choose Cassio</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-4xl">The Cassio difference</h2>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:border-transparent hover:shadow-lg md:p-6">
                <div className={`absolute inset-0 ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                <div className="relative">
                  <div className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl ${benefit.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-12 md:w-12`}>
                    <benefit.icon className={`h-5 w-5 ${benefit.iconColor} md:h-6 md:w-6`} />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold text-navy transition-colors group-hover:text-brand md:mt-4 md:text-lg">{benefit.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:mt-2 md:text-sm">{benefit.description}</p>
                </div>
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerList>


      </div>
    </section>
  );
}
