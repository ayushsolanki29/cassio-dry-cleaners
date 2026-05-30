import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const testimonials = [
  { 
    name: "Sophie Clarke", 
    role: "Croxley Green, Watford", 
    quote: "The entire Cassio process is seamless! From initial contact to delivery, everything was smooth and professional. Love the tracking updates!",
    rating: 5
  },
  { 
    name: "James Bennett", 
    role: "Cassiobury, Watford", 
    quote: "So convenient! Cassio picked up my suits Monday morning and delivered them Tuesday evening - perfectly cleaned. Best service in Watford.",
    rating: 5
  },
  { 
    name: "Emma Walker", 
    role: "Nascot Wood, Watford", 
    quote: "I was skeptical about the 24-hour promise, but Cassio delivered exactly on time. The whole experience was effortless!",
    rating: 5
  },
  { 
    name: "Michael Chen", 
    role: "Central Watford, Watford", 
    quote: "The pickup and delivery process is incredibly efficient. My shirts are always ready when promised, and the quality is outstanding.",
    rating: 5
  },
  { 
    name: "Sarah Johnson", 
    role: "Oxhey, Watford", 
    quote: "From booking to delivery, everything is handled professionally. The app makes tracking so easy, and the results are always perfect.",
    rating: 5
  },
  { 
    name: "David Wilson", 
    role: "Garston, Watford", 
    quote: "Cassio's process is what sets them apart. Reliable, efficient, and the quality is consistently excellent. Highly recommend!",
    rating: 5
  }
];

export function ProcessTestimonials() {
  return (
    <TestimonialSlider
      title="What customers say about Cassio"
      subtitle="Experience the seamless process that thousands of Watforders trust every day."
      testimonials={testimonials}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
