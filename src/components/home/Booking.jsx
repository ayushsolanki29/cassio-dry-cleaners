"use client";

import { Star, Quote, Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const customerStories = [
  {
    name: "Emma Thompson",
    location: "Shoreditch",
    image: "/assets/testimonial-1.jpg",
    story: "My wedding dress was saved! Cassio removed a wine stain that others couldn't handle.",
    rating: 5,
    service: "Premium Care"
  },
  {
    name: "James Wilson",
    location: "Chelsea", 
    image: "/assets/testimonial-2.jpg",
    story: "As a chef, my whites get destroyed daily. Cassio keeps them pristine - like magic!",
    rating: 5,
    service: "Commercial"
  },
  {
    name: "Sarah Mitchell",
    location: "Kensington",
    image: "/assets/testimonial-3.jpg",
    story: "Best dry cleaning service in London! They handle my designer clothes with such care.",
    rating: 5,
    service: "Dry Cleaning"
  },
  {
    name: "David Brown",
    location: "Mayfair",
    image: "/assets/testimonial-1.jpg",
    story: "Professional service, always on time. My suits have never looked better!",
    rating: 5,
    service: "Premium Care"
  },
  {
    name: "Lisa Anderson",
    location: "Camden",
    image: "/assets/testimonial-2.jpg",
    story: "Eco-friendly and effective! Love that they care about the environment.",
    rating: 5,
    service: "Eco Clean"
  },
  {
    name: "Michael Chen",
    location: "Soho",
    image: "/assets/testimonial-3.jpg",
    story: "Fast turnaround, excellent quality. Highly recommend for business professionals!",
    rating: 5,
    service: "Express"
  },
  {
    name: "Rachel Green",
    location: "Notting Hill",
    image: "/assets/testimonial-1.jpg",
    story: "They saved my vintage coat! The stain removal is incredible.",
    rating: 5,
    service: "Stain Removal"
  },
  {
    name: "Tom Harris",
    location: "Westminster",
    image: "/assets/testimonial-2.jpg",
    story: "Reliable and trustworthy. Been using them for 3 years now.",
    rating: 5,
    service: "Regular"
  },
  {
    name: "Sophie Turner",
    location: "Hampstead",
    image: "/assets/testimonial-3.jpg",
    story: "The pickup and delivery service is so convenient. Life-changing!",
    rating: 5,
    service: "Delivery"
  },
  {
    name: "Oliver Smith",
    location: "Canary Wharf",
    image: "/assets/testimonial-1.jpg",
    story: "Premium quality at reasonable prices. Worth every penny!",
    rating: 5,
    service: "Premium"
  }
];

export function Booking() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid h-full items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex h-full flex-col justify-center space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Real Stories
              </span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
                Stories that matter from customers who care
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every garment tells a story. Discover how Cassio helps Londoners look and feel their best.
              </p>
            </div>

            {/* Featured Video Story */}
            <div className="relative overflow-hidden rounded-3xl bg-navy">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg"
                    alt="Laundry service video"
                    className="h-64 w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={handleVideoPlay}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-pop transition hover:scale-110"
                    >
                      <Play className="ml-1 h-6 w-6 text-navy" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-display text-lg font-semibold">Watch Our Process</p>
                    <p className="text-sm opacity-90">Professional laundry & dry cleaning</p>
                  </div>
                </>
              ) : (
                <div className="relative h-64 w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                    title="Laundry service video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between rounded-2xl bg-secondary p-4">
              <div className="text-center">
                <p className="font-display text-xl font-bold text-navy">4.9★</p>
                <p className="text-xs text-muted-foreground">Average rating</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-bold text-navy">12.4k</p>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-bold text-navy">98%</p>
                <p className="text-xs text-muted-foreground">Recommend</p>
              </div>
            </div>
          </div>

          {/* Right Content - Infinite Scrolling Reviews (2 Cards Visible) */}
          <div className="flex h-full flex-col justify-center">
            <div className="mb-4">
              <h3 className="font-display text-xl font-semibold text-navy">
                Latest Reviews
              </h3>
            </div>

            {/* Infinite Scroll Container - Fixed height for 2 cards */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              {/* Fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

              {/* Scrolling container - with manual scroll enabled */}
              <div className="h-full overflow-y-auto scrollbar-hide">
                <div className="animate-scroll-reviews hover:pause-animation space-y-4">
                  {/* Original list */}
                  {customerStories.map((customer, index) => (
                    <div 
                      key={`original-${index}`} 
                      className="group rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.image}
                            alt={customer.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-display font-semibold text-navy">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.location}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: customer.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-sun text-sun" />
                          ))}
                        </div>
                      </div>

                      {/* Story */}
                      <div className="mt-3">
                        <Quote className="h-4 w-4 text-brand/30" />
                        <p className="mt-2 font-display text-sm leading-relaxed text-navy">
                          {customer.story}
                        </p>
                      </div>

                      {/* Service Tag */}
                      <div className="mt-3">
                        <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-semibold text-navy">
                          {customer.service}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate list for seamless loop */}
                  {customerStories.map((customer, index) => (
                    <div 
                      key={`duplicate-${index}`} 
                      className="group rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.image}
                            alt={customer.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-display font-semibold text-navy">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.location}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: customer.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-sun text-sun" />
                          ))}
                        </div>
                      </div>

                      {/* Story */}
                      <div className="mt-3">
                        <Quote className="h-4 w-4 text-brand/30" />
                        <p className="mt-2 font-display text-sm leading-relaxed text-navy">
                          {customer.story}
                        </p>
                      </div>

                      {/* Service Tag */}
                      <div className="mt-3">
                        <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-semibold text-navy">
                          {customer.service}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Write Review CTA */}
            <div className="mt-4 rounded-2xl bg-brand p-5 text-white">
              <h4 className="font-display text-lg font-semibold">Share Your Story</h4>
              <p className="mt-2 text-sm text-white/90">
                Had a great experience? We'd love to hear about it!
              </p>
              <a 
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2 font-display text-sm font-semibold text-brand transition hover:scale-105"
              >
                Write a review
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-reviews {
          animation: scroll-reviews 40s linear infinite;
        }

        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
