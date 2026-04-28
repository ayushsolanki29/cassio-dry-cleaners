import { Star } from "lucide-react";

const reviews = [
  { 
    name: "Emma Walker", 
    role: "Shoreditch, London", 
    img: "/assets/testimonial-1.jpg", 
    quote: "Cassio Dry Cleaners has been a lifesaver! My silk dresses always come back perfect. The pickup service is so convenient." 
  },
  { 
    name: "James Bennett", 
    role: "Chelsea, London", 
    img: "/assets/testimonial-2.jpg", 
    quote: "I trust Cassio with all my suits and formal wear. The attention to detail is incredible, and the eco-friendly approach is a bonus." 
  },
  { 
    name: "Sophie Clarke", 
    role: "Notting Hill, London", 
    img: "/assets/testimonial-3.jpg", 
    quote: "Best dry cleaning service in London! Fast turnaround, excellent quality, and the team is always professional. Highly recommend Cassio." 
  },
];

export function ServiceTestimonials() {
  return (
    <section className="bg-cream py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Customer reviews</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Loved by 50,000+ Londoners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it — hear what our customers say about Cassio Dry Cleaners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg leading-relaxed text-navy">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                <img src={r.img} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-navy">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
