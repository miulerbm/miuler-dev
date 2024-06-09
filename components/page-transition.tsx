"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={{
          initial: { opacity: 1, clipPath: "inset(0% 0% 100% 0%)" },
          animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
