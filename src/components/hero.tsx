"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  MoreVerticalIcon,
  PhoneCallIcon,
  VideoCallIcon,
  WhatsAppIcon,
} from "./logo";
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
              WhatsApp-first AI career agent
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
              className="block whitespace-nowrap"
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
            scores listings against your profile, and pings you on WhatsApp the
            second a strong match drops. Reply with a single digit and a
            tailored CV lands in the thread.
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
          <WhatsAppPreview />
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

function WhatsAppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-white/30 via-transparent to-accent/30 blur-2xl" />
      <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white">
        <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white">
            <WhatsAppIcon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-h4 font-semibold leading-tight">
              Kairo · Career agent
            </p>
            <p className="text-[12px] opacity-85">online now</p>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <button
              type="button"
              className="transition-colors hover:text-white"
              aria-label="Video call"
            >
              <VideoCallIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="transition-colors hover:text-white"
              aria-label="Voice call"
            >
              <PhoneCallIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="transition-colors hover:text-white"
              aria-label="More options"
            >
              <MoreVerticalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="wa-wallpaper space-y-3 px-5 py-6">
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
    "max-w-[85%] rounded-2xl px-4 py-3 text-foreground shadow-none";
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
