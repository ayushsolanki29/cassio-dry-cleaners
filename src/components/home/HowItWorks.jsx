import Link from "next/link";
import { Calendar, Truck, CheckCircle, Package } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  { title: "Request service", desc: "Call us or fill out our contact form to get started.", color: "bg-mint", icon: Calendar },
  { title: "We collect", desc: "Our friendly driver picks up at your door, contact-free.", color: "bg-sun", icon: Truck },
  { title: "Cleaned with care", desc: "Sorted by fabric and cleaned by trained specialists.", color: "bg-lilac", icon: CheckCircle },
  { title: "Delivered fresh", desc: "Returned within 24 hours, neatly packed and pressed.", color: "bg-cream", icon: Package },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <FadeUp className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">Laundry day, simplified.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-lg">
            From pickup to delivery, the whole experience takes seconds of your time.
          </p>
        </FadeUp>

        {/* Mobile 2×2 */}
        <StaggerList className="grid grid-cols-2 gap-4 md:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className={`flex flex-col rounded-3xl ${step.color} p-5`}>
                  <div className="mb-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>

        {/* Desktop 4-col */}
        <StaggerList className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className={`rounded-3xl ${step.color} p-8 text-center transition-transform hover:scale-105`}>
                  <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop"
          >
            See how it works
          </Link>
        </FadeUp>

      </div>
    </section>
  );
}
