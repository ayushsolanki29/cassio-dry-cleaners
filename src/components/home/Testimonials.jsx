"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  { name: "Emma Walker", location: "Shoreditch", image: "https://randomuser.me/api/portraits/women/1.jpg", quote: "Cassio has completely changed my weekends. My silk dresses come back perfect!", rating: 5 },
  { name: "James Bennett", location: "Chelsea", image: "https://randomuser.me/api/portraits/men/1.jpg", quote: "Used Cassio for my wedding suits - the attention to detail was incredible.", rating: 5 },
  { name: "Sophie Clarke", location: "Notting Hill", image: "https://randomuser.me/api/portraits/women/2.jpg", quote: "The 24-hour turnaround is unreal. Scheduled at 8pm, clothes back next evening!", rating: 5 },
  { name: "Michael Chen", location: "Canary Wharf", image: "https://randomuser.me/api/portraits/men/2.jpg", quote: "Perfect for busy professionals. The app makes scheduling so easy!", rating: 5 },
  { name: "Sarah Johnson", location: "Kensington", image: "https://randomuser.me/api/portraits/women/3.jpg", quote: "Cassio handles my designer pieces with such care. Outstanding service!", rating: 5 },
  { name: "David Wilson", location: "Greenwich", image: "https://randomuser.me/api/portraits/men/3.jpg", quote: "Tried many dry cleaners in London, but Cassio is in a league of its own.", rating: 5 },
  { name: "Rachel Green", location: "Mayfair", image: "https://randomuser.me/api/portraits/women/4.jpg", quote: "The eco-friendly approach is amazing. Quality and sustainability together!", rating: 5 },
  { name: "Tom Harris", location: "Westminster", image: "https://randomuser.me/api/portraits/men/4.jpg", quote: "Reliable and trustworthy. Been using them for 3 years now.", rating: 5 },
  { name: "Lisa Anderson", location: "Camden", image: "https://randomuser.me/api/portraits/women/5.jpg", quote: "Free pickup and delivery is so convenient. Life-changing service!", rating: 5 },
  { name: "Oliver Smith", location: "Soho", image: "https://randomuser.me/api/portraits/men/5.jpg", quote: "Premium quality at reasonable prices. Worth every penny!", rating: 5 },
  { name: "Emily Brown", location: "Hackney", image: "https://randomuser.me/api/portraits/women/6.jpg", quote: "They saved my vintage coat! The stain removal is incredible.", rating: 5 },
  { name: "Daniel Lee", location: "Islington", image: "https://randomuser.me/api/portraits/men/6.jpg", quote: "Fast, efficient, and professional. Exactly what I needed!", rating: 5 },
  { name: "Grace Taylor", location: "Brixton", image: "https://randomuser.me/api/portraits/women/7.jpg", quote: "The customer service is exceptional. Always helpful and friendly!", rating: 5 },
  { name: "Henry White", location: "Fulham", image: "https://randomuser.me/api/portraits/men/7.jpg", quote: "Best investment for my wardrobe. Clothes last longer with proper care!", rating: 5 },
  { name: "Olivia Martin", location: "Clapham", image: "https://randomuser.me/api/portraits/women/8.jpg", quote: "Convenient, reliable, and high quality. What more could you ask for?", rating: 5 },
  { name: "William Davis", location: "Hammersmith", image: "https://randomuser.me/api/portraits/men/8.jpg", quote: "The attention to detail is impressive. They treat every item with care!", rating: 5 },
  { name: "Sophia Moore", location: "Battersea", image: "https://randomuser.me/api/portraits/women/9.jpg", quote: "Cassio makes laundry day stress-free. Highly recommend to everyone!", rating: 5 },
  { name: "Jack Thompson", location: "Richmond", image: "https://randomuser.me/api/portraits/men/9.jpg", quote: "Professional service from start to finish. Never disappointed!", rating: 5 },
  { name: "Amelia Wilson", location: "Wimbledon", image: "https://randomuser.me/api/portraits/women/10.jpg", quote: "The quality is consistently excellent. My go-to dry cleaner!", rating: 5 },
  { name: "George Clark", location: "Putney", image: "https://randomuser.me/api/portraits/men/10.jpg", quote: "Efficient, affordable, and eco-friendly. Perfect combination!", rating: 5 },
  { name: "Charlotte Evans", location: "Marylebone", image: "https://randomuser.me/api/portraits/women/11.jpg", quote: "My cashmere sweaters have never looked better. True professionals!", rating: 5 },
  { name: "Benjamin Scott", location: "Bloomsbury", image: "https://randomuser.me/api/portraits/men/11.jpg", quote: "The mobile app is brilliant. Track everything in real-time!", rating: 5 },
  { name: "Isabella Turner", location: "Fitzrovia", image: "https://randomuser.me/api/portraits/women/12.jpg", quote: "They handle delicate fabrics with expertise. Absolutely trustworthy!", rating: 5 },
  { name: "Lucas Wright", location: "King's Cross", image: "https://randomuser.me/api/portraits/men/12.jpg", quote: "Same-day service saved me before an important meeting. Lifesaver!", rating: 5 },
  { name: "Mia Robinson", location: "Angel", image: "https://randomuser.me/api/portraits/women/13.jpg", quote: "The packaging is so elegant. They care about every detail!", rating: 5 },
  { name: "Alexander Hall", location: "Belgravia", image: "https://randomuser.me/api/portraits/men/13.jpg", quote: "Premium service without the premium attitude. Refreshing!", rating: 5 },
  { name: "Ella Phillips", location: "Pimlico", image: "https://randomuser.me/api/portraits/women/14.jpg", quote: "My wedding dress was cleaned perfectly. Forever grateful!", rating: 5 },
  { name: "Noah Campbell", location: "Victoria", image: "https://randomuser.me/api/portraits/men/14.jpg", quote: "The subscription plan is great value. Use it every week!", rating: 5 },
  { name: "Ava Mitchell", location: "Covent Garden", image: "https://randomuser.me/api/portraits/women/15.jpg", quote: "They removed a wine stain I thought was permanent. Magic!", rating: 5 },
  { name: "Ethan Roberts", location: "Holborn", image: "https://randomuser.me/api/portraits/men/15.jpg", quote: "Consistent quality every single time. That's rare these days!", rating: 5 }
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220; // Approximate card width + gap
      const currentScroll = scrollRef.current.scrollLeft;
      
      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="bg-cream py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            What our customers say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join 50,000+ satisfied customers who trust Cassio with their precious garments.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-card transition-all hover:scale-110 hover:bg-brand hover:text-white"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-card transition-all hover:scale-110 hover:bg-brand hover:text-white"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream to-transparent" />

          {/* Scrolling track */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={scrollRef}
              className={`flex gap-3 ${isPaused ? '' : 'animate-scroll-smooth'}`}
              style={{ width: 'max-content' }}
            >
              {allTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group w-[280px] sm:w-[240px] md:w-[220px] lg:w-[200px] flex-shrink-0 rounded-xl border border-border bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-card"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-semibold text-navy truncate">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-sun text-sun" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-3">
                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 80s linear infinite;
        }

        @media (max-width: 1024px) {
          .animate-scroll-smooth {
            animation: scroll-smooth 60s linear infinite;
          }
        }

        @media (max-width: 768px) {
          .animate-scroll-smooth {
            animation: scroll-smooth 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
