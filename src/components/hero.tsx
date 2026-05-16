"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "./logo";
import { LoopingHeadlinePiece } from "./looping-headline-piece";
import { MessagingPreview } from "./messaging-preview";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

const HEADLINE_LINE_ONE = ["Apply", "less."];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_KAIROS },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_KAIROS },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_KAIROS, delay: 0.6 },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      className="relative overflow-hidden border-b-4 border-primary-hover/60"
      style={{ background: "var(--primary)" }}
    >
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.32), rgba(16,185,129,0.22) 55%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-32 lg:pt-28">
        <motion.div
          initial={initial}
          animate="visible"
          variants={containerVariants}
          className="flex flex-col"
        >
          <motion.div variants={fadeUpVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-label text-white backdrop-blur">
              <span
                className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot"
                aria-hidden
              />
              WhatsApp · Discord · Telegram
            </span>
          </motion.div>

          <h1 className="text-display mt-6 text-white">
            <motion.span
              className="block"
              variants={containerVariants}
            >
              {HEADLINE_LINE_ONE.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  className="mr-[0.25em] inline-block will-change-transform"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="block whitespace-nowrap leading-[1.02]"
              variants={containerVariants}
            >
              <motion.span
                key="Land"
                className="mr-[0.18em] inline-block will-change-transform"
                variants={wordVariants}
              >
                Land
              </motion.span>
              <motion.span
                key="looping"
                className="inline-block align-baseline will-change-transform"
                variants={wordVariants}
              >
                <LoopingHeadlinePiece />
              </motion.span>
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-xl text-body text-white/85"
          >
            Kairos is your always-on career agent. It watches the job market,
            scores listings against your profile, and pings you on WhatsApp,
            Discord, or Telegram the second a strong match drops. Reply with a
            single digit and a tailored CV lands in the thread.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="#cta" className="btn btn-on-blue-solid">
              <WhatsAppIcon className="h-4 w-4" />
              Start with WhatsApp
            </Link>
            <Link href="#demo" className="btn btn-on-blue-outline">
              See the demo
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-wrap items-center gap-6 text-caption"
          >
            <Stat label="Avg. alert" value="< 15 min after posting" />
            <Divider />
            <Stat label="Match accuracy" value="0–100 score with reasons" />
            <Divider />
            <Stat label="CV turnaround" value="~60 seconds" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={initial}
          animate="visible"
          variants={cardVariants}
          className="relative"
        >
          <MessagingPreview />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-label text-white/65">{label}</span>
      <span className="text-body-sm font-semibold text-white">{value}</span>
    </div>
  );
}

function Divider() {
  return <span className="h-8 w-px bg-white/20" aria-hidden />;
}
