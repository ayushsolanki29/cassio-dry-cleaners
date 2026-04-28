import { User, BarChart3, FileText, Headphones } from "lucide-react";

const features = [
  { Icon: User, title: "Dedicated manager", desc: "Your personal point of contact at Cassio" },
  { Icon: BarChart3, title: "Performance tracking", desc: "Monthly reports and analytics" },
  { Icon: FileText, title: "Custom invoicing", desc: "Flexible billing to suit your needs" },
  { Icon: Headphones, title: "Priority support", desc: "24/7 assistance for business clients" }
];

export function AccountManagement() {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Premium support</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Dedicated account management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every Cassio business client gets a dedicated account manager and premium support
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-white p-6 text-center shadow-soft">
              <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-xl bg-lilac text-brand">
                <feature.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
