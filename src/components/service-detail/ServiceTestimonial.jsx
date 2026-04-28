import { Star, Quote } from "lucide-react";

export function ServiceTestimonial({ service }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Customer reviews</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            What our customers say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative rounded-3xl bg-gradient-to-br from-mint to-sun/30 p-8 shadow-soft">
              <Quote className="absolute right-6 top-6 h-12 w-12 text-brand/20" />
              
              <div className="relative z-10">
                <div className="mb-4 flex gap-1 text-sun">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                
                <p className="mb-6 font-display text-lg leading-relaxed text-navy">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
