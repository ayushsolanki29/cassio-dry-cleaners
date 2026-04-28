import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const testimonials = [
  { 
    name: "Emma Walker", 
    role: "Shoreditch, London", 
    image: "/assets/testimonial-1.jpg", 
    quote: "Cassio has completely changed my weekends. My silk dresses come back perfect every time. Pickup is right on time!",
    rating: 5
  },
  { 
    name: "James Bennett", 
    role: "Chelsea, London", 
    image: "/assets/testimonial-2.jpg", 
    quote: "Used Cassio for my wedding suits - the attention to detail was incredible. Worth every penny. Highly recommend.",
    rating: 5
  },
  { 
    name: "Sophie Clarke", 
    role: "Notting Hill, London", 
    image: "/assets/testimonial-3.jpg", 
    quote: "The 24-hour turnaround is unreal. Scheduled at 8pm, clothes back next evening, neatly packed. Smooth experience.",
    rating: 5
  },
  { 
    name: "Michael Chen", 
    role: "Canary Wharf, London", 
    image: "/assets/testimonial-2.jpg", 
    quote: "Perfect for busy professionals. The app makes scheduling so easy and the quality is consistently excellent. Game changer!",
    rating: 5
  },
  { 
    name: "Sarah Johnson", 
    role: "Kensington, London", 
    image: "/assets/testimonial-1.jpg", 
    quote: "Cassio handles my designer pieces with such care. The eco-friendly approach is a bonus. Outstanding service every time.",
    rating: 5
  },
  { 
    name: "David Wilson", 
    role: "Greenwich, London", 
    image: "/assets/testimonial-3.jpg", 
    quote: "Tried many dry cleaners in London, but Cassio is in a league of its own. Professional, reliable, and convenient.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <TestimonialSlider
      title="What our customers say"
      subtitle="Join 50,000+ satisfied customers who trust Cassio with their precious garments."
      testimonials={testimonials}
      backgroundColor="bg-cream"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
