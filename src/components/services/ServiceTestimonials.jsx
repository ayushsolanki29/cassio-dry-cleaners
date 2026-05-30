import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const testimonials = [
  { 
    name: "Emma Walker", 
    role: "Nascot Wood, Watford", 
    quote: "Cassio Dry Cleaners has been a lifesaver! My silk dresses always come back perfect. The pickup service is so convenient and the team is incredibly professional.",
    rating: 5
  },
  { 
    name: "James Bennett", 
    role: "Cassiobury, Watford", 
    quote: "I trust Cassio with all my suits and formal wear. The attention to detail is incredible, and the eco-friendly approach is a bonus. Highly recommend!",
    rating: 5
  },
  { 
    name: "Sophie Clarke", 
    role: "Croxley Green, Watford", 
    quote: "Best dry cleaning service in Watford! Fast turnaround, excellent quality, and the team is always professional. They've never let me down.",
    rating: 5
  },
  { 
    name: "Michael Chen", 
    role: "Central Watford, Watford", 
    quote: "As a busy professional, Cassio's pickup and delivery service is perfect. My shirts are always crisp and ready for important meetings.",
    rating: 5
  },
  { 
    name: "Sarah Johnson", 
    role: "Oxhey, Watford", 
    quote: "Exceptional service for my designer pieces. They handle delicate fabrics with such care. The quality is consistently outstanding.",
    rating: 5
  },
  { 
    name: "David Wilson", 
    role: "Garston, Watford", 
    quote: "Cassio saved my wedding suit! They removed a stubborn stain that other cleaners couldn't handle. True professionals with amazing results.",
    rating: 5
  }
];

export function ServiceTestimonials() {
  return (
    <TestimonialSlider
      title="Loved by 50,000+ Watforders"
      subtitle="Don't just take our word for it — hear what our customers say about Cassio Dry Cleaners."
      testimonials={testimonials}
      backgroundColor="bg-cream"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
