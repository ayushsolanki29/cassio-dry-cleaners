import { TestimonialSlider } from "@/components/common/TestimonialSlider";

const additionalTestimonials = [
  { name: "Michael Chen", location: "Central Watford", quote: "Outstanding service! My clothes always come back perfect. Cassio is the best in Watford." },
  { name: "Sarah Johnson", location: "Oxhey", quote: "I've been using Cassio for years. Reliable, professional, and always on time." },
  { name: "David Wilson", location: "Garston", quote: "The quality is exceptional. They handle my expensive suits with such care." },
  { name: "Rachel Green", location: "Leavesden", quote: "Eco-friendly and high quality - exactly what I was looking for. Highly recommend!" },
  { name: "Tom Harris", location: "Bushey", quote: "Fast turnaround and excellent results every time. Cassio never disappoints." },
  { name: "Lisa Anderson", location: "North Watford", quote: "The convenience of pickup and delivery is amazing. Makes life so much easier!" },
  { name: "Oliver Smith", location: "West Watford", quote: "Premium quality at fair prices. Best dry cleaning service I've used in Watford." },
  { name: "Emily Brown", location: "South Watford", quote: "They saved my favorite coat! The stain removal is incredible. Thank you Cassio!" }
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
    quote: testimonial.quote,
    rating: 5
  }));

  // Combine service-specific testimonials with additional ones
  const allTestimonials = [
    ...serviceTestimonials,
    ...additionalTestimonials.map(t => ({
      name: t.name,
      role: t.location,
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
