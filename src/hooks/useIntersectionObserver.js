import { useEffect, useState } from "react";

export function useIntersectionObserver(options = {}) {
  const [element, setElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "200px", // Increased to trigger earlier
      ...options
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, options.rootMargin, options.threshold]);

  return { targetRef: setElement, isIntersecting };
}
