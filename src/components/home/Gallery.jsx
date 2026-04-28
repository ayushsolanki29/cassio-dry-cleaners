const galleryImages = [
  // Row 1 - Pinterest style with varied dimensions
  { id: 1, src: "/assets/service-drycleaning.jpg", alt: "Premium dry cleaning", width: "w-64", height: "h-80" },
  { id: 2, src: "/assets/hero-woman.jpg", alt: "Happy customer", width: "w-48", height: "h-64" },
  { id: 3, src: "/assets/service-washfold.jpg", alt: "Wash and fold", width: "w-56", height: "h-72" },
  { id: 4, src: "/assets/delivery.jpg", alt: "Delivery service", width: "w-40", height: "h-56" },
  { id: 5, src: "/assets/service-ironing.jpg", alt: "Ironing service", width: "w-52", height: "h-68" },
  { id: 6, src: "/assets/service-premium.jpg", alt: "Premium care", width: "w-44", height: "h-60" },
  
  // Row 2 - Different heights for authentic masonry
  { id: 7, src: "/assets/section-towels.jpg", alt: "Fresh towels", width: "w-48", height: "h-64" },
  { id: 8, src: "/assets/testimonial-1.jpg", alt: "Customer review", width: "w-60", height: "h-76" },
  { id: 9, src: "/assets/blog-1.jpg", alt: "Care tips", width: "w-44", height: "h-56" },
  { id: 10, src: "/assets/testimonial-2.jpg", alt: "Professional service", width: "w-52", height: "h-72" },
  { id: 11, src: "/assets/blog-2.jpg", alt: "Fabric care", width: "w-36", height: "h-48" },
  { id: 12, src: "/assets/cassio-logo.jpg", alt: "Cassio brand", width: "w-48", height: "h-60" }
];

export function Gallery() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex h-full flex-col justify-center">
          {/* Header */}
          <div className="mb-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Our Gallery
            </span>
            
          
          </div>

          {/* Pinterest Masonry Gallery - Exactly 2 Rows */}
          <div className="flex-1 space-y-3">
            {/* Row 1 */}
            <div className="flex gap-3 justify-center">
              {galleryImages.slice(0, 6).map((image) => (
                <div
                  key={image.id}
                  className={`${image.width} ${image.height} overflow-hidden rounded-xl shadow-soft transition-transform duration-300 hover:scale-105`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-3 justify-center">
              {galleryImages.slice(6, 12).map((image) => (
                <div
                  key={image.id}
                  className={`${image.width} ${image.height} overflow-hidden rounded-xl shadow-soft transition-transform duration-300 hover:scale-105`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          
        </div>
      </div>
    </section>
  );
}