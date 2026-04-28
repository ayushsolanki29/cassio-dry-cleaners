"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialSlider({ 
  title = "What our customers say",
  subtitle = "Don't just take our word for it",
  testimonials = [],
  backgroundColor = "bg-cream",
  autoSlide = true,
  slideInterval = 5000
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || isHovered || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, isHovered, testimonials.length, slideInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Calculate visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const visibleCount = 3; // Desktop: 3 cards
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    
    return visible;
  };

  if (!testimonials.length) return null;

  return (
    <section className={`flex h-screen items-center ${backgroundColor}`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Customer reviews</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-3xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="group flex flex-col rounded-3xl border border-white/20 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  {/* Star Rating */}
                  {testimonial.rating && (
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating 
                              ? "fill-sun text-sun" 
                              : "text-muted-foreground/30"
                          }`} 
                        />
                      ))}
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <blockquote className="flex-1 font-display text-lg leading-relaxed text-navy">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover shadow-soft"
                    />
                    <div>
                      <p className="font-semibold text-navy">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 3 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-navy shadow-pop transition hover:scale-105 hover:bg-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-navy shadow-pop transition hover:scale-105 hover:bg-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {testimonials.length > 3 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand shadow-soft"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile Single Card View */}
        <div className="mt-8 block md:hidden">
          <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
            {/* Star Rating */}
            {testimonials[currentIndex]?.rating && (
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < testimonials[currentIndex].rating 
                        ? "fill-sun text-sun" 
                        : "text-muted-foreground/30"
                    }`} 
                  />
                ))}
              </div>
            )}

            {/* Testimonial Text */}
            <blockquote className="font-display text-lg leading-relaxed text-navy">
              &ldquo;{testimonials[currentIndex]?.quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
              <img
                src={testimonials[currentIndex]?.image}
                alt={testimonials[currentIndex]?.name}
                className="h-12 w-12 rounded-full object-cover shadow-soft"
              />
              <div>
                <p className="font-semibold text-navy">{testimonials[currentIndex]?.name}</p>
                {testimonials[currentIndex]?.role && (
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex]?.role}</p>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand shadow-soft"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}