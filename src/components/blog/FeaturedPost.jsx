import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Featured article</span>
        </div>

        <Link href="/blog/silk-garment-care" className="block overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:shadow-pop">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative h-96 overflow-hidden lg:h-full">
              <img
                src="/assets/service-drycleaning.jpg"
                alt="Featured post"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-6 top-6 rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white">
                Garment Care
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                The Complete Guide to Caring for Silk Garments
              </h2>
              
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Silk is one of the most luxurious fabrics, but it requires special care to maintain its beauty. Learn the expert techniques Cassio uses to clean and preserve silk garments, from delicate blouses to designer dresses.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>April 15, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>

              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:scale-105">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
