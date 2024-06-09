"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

const variants = {
  hidden: { opacity: 1, y: -10 },
  enter: { opacity: 1, y: 10 },
  //   exit: { opacity: 1, y: 20 },
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
        // exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
