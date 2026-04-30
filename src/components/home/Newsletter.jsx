import { Clock, ShieldCheck, Sprout, Star, Trophy, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24-Hour Service",
    description: "Lightning-fast turnaround without compromising quality",
    color: "bg-mint",
    iconColor: "text-navy"
  },
  {
    icon: ShieldCheck,
    title: "100% Guarantee",
    description: "Complete satisfaction or we'll re-clean for free",
    color: "bg-brand",
    iconColor: "text-white"
  },
  {
    icon: Sprout,
    title: "Eco-Friendly",
    description: "Biodegradable solutions safe for you and the planet",
    color: "bg-sun",
    iconColor: "text-navy"
  },
  {
    icon: Star,
    title: "Expert Care",
    description: "Trained specialists for every fabric type",
    color: "bg-lilac",
    iconColor: "text-navy"
  },
  {
    icon: Trophy,
    title: "Premium Quality",
    description: "Industry-leading standards and techniques",
    color: "bg-cream",
    iconColor: "text-navy"
  },
  {
    icon: Users,
    title: "Trusted by 50k+",
    description: "Join thousands of satisfied London customers",
    color: "bg-primary",
    iconColor: "text-white"
  }
];

export function Newsletter() {
  return (
    <section className="flex min-h-screen items-center bg-secondary py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Why Choose Cassio
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            The Cassio difference
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:border-transparent hover:shadow-lg"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="mt-4 font-display text-lg font-semibold text-navy transition-colors group-hover:text-brand">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white px-6 py-3 shadow-sm transition-all hover:shadow-md">
            <div className="flex -space-x-2">
              <img src="/assets/testimonial-1.jpg" alt="Customer" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
              <img src="/assets/testimonial-2.jpg" alt="Customer" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
              <img src="/assets/testimonial-3.jpg" alt="Customer" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
            </div>
            <p className="text-sm font-semibold text-navy">
              Join 50,000+ happy customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
