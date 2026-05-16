"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  MoreVerticalIcon,
  PhoneCallIcon,
  VideoCallIcon,
  WhatsAppIcon,
} from "./logo";
import { SectionEdge, sectionOverlap } from "./section-edge";

const DEMO_EDGE = 64;

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

type ChatStep =
  | {
      kind: "incoming-alert";
      score: number;
      title: string;
      meta: string;
    }
  | { kind: "outgoing"; text: string }
  | { kind: "typing"; label: string }
  | { kind: "file"; fileName: string; size: string }
  | { kind: "incoming"; text: string }
  | { kind: "dashboard"; row: { company: string; status: string; score: number } };

const STEPS: ChatStep[] = [
  {
    kind: "incoming-alert",
    score: 87,
    title: "Junior Full-Stack Developer @ Wise",
    meta: "Remote · Posted 6 mins ago · USD",
  },
  { kind: "outgoing", text: "1" },
  { kind: "typing", label: "Tailoring CV for Wise…" },
  {
    kind: "file",
    fileName: "Kavindu_Perera_Wise_2026.pdf",
    size: "2 pages · 58s",
  },
  {
    kind: "incoming",
    text: "Want a matching cover letter for the Wise application?",
  },
  { kind: "outgoing", text: "Yes" },
  {
    kind: "dashboard",
    row: { company: "Wise", status: "Applied", score: 87 },
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_KAIROS },
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

export function DemoMoment() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="demo"
      className="section-dark relative overflow-hidden text-white"
      style={{
        marginTop: -sectionOverlap(DEMO_EDGE),
        paddingTop: sectionOverlap(DEMO_EDGE),
      }}
    >
      <SectionEdge from="#111827" to="#f59e0b" height={DEMO_EDGE} />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.55), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[480px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)",
        }}
      />

      <motion.div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={headerVariants}
          >
            <p className="text-label text-white/70">The wow moment</p>
            <h2 className="text-h1 mt-3 text-white">
              From listing to lodged application in{" "}
              <span className="text-accent">under two minutes</span>.
            </h2>
            <p className="text-body mt-5 text-white/75">
              Press play in your head. WhatsApp pings — &ldquo;87% match,
              just posted&rdquo;. You reply <strong className="text-white">1</strong>.
              Sixty seconds later the tailored CV is in the thread. Kairo offers
              a cover letter, you say <strong className="text-white">yes</strong>,
              and the application logs itself in your dashboard. No tabs. No
              copy-paste. Just signal.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "WhatsApp-native — no new app to learn",
                "Per-job tailoring, never a generic template",
                "Realtime tracker so nothing falls through",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-body-sm text-white/85"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-h4 font-semibold leading-tight">
                      Kairo · Career agent
                    </p>
                    <p className="text-[12px] opacity-85">typing…</p>
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

                <div className="wa-wallpaper space-y-3 px-4 py-5">
                  {STEPS.map((step, idx) => (
                    <motion.div
                      key={idx}
                      variants={bubbleVariants}
                      className={
                        isOutgoing(step)
                          ? "flex justify-end"
                          : "flex justify-start"
                      }
                    >
                      <StepBubble step={step} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function isOutgoing(step: ChatStep): boolean {
  return step.kind === "outgoing";
}

function StepBubble({ step }: { step: ChatStep }) {
  if (step.kind === "incoming-alert") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5">
        <div className="flex items-center gap-2 text-label">
          <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wider">
            MATCH
          </span>
          <span className="text-primary">{step.score}%</span>
        </div>
        <p className="mt-1.5 text-body-sm font-semibold text-foreground">
          {step.title}
        </p>
        <p className="mt-0.5 text-caption">{step.meta}</p>
        <p className="mt-2 text-body-sm text-foreground">
          Reply <strong>1</strong> for tailored CV · <strong>2</strong> for
          details · <strong>3</strong> to skip.
        </p>
      </div>
    );
  }

  if (step.kind === "outgoing") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2 text-body-sm font-semibold text-foreground">
        {step.text}
      </div>
    );
  }

  if (step.kind === "typing") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          </div>
          <span className="text-caption">{step.label}</span>
        </div>
      </div>
    );
  }

  if (step.kind === "file") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-danger/10 text-danger">
            <PdfIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground">
              {step.fileName}
            </p>
            <p className="text-caption">{step.size}</p>
          </div>
        </div>
      </div>
    );
  }

  if (step.kind === "incoming") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-body-sm text-foreground">
        {step.text}
      </div>
    );
  }

  // dashboard
  return (
    <div className="w-full max-w-[90%] rounded-2xl rounded-tl-sm border border-border bg-white px-3.5 py-3">
      <div className="flex items-center justify-between">
        <p className="text-label">Dashboard · live</p>
        <span className="inline-flex items-center gap-1 text-caption">
          <span
            className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-dot"
            aria-hidden
          />
          synced
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md bg-secondary/10 px-3 py-2">
        <div>
          <p className="text-body-sm font-semibold text-foreground">
            {step.row.company}
          </p>
          <p className="text-caption">{step.row.status} · just now</p>
        </div>
        <span className="rounded bg-secondary px-2 py-1 text-[11px] font-bold text-white">
          {step.row.score}%
        </span>
      </div>
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
