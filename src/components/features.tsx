"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionEdge, sectionOverlap } from "./section-edge";

const FEATURES_EDGE = 72;

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

const FEATURES = [
  {
    tint: "card-tint-primary",
    iconTone: "bg-primary text-white",
    borderHover: "group-hover:border-primary/35",
    glow: "rgba(59,130,246,0.35)",
    icon: BellIcon,
    title: "Instant WhatsApp alerts",
    body: "Match score, role, company, and time-since-posted in one line. No inbox digest you forget to open.",
  },
  {
    tint: "card-tint-secondary",
    iconTone: "bg-secondary text-white",
    borderHover: "group-hover:border-secondary/35",
    glow: "rgba(16,185,129,0.35)",
    icon: SparklesIcon,
    title: "AI-tailored CVs",
    body: "MiniMax rewrites your summary, experience, and skills for each role. RenderCV ships a clean PDF in ~60s.",
  },
  {
    tint: "card-tint-accent",
    iconTone: "bg-accent text-white",
    borderHover: "group-hover:border-accent/35",
    glow: "rgba(245,158,11,0.35)",
    icon: ChartIcon,
    title: "0–100 match score",
    body: "Every alert comes with structured reasons so you know why a role fits — and what to highlight in conversation.",
  },
  {
    tint: "card-tint-primary",
    iconTone: "bg-primary text-white",
    borderHover: "group-hover:border-primary/35",
    glow: "rgba(59,130,246,0.35)",
    icon: BoltIcon,
    title: "Realtime dashboard",
    body: "Applications log themselves over Supabase realtime. Track status, drafts, and sources without manual entry.",
  },
  {
    tint: "card-tint-secondary",
    iconTone: "bg-secondary text-white",
    borderHover: "group-hover:border-secondary/35",
    glow: "rgba(16,185,129,0.35)",
    icon: ChatIcon,
    title: "Cover letters on demand",
    body: "Reply yes and Kairo drafts a cover letter in-thread using the same job context. Edit and send.",
  },
  {
    tint: "card-tint-accent",
    iconTone: "bg-accent text-white",
    borderHover: "group-hover:border-accent/35",
    glow: "rgba(245,158,11,0.35)",
    icon: PluginIcon,
    title: "Sources you trust",
    body: "LinkedIn, Greenhouse, Lever, Remotive. Notion sync live. Slack and more on the way.",
  },
] as const;

const COMPARISON = [
  {
    typical: "Email digests once a day",
    kairos: "WhatsApp push within minutes of posting",
  },
  {
    typical: "Generic template CV",
    kairos: "MiniMax-tailored CV for every role",
  },
  {
    typical: "Browser / app context switch",
    kairos: "Primary flow happens in WhatsApp",
  },
  {
    typical: "No match score",
    kairos: "0–100 score plus structured fit reasons",
  },
  {
    typical: "Manual tracker spreadsheet",
    kairos: "Auto-logged realtime dashboard",
  },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, rotate: -1.2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: EASE_KAIROS },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_KAIROS },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_KAIROS },
  },
};

export function Features() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="features"
      className="relative bg-[#f3f4f6]"
      style={{
        marginTop: -sectionOverlap(FEATURES_EDGE),
        paddingTop: sectionOverlap(FEATURES_EDGE),
      }}
    >
      <SectionEdge from="#f3f4f6" to="#111827" height={FEATURES_EDGE} />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <p className="text-label">Why Kairos</p>
          <h2 className="text-h1 mt-3">
            Speed and tailoring, without the busywork.
          </h2>
          <p className="text-body mt-4 text-muted-foreground">
            Most tools optimize for inbox volume. Kairos optimizes for time-to-
            apply and quality-of-application — the two things that actually
            decide outcomes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className={`${feature.tint} group relative overflow-hidden transition-[border-color,box-shadow] duration-300 ${feature.borderHover}`}
                style={
                  {
                    "--feature-glow": feature.glow,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.boxShadow = `0 18px 40px -22px ${feature.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[12px] bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-[0.035]"
                />
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-md transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110 ${feature.iconTone}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative text-h3 mt-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="relative text-body-sm mt-2 text-foreground/80">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="mt-20"
        >
          <h3 className="text-h2 text-foreground">
            Typical tools vs. Kairos
          </h3>
          <p className="text-body mt-3 max-w-xl text-muted-foreground">
            Same problem, very different defaults.
          </p>
        </motion.div>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
          <div className="grid grid-cols-[1fr_1fr] border-b border-border bg-muted">
            <div className="px-5 py-3 text-label">Typical tools</div>
            <div className="px-5 py-3 text-label text-primary">
              Kairos
            </div>
          </div>
          {COMPARISON.map((row, idx) => (
            <motion.div
              key={row.typical}
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={rowVariants}
              transition={{ delay: idx * 0.04 }}
              whileHover={{
                backgroundColor: "rgba(59,130,246,0.05)",
              }}
              className="group grid cursor-default grid-cols-[1fr_1fr] border-b border-border transition-colors last:border-b-0"
            >
              <div className="flex items-start gap-3 px-5 py-4">
                <CrossIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-danger/80" />
                <p className="text-body-sm text-muted-foreground">
                  {row.typical}
                </p>
              </div>
              <div className="flex items-start gap-3 border-l border-border bg-primary/[0.04] px-5 py-4 transition-colors group-hover:bg-primary/[0.09]">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-colors group-hover:text-primary-hover" />
                <p className="text-body-sm font-semibold text-foreground">
                  {row.kairos}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type IconProps = { className?: string };

function BellIcon({ className }: IconProps) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function SparklesIcon({ className }: IconProps) {
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
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      <path d="M19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9L19 14z" />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
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
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 3 5-7" />
    </svg>
  );
}

function BoltIcon({ className }: IconProps) {
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
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function ChatIcon({ className }: IconProps) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PluginIcon({ className }: IconProps) {
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
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
