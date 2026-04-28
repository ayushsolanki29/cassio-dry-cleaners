import { Building2, Users, Award, TrendingUp, Star, Shield } from "lucide-react";

const achievements = [
  { Icon: Building2, value: "200+", label: "Business Partners", color: "bg-brand" },
  { Icon: Users, value: "50K+", label: "Items Monthly", color: "bg-mint" },
  { Icon: Award, value: "4.9/5", label: "Client Rating", color: "bg-sun" },
  { Icon: TrendingUp, value: "99%", label: "On-time Delivery", color: "bg-lilac" }
];

const trustBadges = [
  { Icon: Shield, text: "Fully Insured Service" },
  { Icon: Star, text: "Premium Quality Guarantee" }
];

export function BusinessTrustStrip() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Business Excellence</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
            Trusted by London's top companies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Join hundreds of businesses who trust Cassio for their professional garment care needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-3 inline-grid h-12 w-12 place-items-center rounded-xl ${achievement.color} text-white`}>
                <achievement.Icon className="h-6 w-6" />
              </div>
              <p className="font-display text-2xl font-bold text-navy">{achievement.value}</p>
              <p className="text-xs text-muted-foreground">{achievement.label}</p>
              
              {/* Decorative element */}
              <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${achievement.color} opacity-10 transition group-hover:scale-110`} />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-2 shadow-soft">
              <badge.Icon className="h-4 w-4 text-brand" />
              <span className="text-sm font-medium text-navy">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
