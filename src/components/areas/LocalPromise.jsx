import { MapPin, Truck, Clock, ShieldCheck } from "lucide-react";

const promises = [
  { Icon: MapPin, title: "Local knowledge", desc: "We know London inside out" },
  { Icon: Truck, title: "Free delivery", desc: "No hidden charges, ever" },
  { Icon: Clock, title: "Reliable timing", desc: "On-time pickup & delivery" },
  { Icon: ShieldCheck, title: "Trusted service", desc: "50,000+ happy Londoners" }
];

export function LocalPromise() {
  return (
    <section className="flex h-screen items-center bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our commitment</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            The Cassio local promise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise) => (
            <div key={promise.title} className="rounded-2xl bg-white p-8 text-center shadow-soft">
              <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-mint text-brand">
                <promise.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{promise.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{promise.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
