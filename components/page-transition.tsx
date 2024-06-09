"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página hacia arriba
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
