import { TestimonialSlider } from "@/components/common/TestimonialSlider";

// Additional generic testimonials to supplement service-specific ones
const additionalTestimonials = [
  { name: "Michael Chen", location: "Canary Wharf", image: "https://randomuser.me/api/portraits/men/2.jpg", quote: "Outstanding service! My clothes always come back perfect. Cassio is the best in London." },
  { name: "Sarah Johnson", location: "Kensington", image: "https://randomuser.me/api/portraits/women/3.jpg", quote: "I've been using Cassio for years. Reliable, professional, and always on time." },
  { name: "David Wilson", location: "Greenwich", image: "https://randomuser.me/api/portraits/men/3.jpg", quote: "The quality is exceptional. They handle my expensive suits with such care." },
  { name: "Rachel Green", location: "Mayfair", image: "https://randomuser.me/api/portraits/women/4.jpg", quote: "Eco-friendly and high quality - exactly what I was looking for. Highly recommend!" },
  { name: "Tom Harris", location: "Westminster", image: "https://randomuser.me/api/portraits/men/4.jpg", quote: "Fast turnaround and excellent results every time. Cassio never disappoints." },
  { name: "Lisa Anderson", location: "Camden", image: "https://randomuser.me/api/portraits/women/5.jpg", quote: "The convenience of pickup and delivery is amazing. Makes life so much easier!" },
  { name: "Oliver Smith", location: "Soho", image: "https://randomuser.me/api/portraits/men/5.jpg", quote: "Premium quality at fair prices. Best dry cleaning service I've used in London." },
  { name: "Emily Brown", location: "Hackney", image: "https://randomuser.me/api/portraits/women/6.jpg", quote: "They saved my favorite coat! The stain removal is incredible. Thank you Cassio!" }
];

export function ServiceTestimonial({ service }) {
  // Check if service exists
  if (!service || !service.testimonials) {
    return null;
  }

  // Convert service testimonials to the unified format
  const serviceTestimonials = service.testimonials.map(testimonial => ({
    name: testimonial.name,
    role: testimonial.location,
    image: testimonial.image,
    quote: testimonial.quote,
    rating: 5
  }));

  // Combine service-specific testimonials with additional ones
  const allTestimonials = [
    ...serviceTestimonials,
    ...additionalTestimonials.map(t => ({
      name: t.name,
      role: t.location,
      image: t.image,
      quote: t.quote,
      rating: 5
    }))
  ];

  return (
    <TestimonialSlider
      title="What our customers say"
      subtitle={`See why customers love our ${service?.name?.toLowerCase() || 'professional'} service.`}
      testimonials={allTestimonials}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
