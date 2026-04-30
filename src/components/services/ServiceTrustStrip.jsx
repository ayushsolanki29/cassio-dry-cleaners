import { Award, Clock, Leaf, ShieldCheck, Users, Star } from "lucide-react";

const features = [
  { Icon: Clock, title: "Fast Service", description: "24-48h turnaround time", color: "bg-brand" },
  { Icon: Leaf, title: "Eco-Friendly", description: "100% biodegradable solutions", color: "bg-mint" },
  { Icon: ShieldCheck, title: "Quality Guaranteed", description: "Re-clean for free if not satisfied", color: "bg-sun" },
  { Icon: Star, title: "Expert Care", description: "Trained fabric specialists", color: "bg-lilac" },
  { Icon: Award, title: "Premium Quality", description: "Industry-leading standards", color: "bg-primary" },
  { Icon: Users, title: "Trusted by 50K+", description: "London's favorite service", color: "bg-brand" },
];

export function ServiceTrustStrip() {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Why Choose Cassio
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            The Cassio difference
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {features.map((item) => (
            <div 
              key={item.title} 
              className="group rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:border-transparent hover:shadow-lg"
            >
              {/* Icon */}
              <div className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color} transition-all duration-300 group-hover:scale-110`}>
                <item.Icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="mt-4 font-display text-base font-semibold text-navy transition-colors group-hover:text-brand">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
