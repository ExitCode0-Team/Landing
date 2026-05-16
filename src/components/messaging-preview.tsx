"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  DiscordIcon,
  MoreVerticalIcon,
  PhoneCallIcon,
  TelegramIcon,
  VideoCallIcon,
  WhatsAppIcon,
} from "./logo";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;
const CAROUSEL_INTERVAL_MS = 4500;

type Platform = "whatsapp" | "discord" | "telegram";

const PLATFORMS: {
  id: Platform;
  label: string;
  Icon: typeof WhatsAppIcon;
}[] = [
  { id: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
  { id: "discord", label: "Discord", Icon: DiscordIcon },
  { id: "telegram", label: "Telegram", Icon: TelegramIcon },
];

const PLATFORM_STYLE: Record<
  Platform,
  {
    headerBg: string;
    headerIconBg: string;
    bodyClass: string;
    outgoingBg: string;
    outgoingText: string;
    incomingBg: string;
    incomingText: string;
    status: string;
  }
> = {
  whatsapp: {
    headerBg: "#075E54",
    headerIconBg: "#10B981",
    bodyClass: "wa-wallpaper",
    outgoingBg: "#DCF8C6",
    outgoingText: "text-foreground",
    incomingBg: "#FFFFFF",
    incomingText: "text-foreground",
    status: "online now",
  },
  discord: {
    headerBg: "#5865F2",
    headerIconBg: "#4752C4",
    bodyClass: "",
    outgoingBg: "#5865F2",
    outgoingText: "text-white",
    incomingBg: "#40444B",
    incomingText: "text-[#DCDDDE]",
    status: "Online",
  },
  telegram: {
    headerBg: "#2AABEE",
    headerIconBg: "#229ED9",
    bodyClass: "",
    outgoingBg: "#EFFDDE",
    outgoingText: "text-foreground",
    incomingBg: "#FFFFFF",
    incomingText: "text-foreground",
    status: "last seen recently",
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export function MessagingPreview() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const platform = PLATFORMS[index].id;
  const style = PLATFORM_STYLE[platform];
  const active = PLATFORMS[index];

  const advance = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % PLATFORMS.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const timer = setInterval(advance, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, paused, advance, index]);

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Messaging platform previews"
    >
      <motion.div
        layout
        className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-white/30 via-transparent to-accent/30 blur-2xl"
      />

      <p
        className="mb-2 text-center text-[12px] font-semibold uppercase tracking-wider text-white/90"
        aria-live="polite"
      >
        {active.label}
      </p>

      <motion.div
        layout
        className="mb-4 h-1 overflow-hidden rounded-full bg-white/25"
        aria-hidden
      >
        <motion.div
          key={`progress-${index}`}
          className="h-full rounded-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: CAROUSEL_INTERVAL_MS / 1000,
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={platform}
            custom={direction}
            variants={prefersReducedMotion ? undefined : slideVariants}
            initial={prefersReducedMotion ? false : "enter"}
            animate="center"
            exit={prefersReducedMotion ? undefined : "exit"}
            transition={{ duration: 0.4, ease: EASE_KAIROS }}
          >
            <div
              className="flex items-center gap-3 px-5 py-4 text-white"
              style={{ background: style.headerBg }}
            >
              <motion.div
                className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                style={{ background: style.headerIconBg }}
              >
                <active.Icon className="h-6 w-6" />
              </motion.div>
              <div className="flex-1">
                <p className="text-h4 font-semibold leading-tight">
                  Kairo · Career agent
                </p>
                <p className="text-[12px] opacity-85">{style.status}</p>
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

            <div
              className={`space-y-3 px-5 py-6 ${style.bodyClass}`}
              style={
                platform === "discord"
                  ? { background: "#36393F" }
                  : platform === "telegram"
                    ? { background: "#E8EDF2" }
                    : undefined
              }
            >
              <ChatBubble
                side="left"
                bg={style.incomingBg}
                textClass={style.incomingText}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 text-label"
                >
                  <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wider">
                    MATCH
                  </span>
                  <span className="text-primary">87%</span>
                </motion.div>
                <p className="mt-1.5 text-body-sm font-semibold">
                  Junior Full-Stack Developer @ Wise
                </p>
                <p className="mt-0.5 text-caption opacity-80">
                  Remote · Posted 6 mins ago · USD
                </p>
                <p className="mt-2 text-body-sm">
                  Reply <strong>1</strong> for tailored CV · <strong>2</strong>{" "}
                  for details · <strong>3</strong> to skip.
                </p>
              </ChatBubble>

              <ChatBubble
                side="right"
                bg={style.outgoingBg}
                textClass={style.outgoingText}
              >
                <p className="text-body-sm font-semibold">1</p>
              </ChatBubble>

              <ChatBubble
                side="left"
                bg={style.incomingBg}
                textClass={style.incomingText}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    <span className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                  </motion.div>
                  <span className="text-caption opacity-80">
                    Tailoring CV for Wise...
                  </span>
                </div>
              </ChatBubble>

              <ChatBubble
                side="left"
                bg={style.incomingBg}
                textClass={style.incomingText}
              >
                <div className="flex items-center gap-3">
                  <motion.div className="flex h-10 w-10 items-center justify-center rounded-md bg-danger/10 text-danger">
                    <PdfIcon className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="text-body-sm font-semibold">
                      Kavindu_Perera_Wise_2026.pdf
                    </p>
                    <p className="text-caption opacity-80">
                      2 pages · Delivered in 58s
                    </p>
                  </div>
                </div>
              </ChatBubble>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ChatBubble({
  children,
  side,
  bg,
  textClass,
}: {
  children: React.ReactNode;
  side: "left" | "right";
  bg: string;
  textClass: string;
}) {
  return (
    <motion.div
      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-none ${textClass} ${
        side === "right" ? "ml-auto rounded-tr-sm" : "rounded-tl-sm"
      }`}
      style={{ background: bg }}
    >
      {children}
    </motion.div>
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
