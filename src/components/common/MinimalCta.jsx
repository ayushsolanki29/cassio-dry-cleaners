import { ArrowRight, Phone } from "lucide-react";

export function MinimalCta({ 
  title = "Ready to experience hassle-free laundry?",
  description = "Join thousands of satisfied customers. Schedule your first pickup today.",
  primaryText = "Schedule Pickup",
  primaryLink = "/contact",
  secondaryText = "Call Us",
  secondaryLink = "tel:01494445291",
  showPhone = true,
  bgColor = "bg-primary"
}) {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`relative overflow-hidden rounded-3xl ${bgColor} p-12 md:p-16 lg:p-20`}>
          {/* Circular gradient waves - positioned top right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-8 rounded-full bg-white/10" />
            <div className="absolute inset-16 rounded-full bg-white/10" />
            <div className="absolute inset-24 rounded-full bg-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/90">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={primaryLink}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105"
              >
                {primaryText}
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>

              {showPhone && (
                <a
                  href={secondaryLink}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  {secondaryText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
