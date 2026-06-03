import { Award, TrendingUp, Star, Shield, Building, Clock, UserCheck, FileText } from "lucide-react";

const achievements = [
  { Icon: Award, value: "4.9/5", label: "Client Rating", color: "bg-sun/30 text-amber-800" },
  { Icon: TrendingUp, value: "99%", label: "On-time Delivery", color: "bg-lilac/30 text-purple-800" },
  { Icon: Building, value: "50+", label: "Corporate Partners", color: "bg-mint/30 text-emerald-800" },
  { Icon: Clock, value: "24H", label: "Express Turnaround", color: "bg-brand/20 text-brand" }
];

const trustBadges = [
  { Icon: Shield, text: "Fully Insured Service" },
  { Icon: Star, text: "Premium Quality Guarantee" },
  { Icon: UserCheck, text: "Dedicated Account Manager" },
  { Icon: FileText, text: "Flexible Invoicing" }
];

export function BusinessTrustStrip() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Business Excellence</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
            Trusted by Watford's top companies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Join hundreds of businesses who trust Cassio for their professional garment care needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-3 inline-grid h-12 w-12 place-items-center rounded-xl ${achievement.color}`}>
                <achievement.Icon className="h-6 w-6" />
              </div>
              <p className="font-display text-2xl font-bold text-navy">{achievement.value}</p>
              <p className="text-xs text-muted-foreground">{achievement.label}</p>
              
              {/* Decorative element */}
              <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${achievement.color.split(" ")[0]} opacity-10 transition group-hover:scale-110`} />
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
