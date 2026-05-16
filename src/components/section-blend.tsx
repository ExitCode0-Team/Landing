"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/** Gentle enter on scroll — translate only so sections never flash transparent */
export function ScrollReveal({ children, className = "", id }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 1, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, ease: EASE_KAIROS }}
    >
      {children}
    </motion.div>
  );
}
