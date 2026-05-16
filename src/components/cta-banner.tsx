"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "./logo";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_KAIROS },
  },
};

export function CtaBanner() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="cta" className="section-accent relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(31,41,55,0.35) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="text-label" style={{ color: "rgba(31,41,55,0.7)" }}>
            Limited beta
          </p>
          <h2 className="text-h1 mt-3 text-[#1f2937]">
            Stop scrolling job boards. Start landing offers.
          </h2>
          <p className="text-body mt-4 text-[#1f2937]/80">
            Drop your WhatsApp number and Kairo will introduce itself. We will
            onboard your profile, set your match threshold, and start watching
            the market within minutes.
          </p>
        </motion.div>

        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="https://wa.me/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Message Kairo
          </Link>
          <Link
            href="#how"
            className="btn"
            style={{
              background: "#1f2937",
              color: "#ffffff",
            }}
          >
            Read the brief
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
