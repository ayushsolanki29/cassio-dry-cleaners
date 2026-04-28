import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const testimonials = [
  { 
    name: "Emma Walker", 
    role: "Shoreditch", 
    image: "/assets/testimonial-1.jpg", 
    quote: "Cassio is my go-to for dry cleaning in Shoreditch. Always on time, always perfect! The local service is outstanding.",
    rating: 5
  },
  { 
    name: "James Bennett", 
    role: "Chelsea", 
    image: "/assets/testimonial-2.jpg", 
    quote: "Best dry cleaning service in Chelsea. Professional, reliable, and convenient. They understand the local needs perfectly.",
    rating: 5
  },
  { 
    name: "Sophie Clarke", 
    role: "Notting Hill", 
    image: "/assets/testimonial-3.jpg", 
    quote: "Love having Cassio in Notting Hill. The pickup service is so convenient! They know the area and deliver on time.",
    rating: 5
  },
  { 
    name: "Oliver Smith", 
    role: "Canary Wharf", 
    image: "/assets/testimonial-2.jpg", 
    quote: "Perfect for busy professionals in Canary Wharf. Fast turnaround, excellent quality, and they work around our schedules.",
    rating: 5
  },
  { 
    name: "Lucy Brown", 
    role: "Camden", 
    image: "/assets/testimonial-1.jpg", 
    quote: "Cassio has been serving Camden brilliantly. Eco-friendly and reliable! Great to have such quality service locally.",
    rating: 5
  },
  { 
    name: "Tom Wilson", 
    role: "Westminster", 
    image: "/assets/testimonial-3.jpg", 
    quote: "Outstanding service in Westminster. Cassio handles all my suits perfectly and the local knowledge shows in their service.",
    rating: 5
  }
];

export function LocalTestimonials() {
  return (
    <TestimonialSlider
      title="Loved across London"
      subtitle="Discover why customers in every borough choose Cassio for their dry cleaning needs."
      testimonials={testimonials}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
