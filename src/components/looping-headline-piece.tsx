"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

// Phase durations in ms
const TEXT_VISIBLE_MS = 1800;
const TEXT_TRANSITION_MS = 550;
const TYPING_VISIBLE_MS = 1600;
const TYPING_TRANSITION_MS = 380;

type Phase = "text" | "typing";

export function LoopingHeadlinePiece() {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("text");

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Initial delay to let the entrance stagger finish first
    const startDelay = setTimeout(() => {
      let current: Phase = "text";

      function tick() {
        if (current === "text") {
          // Switch to typing after text has been visible + its exit animation
          setTimeout(() => {
            current = "typing";
            setPhase("typing");
            tick();
          }, TEXT_VISIBLE_MS + TEXT_TRANSITION_MS);
        } else {
          // Switch back to text after typing has been visible + its exit animation
          setTimeout(() => {
            current = "text";
            setPhase("text");
            tick();
          }, TYPING_VISIBLE_MS + TYPING_TRANSITION_MS);
        }
      }

      tick();
    }, 1400);

    return () => clearTimeout(startDelay);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className="inline-block">
        <span className="gradient-text">more.</span>
      </span>
    );
  }

  return (
    // Fixed-width container prevents layout shift between text and typing bubble
    <span
      className="relative inline-flex items-center align-baseline"
      style={{ minWidth: "7ch" }}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        {phase === "text" ? (
          <motion.span
            key="text"
            className="inline-block will-change-transform"
            initial={{ x: 64, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -64, opacity: 0 }}
            transition={{ duration: TEXT_TRANSITION_MS / 1000, ease: EASE_KAIROS }}
          >
            <span className="gradient-text">more.</span>
          </motion.span>
        ) : (
          <motion.span
            key="typing"
            className="inline-flex items-center"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: TYPING_TRANSITION_MS / 1000, ease: EASE_KAIROS }}
          >
            <TypingBubble />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function TypingBubble() {
  return (
    <span
      className="relative inline-flex items-center gap-[5px] rounded-2xl rounded-bl-sm px-4 py-3"
      style={{ background: "#DCF8C6" }}
      aria-label="Kairo is typing"
    >
      {/* WhatsApp bubble tail */}
      <svg
        className="absolute -bottom-[7px] left-0"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        aria-hidden
      >
        <path d="M0 0 C4 8 12 8 12 8 L0 8 Z" fill="#DCF8C6" />
      </svg>
      <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
      <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
      <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground" />
    </span>
  );
}
