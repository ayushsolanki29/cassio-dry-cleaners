import { Shield, Clock, Leaf, Star, CheckCircle, Award, Package, ShoppingBag, Home } from "lucide-react";

// Map icon names to actual components
const iconMap = {
  Shield,
  Clock,
  Leaf,
  Star,
  CheckCircle,
  Award,
  Package,
  ShoppingBag,
  Home,
  Box: Package,
  Gift: Award,
  TrendingUp: Award
};

export function ServiceBenefits({ service }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-sun">Why choose Cassio</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
            Benefits of our {service.title.toLowerCase()}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.iconName] || CheckCircle;
            return (
              <div key={benefit.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-xl bg-cream text-brand">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/80">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
