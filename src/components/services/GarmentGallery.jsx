"use client";

import { FadeUp } from "@/components/common/Animate";

const garments = [
  // Row 1 - Scrolls left to right
  { img: "/assets/service-drycleaning.jpg", title: "Formal suits", desc: "Expert pressing & finishing" },
  { img: "/assets/service-premium.jpg", title: "Designer dresses", desc: "Luxury fabric care" },
  { img: "/assets/service-washfold.jpg", title: "Everyday wear", desc: "Fresh & folded" },
  { img: "/assets/service-ironing.jpg", title: "Business shirts", desc: "Crisp & professional" },
  { img: "/assets/section-towels.jpg", title: "Home textiles", desc: "Curtains & bedding" },
  { img: "/assets/delivery.jpg", title: "Fast delivery", desc: "24-48 hour service" },
  
  // Row 2 - Scrolls right to left (duplicate for seamless loop)
  { img: "/assets/hero-woman.jpg", title: "Premium care", desc: "Delicate handling" },
  { img: "/assets/blog-1.jpg", title: "Fabric expertise", desc: "All materials" },
  { img: "/assets/testimonial-1.jpg", title: "Customer satisfaction", desc: "Trusted service" },
  { img: "/assets/blog-2.jpg", title: "Quality assured", desc: "Perfect results" },
  { img: "/assets/testimonial-2.jpg", title: "Professional team", desc: "Expert cleaners" },
  { img: "/assets/cassio-logo.jpg", title: "Cassio quality", desc: "Since 2020" },
];

export function GarmentGallery() {
  return (
    <section className="bg-secondary py-16 md:py-24 overflow-hidden">
      <div className="w-full">
        <FadeUp className="mb-10 px-6 text-center md:mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our work</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Exceptional results, every time
          </h2>
        </FadeUp>

        {/* Parallax Slider Gallery */}
        <div className="space-y-4 md:space-y-6">
          {/* Row 1 - Scrolls Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-4">
              {[...garments.slice(0, 6), ...garments.slice(0, 6)].map((garment, i) => (
                <div
                  key={`row1-${i}`}
                  className="group relative h-48 w-60 md:h-64 md:w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-soft"
                >
                  <img
                    src={garment.img}
                    alt={garment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-display text-base md:text-lg font-semibold">{garment.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-white/80">{garment.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right gap-4">
              {[...garments.slice(6, 12), ...garments.slice(6, 12)].map((garment, i) => (
                <div
                  key={`row2-${i}`}
                  className="group relative h-48 w-60 md:h-64 md:w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-soft"
                >
                  <img
                    src={garment.img}
                    alt={garment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-display text-base md:text-lg font-semibold">{garment.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-white/80">{garment.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
