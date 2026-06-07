"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useFootfallTracker } from "@/hooks/useFootfallTracker";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  
  // Track footfall on every route change
  useFootfallTracker();

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/assets/cassio-logo.jpeg"
              alt="Cassio"
              width={180}
              height={180}
              className="rounded-full opacity-90"
              priority
            />
          </motion.div>

          {/* Thin progress line at bottom */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border/40">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
