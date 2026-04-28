import { Clock, Shield, Leaf, Sparkles, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24-Hour Service",
    description: "Lightning-fast turnaround without compromising quality",
    color: "bg-mint",
    iconColor: "text-navy"
  },
  {
    icon: Shield,
    title: "100% Guarantee",
    description: "Complete satisfaction or we'll re-clean for free",
    color: "bg-brand",
    iconColor: "text-white"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Biodegradable solutions safe for you and the planet",
    color: "bg-sun",
    iconColor: "text-navy"
  },
  {
    icon: Sparkles,
    title: "Expert Care",
    description: "Trained specialists for every fabric type",
    color: "bg-lilac",
    iconColor: "text-navy"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Industry-leading standards and techniques",
    color: "bg-cream",
    iconColor: "text-navy"
  },
  {
    icon: Heart,
    title: "Trusted by 50k+",
    description: "Join thousands of satisfied London customers",
    color: "bg-primary",
    iconColor: "text-white"
  }
];

export function Newsletter() {
  return (
    <section className="flex h-screen items-center bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex h-full flex-col justify-center">
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Why Choose Cassio
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              The Cassio difference
            </h2>
           
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
              >
                {/* Decorative Background */}
                <div className={`absolute right-0 top-0 h-32 w-32 ${benefit.color} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.color} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                    <benefit.icon className={`h-7 w-7 ${benefit.iconColor}`} />
                  </div>
                  
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                    {benefit.title}
                  </h3>
                  
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>

                  {/* Number Badge */}
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy/5">
                    <span className="font-display text-sm font-bold text-navy">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-soft">
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
      </div>
    </section>
  );
}
