"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    name: "Dry Cleaning",
    image: "/assets/service-drycleaning.jpg",
    bgImage: "/assets/service-drycleaning.jpg"
  },
  {
    name: "Laundry",
    image: "/assets/service-washfold.jpg",
    bgImage: "/assets/service-washfold.jpg"
  },
  {
    name: "Ironing",
    image: "/assets/service-ironing.jpg",
    bgImage: "/assets/service-ironing.jpg"
  },
  {
    name: "Premium Care",
    image: "/assets/service-premium.jpg",
    bgImage: "/assets/service-premium.jpg"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images on component mount
  useEffect(() => {
    const imagePromises = services.map((service) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = service.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, []);

  useEffect(() => {
    // Only start carousel after images are loaded
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Change every 4 seconds for smoother transitions

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const currentService = services[currentIndex];

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${currentService.bgImage}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/85" />

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 pb-12 pt-10 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-12 lg:pb-16 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <img src="/assets/cassio-logo.jpg" alt="Cassio" className="h-5 w-5 rounded-full object-cover mix-blend-lighten" />
            Best Laundry Service in London | Trusted by 50k+
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="whitespace-nowrap">Professional Laundry &</span>
            <br />
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-brand inline-block"
              >
                {currentService.name}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="max-w-xl text-lg text-white/85">
            Fast, eco-friendly garment care with free pickup &amp; delivery in 24 hours across London. Loved by 50,000+ happy customers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-pop transition hover:scale-105"
            >
              Schedule pickup
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="rounded-full bg-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Explore services
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full bg-gray-900/90 px-6 py-3 backdrop-blur"
          >
            {/* Google Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 48 48" className="h-6 w-6">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
            </div>
            
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6" viewBox="0 0 24 24" fill="#FFC107">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            
            {/* Rating Text */}
            <span className="text-xl font-bold text-white">4.9/5</span>
          </motion.div>
        </motion.div>

        {/* Right: image, unified with the hero, no card/box feel */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative z-10 mx-auto h-[500px] w-full overflow-hidden rounded-3xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={currentService.image}
                alt={`${currentService.name} service`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Floating scheduling chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-2 top-8 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-left-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-mint text-brand">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Best in London</p>
                <p className="font-display font-semibold">24h Express Service</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -right-2 bottom-10 z-20 rounded-2xl bg-white p-3 shadow-pop sm:-right-4 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sun text-brand">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-foreground">
                <p className="text-xs text-muted-foreground">Premium Quality</p>
                <p className="font-display font-semibold">Eco-Friendly Care</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


