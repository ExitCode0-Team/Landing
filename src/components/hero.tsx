"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "./logo";
import { LoopingHeadlinePiece } from "./looping-headline-piece";

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
      className="relative overflow-hidden border-b border-primary/20"
      style={{
        background:
          "linear-gradient(180deg, rgba(59,130,246,0.13) 0%, rgba(16,185,129,0.07) 55%, #ffffff 100%)",
      }}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[860px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.35), rgba(16,185,129,0.22) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-32 lg:pt-28">
        <motion.div
          initial={initial}
          animate="visible"
          variants={containerVariants}
          className="flex flex-col"
        >
          <motion.div variants={fadeUpVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-label">
              <span
                className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot"
                aria-hidden
              />
              WhatsApp-first AI career agent
            </span>
          </motion.div>

          <h1 className="text-display mt-6 text-foreground">
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
              className="block"
              variants={containerVariants}
            >
              {/* "Land" word with stagger entrance */}
              <motion.span
                key="Land"
                className="mr-[0.25em] inline-block will-change-transform"
                variants={wordVariants}
              >
                Land{" "}
              </motion.span>
              {/* Looping piece: entrance stagger once, then cycles text ↔ typing bubble */}
              <motion.span
                key="looping"
                className="inline-block will-change-transform"
                variants={wordVariants}
              >
                <LoopingHeadlinePiece />
              </motion.span>
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-xl text-body text-muted-foreground"
          >
            Kairos is your always-on career agent. It watches the job market,
            scores listings against your profile, and pings you on WhatsApp the
            second a strong match drops. Reply with a single digit and a
            tailored CV lands in the thread.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="#cta" className="btn btn-primary">
              <WhatsAppIcon className="h-4 w-4" />
              Start with WhatsApp
            </Link>
            <Link href="#demo" className="btn btn-outline">
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
          <WhatsAppPreview />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-label">{label}</span>
      <span className="text-body-sm font-semibold text-foreground">
        {value}
      </span>
    </div>
  );
}

function Divider() {
  return <span className="h-8 w-px bg-border" aria-hidden />;
}

function WhatsAppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-border bg-white">
        <div className="flex items-center gap-3 border-b border-border bg-[#075E54] px-4 py-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white">
            <WhatsAppIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-body-sm font-semibold leading-tight">
              Kairo · Career agent
            </p>
            <p className="text-[11px] opacity-80">online now</p>
          </div>
          <span
            className="h-2 w-2 rounded-full bg-secondary animate-pulse-dot"
            aria-hidden
          />
        </div>

        <div className="wa-wallpaper space-y-3 px-4 py-5">
          <ChatBubble side="left">
            <div className="flex items-center gap-2 text-label">
              <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wider">
                MATCH
              </span>
              <span className="text-primary">87%</span>
            </div>
            <p className="mt-1.5 text-body-sm font-semibold text-foreground">
              Junior Full-Stack Developer @ Wise
            </p>
            <p className="mt-0.5 text-caption">
              Remote · Posted 6 mins ago · USD
            </p>
            <p className="mt-2 text-body-sm text-foreground">
              Reply <strong>1</strong> for tailored CV · <strong>2</strong> for
              details · <strong>3</strong> to skip.
            </p>
          </ChatBubble>

          <ChatBubble side="right">
            <p className="text-body-sm font-semibold">1</p>
          </ChatBubble>

          <ChatBubble side="left">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              </div>
              <span className="text-caption">
                Tailoring CV for Wise...
              </span>
            </div>
          </ChatBubble>

          <ChatBubble side="left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-danger/10 text-danger">
                <PdfIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-body-sm font-semibold text-foreground">
                  Kavindu_Perera_Wise_2026.pdf
                </p>
                <p className="text-caption">2 pages · Delivered in 58s</p>
              </div>
            </div>
          </ChatBubble>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  const base =
    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-foreground shadow-none";
  const left = "bg-white rounded-tl-sm";
  const right = "bg-[#DCF8C6] rounded-tr-sm ml-auto";
  return (
    <div className={`${base} ${side === "left" ? left : right}`}>
      {children}
    </div>
  );
}

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}
