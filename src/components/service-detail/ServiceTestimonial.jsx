import { TestimonialSlider } from "@/components/common/TestimonialSlider";
import { googleReviews } from "@/data/reviewsData";

export function ServiceTestimonial({ service }) {
  if (!service) {
    return null;
  }

  return (
    <TestimonialSlider
      title="What our customers say"
      subtitle={`See why customers love our ${service?.title?.toLowerCase() || 'professional'} service.`}
      testimonials={googleReviews}
      backgroundColor="bg-white"
      autoSlide={true}
      slideInterval={5000}
    />
  );
}
