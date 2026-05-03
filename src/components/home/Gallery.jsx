"use client";

import { useState } from "react";

const galleryImages = [
  { id: 1,  src: "/assets/service-drycleaning.jpg", alt: "Premium dry cleaning",  span: "tall" },
  { id: 2,  src: "/assets/hero-woman.jpg",           alt: "Happy customer",         span: "short" },
  { id: 3,  src: "/assets/service-washfold.jpg",     alt: "Wash and fold",          span: "medium" },
  { id: 4,  src: "/assets/delivery.jpg",             alt: "Delivery service",       span: "short" },
  { id: 5,  src: "/assets/service-ironing.jpg",      alt: "Ironing service",        span: "tall" },
  { id: 6,  src: "/assets/service-premium.jpg",      alt: "Premium care",           span: "medium" },
  { id: 7,  src: "/assets/section-towels.jpg",       alt: "Fresh towels",           span: "short" },
  { id: 8,  src: "/assets/testimonial-1.jpg",        alt: "Happy customer",         span: "tall" },
  { id: 9,  src: "/assets/blog-1.jpg",               alt: "Care tips",              span: "medium" },
  { id: 10, src: "/assets/testimonial-2.jpg",        alt: "Professional service",   span: "short" },
  { id: 11, src: "/assets/blog-2.jpg",               alt: "Fabric care",            span: "tall" },
  { id: 12, src: "/assets/cassio-logo.jpg",          alt: "Cassio brand",           span: "medium" },
  { id: 13, src: "/assets/testimonial-3.jpg",        alt: "Customer review",        span: "short" },
  { id: 14, src: "/assets/blog-3.jpg",               alt: "Laundry tips",           span: "medium" },
  { id: 15, src: "/assets/app-mockup.jpg",           alt: "Our app",                span: "tall" },
];

const heightMap = {
  short:  "h-44",
  medium: "h-64",
  tall:   "h-80",
};

export function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our Gallery
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            See the Cassio difference
          </h2>
        </div>

        {/* Pinterest-style masonry via CSS columns */}
        <div className="columns-2 gap-3 sm:columns-3 md:columns-4 lg:columns-5">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="mb-3 overflow-hidden rounded-2xl cursor-pointer"
              style={{ breakInside: "avoid" }}
              onMouseEnter={() => setHovered(image.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`
                  relative w-full ${heightMap[image.span]}
                  overflow-hidden rounded-2xl shadow-card
                  transition-transform duration-300 ease-out
                  ${hovered === image.id ? "scale-[1.03]" : "scale-100"}
                `}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                {/* Hover overlay */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl bg-navy/30
                    transition-opacity duration-300
                    ${hovered === image.id ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
