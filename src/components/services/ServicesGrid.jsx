import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

export function ServicesGrid({ services = [] }) {
  return (
    <section id="services-grid" className="flex min-h-screen items-center bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <FadeUp className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Complete care solutions</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Every service you need, delivered with care
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Cassio Dry Cleaners offers comprehensive garment care for all your needs — from everyday essentials to luxury pieces.
          </p>
        </FadeUp>

        <StaggerList className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card border border-border/40"
              >
                <div className="relative h-36 overflow-hidden md:h-48">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="h-0.5 w-full bg-primary opacity-60" />
                <div className="flex flex-1 flex-col gap-1.5 p-3 md:gap-2 md:p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <h3 className="font-display text-sm font-semibold text-navy md:text-lg">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {s.description.length > 70 ? s.description.substring(0, 70) + '...' : s.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition group-hover:gap-2 md:text-sm">
                      Learn more
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}

