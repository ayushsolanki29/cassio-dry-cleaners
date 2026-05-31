import { ArrowRight, Phone } from "lucide-react";

export function MinimalCta({ 
  title = "Ready to experience hassle-free laundry?",
  description = "Join thousands of satisfied customers. Contact us to get started today.",
  primaryText = "Contact Us",
  primaryLink = "/contact#contact-form",
  secondaryText = "Call Us",
  secondaryLink = "tel:01494445291",
  showPhone = true,
  bgColor = "bg-primary"
}) {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`relative overflow-hidden rounded-3xl ${bgColor} p-8 md:p-16 lg:p-20`}>
          {/* Circular gradient waves */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/4 translate-x-1/4 md:h-[500px] md:w-[500px]">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-6 rounded-full bg-white/10 md:inset-8" />
            <div className="absolute inset-12 rounded-full bg-white/10 md:inset-16" />
            <div className="absolute inset-18 rounded-full bg-white/10 md:inset-24" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white md:text-5xl">
              {title}
            </h2>
            <p className="mt-3 text-sm text-white/90 md:mt-4 md:text-lg">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
              <a
                href={primaryLink}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:scale-105 md:gap-3 md:px-8 md:py-4 md:text-base"
              >
                {primaryText}
                <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 md:h-8 md:w-8">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </a>

              {showPhone && (
                <a
                  href={secondaryLink}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 md:gap-3 md:px-8 md:py-4 md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
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
