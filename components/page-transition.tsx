"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 1, y: -20 },
  enter: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.2,
  ease: "easeInOut",
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
