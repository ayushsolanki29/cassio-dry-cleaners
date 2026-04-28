import { Bell, MapPin, CheckCircle, MessageSquare } from "lucide-react";

const features = [
  { Icon: Bell, title: "Real-time notifications", desc: "Get updates at every stage of the process" },
  { Icon: MapPin, title: "Live tracking", desc: "Know exactly where your garments are" },
  { Icon: CheckCircle, title: "Status updates", desc: "From pickup to delivery confirmation" },
  { Icon: MessageSquare, title: "Direct communication", desc: "Contact us anytime with questions" }
];

export function TrackingSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="blob absolute inset-0 bg-sun" />
            <img
              src="/assets/app-mockup.jpg"
              alt="Cassio tracking app"
              className="relative z-10 w-full rounded-3xl object-cover shadow-card"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Stay informed</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Tracking & notifications
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Never wonder about your garments again. Cassio Dry Cleaners keeps you informed every step of the way with real-time updates and notifications.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-border bg-secondary p-5">
                  <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-white text-brand shadow-soft">
                    <feature.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
