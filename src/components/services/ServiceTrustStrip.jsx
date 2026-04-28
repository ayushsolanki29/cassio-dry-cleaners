import { Award, Clock3, Leaf, ShieldCheck } from "lucide-react";

const stats = [
  { Icon: Award, value: "50K+", label: "Happy customers" },
  { Icon: Clock3, value: "24-48h", label: "Turnaround time" },
  { Icon: Leaf, value: "100%", label: "Eco-friendly" },
  { Icon: ShieldCheck, value: "4.9/5", label: "Customer rating" },
];

export function ServiceTrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-center">
          <img 
            src="/assets/cassio-logo.jpg" 
            alt="Cassio Dry Cleaners" 
            className="mx-auto h-12 w-auto object-contain"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-brand">
                <item.Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-navy">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
