import { TestimonialSlider } from "@/components/common/TestimonialSlider";

export function ServiceTestimonial({ service }) {
  // Convert service testimonials to the unified format
  const testimonials = service.testimonials.map(testimonial => ({
    name: testimonial.name,
    role: testimonial.location,
    image: testimonial.image,
    quote: testimonial.quote,
    rating: 5 // Default rating since original doesn't have ratings
  }));

  return (
    <TestimonialSlider
      title="What our customers say"
      subtitle={`See why customers love our ${service.name.toLowerCase()} service.`}
      testimonials={testimonials}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
