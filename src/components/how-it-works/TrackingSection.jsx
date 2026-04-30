import { Award, Shield, Star, CheckCircle } from "lucide-react";

const features = [
  { Icon: Award, title: "Expert craftsmanship", desc: "Trained specialists for every garment" },
  { Icon: Shield, title: "Quality guarantee", desc: "100% satisfaction promise" },
  { Icon: Star, title: "Premium finishing", desc: "Hand-pressed perfection" },
  { Icon: CheckCircle, title: "Care you can trust", desc: "Treating clothes like our own" }
];

export function TrackingSection() {
  return (
    <section className="flex min-h-screen items-center bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Quality promise</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              Excellence in every detail
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              At Cassio, we don't just clean clothes - we care for them. Every garment receives expert attention, ensuring perfect results every time.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <feature.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Cassio quality and care"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
