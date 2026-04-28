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
                    src="/assets/hero-woman.jpg"
                    alt="Customer video testimonial"
                    className="h-40 w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={handleVideoPlay}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-pop transition hover:scale-110"
                    >
                      <Play className="ml-1 h-5 w-5 text-navy" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="font-display text-base font-semibold">Watch Emma's Story</p>
                    <p className="text-xs opacity-90">How Cassio saved her vintage coat</p>
                  </div>
                </>
              ) : (
                <video
                  className="h-40 w-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/assets/customer-testimonial.mp4" type="video/mp4" />
                  <source src="/assets/customer-testimonial.webm" type="video/webm" />
                  {/* Fallback for browsers that don't support video */}
                  <div className="flex h-40 items-center justify-center bg-navy text-white">
                    <p>Your browser doesn't support video playback.</p>
                  </div>
                </video>
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

          {/* Right Content - Customer Stories */}
          <div className="flex h-full flex-col justify-center space-y-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-navy">
                Latest Reviews
              </h3>
            </div>

            {/* Customer Story Cards */}
            <div className="flex-1 space-y-4">
              {customerStories.map((customer, index) => (
                <div key={customer.name} className="rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
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
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-semibold text-navy">
                      {customer.service}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {index === 0 ? '2 days ago' : '1 week ago'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Write Review CTA */}
            <div className="rounded-2xl bg-brand p-5 text-white">
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
    </section>
  );
}