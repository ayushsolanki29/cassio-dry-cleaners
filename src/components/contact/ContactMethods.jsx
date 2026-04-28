import { Phone, Mail, MessageCircle, Headphones } from "lucide-react";

const methods = [
  {
    Icon: Phone,
    title: "Phone",
    detail: "+44 20 1234 5678",
    description: "Mon-Sat, 8am-8pm",
    color: "bg-mint"
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "hello@cassio.com",
    description: "We reply within 2 hours",
    color: "bg-sun"
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "+44 7700 900000",
    description: "Quick responses",
    color: "bg-lilac"
  },
  {
    Icon: Headphones,
    title: "Live Chat",
    detail: "Available now",
    description: "Instant support",
    color: "bg-cream"
  }
];

export function ContactMethods() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">How to reach us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Choose your preferred method
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <div
              key={method.title}
              className={`rounded-3xl ${method.color} p-8 text-center transition hover:-translate-y-1 hover:shadow-card`}
            >
              <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                <method.Icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{method.title}</h3>
              <p className="mt-2 font-semibold text-brand">{method.detail}</p>
              <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
