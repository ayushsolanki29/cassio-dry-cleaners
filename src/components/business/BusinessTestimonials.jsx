import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, FitLife Gym",
    image: "/assets/testimonial-1.jpg",
    quote: "Cassio handles our towel service flawlessly. Always on time, always fresh. Our members notice the difference and it shows in our reviews.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Head Chef, The Garden Restaurant",
    image: "/assets/testimonial-2.jpg",
    quote: "Our chef whites have never looked better. Cassio understands the demands of a busy kitchen and delivers every time. Professional service.",
    rating: 5
  },
  {
    name: "Emma Roberts",
    role: "Facilities Director, TechHub Coworking",
    image: "/assets/testimonial-3.jpg",
    quote: "Switching to Cassio was the best decision. Professional service, flexible scheduling, and great account management. Highly recommend for businesses.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Hotel Manager, Boutique London",
    image: "/assets/testimonial-2.jpg",
    quote: "Cassio's commercial service is exceptional. They handle our linens with care and always meet our tight deadlines. Perfect for hospitality.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Spa Director, Wellness Centre",
    image: "/assets/testimonial-1.jpg",
    quote: "The quality and reliability of Cassio's service is outstanding. Our spa towels and robes are always pristine. Great partnership.",
    rating: 5
  },
  {
    name: "James Parker",
    role: "Office Manager, Law Firm",
    image: "/assets/testimonial-3.jpg",
    quote: "Cassio provides excellent corporate dry cleaning services. Professional, reliable, and they understand our business needs perfectly.",
    rating: 5
  }
];

export function BusinessTestimonials() {
  return (
    <TestimonialSlider
      title="What businesses say about Cassio"
      subtitle="Trusted by London's leading businesses for reliable, professional commercial cleaning services."
      testimonials={testimonials}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
