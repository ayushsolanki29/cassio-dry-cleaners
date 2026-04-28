import { Award, Clock3, Leaf, ShieldCheck } from "lucide-react";

const stats = [
  { Icon: Award, value: "50K+", label: "Happy customers", color: "bg-brand" },
  { Icon: Clock3, value: "24-48h", label: "Turnaround time", color: "bg-sun" },
  { Icon: Leaf, value: "100%", label: "Eco-friendly", color: "bg-mint" },
  { Icon: ShieldCheck, value: "4.9/5", label: "Customer rating", color: "bg-lilac" },
];

export function ServiceTrustStrip() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <img 
            src="/assets/cassio-logo.jpg" 
            alt="Cassio Dry Cleaners" 
            className="mx-auto h-12 w-auto object-contain"
          />
        </div>
        
        {/* Stats with Connecting Lines */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand via-sun via-mint to-lilac opacity-30 md:block" />
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item, index) => (
              <div key={item.label} className="relative flex flex-col items-center gap-3 text-center">
                {/* Icon Circle */}
                <div className="relative z-10">
                  <span className={`grid h-14 w-14 place-items-center rounded-full ${item.color} shadow-soft`}>
                    <item.Icon className="h-7 w-7 text-white" />
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="rounded-2xl bg-white p-4 shadow-soft transition hover:-translate-y-1">
                  <p className="font-display text-2xl font-semibold text-navy">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
