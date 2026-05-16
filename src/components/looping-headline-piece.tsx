"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

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

    const startDelay = setTimeout(() => {
      let current: Phase = "text";

      function tick() {
        if (current === "text") {
          setTimeout(() => {
            current = "typing";
            setPhase("typing");
            tick();
          }, TEXT_VISIBLE_MS + TEXT_TRANSITION_MS);
        } else {
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
      <span className="inline-block align-baseline">
        <span className="gradient-text-on-blue">more.</span>
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex items-baseline"
      style={{ minWidth: "5.2ch", verticalAlign: "baseline" }}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        {phase === "text" ? (
          <motion.span
            key="text"
            className="inline-block align-baseline will-change-transform"
            initial={{ x: 64, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -64, opacity: 0 }}
            transition={{
              duration: TEXT_TRANSITION_MS / 1000,
              ease: EASE_KAIROS,
            }}
          >
            <span className="gradient-text-on-blue">more.</span>
          </motion.span>
        ) : (
          <motion.span
            key="typing"
            className="inline-flex items-baseline align-baseline"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{
              duration: TYPING_TRANSITION_MS / 1000,
              ease: EASE_KAIROS,
            }}
            style={{ verticalAlign: "baseline" }}
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
      className="relative inline-flex items-center gap-[0.12em]"
      style={{
        background: "#DCF8C6",
        borderRadius: "0.55em 0.55em 0.55em 0.18em",
        padding: "0.32em 0.48em",
        verticalAlign: "baseline",
        transform: "translateY(-0.06em)",
      }}
      aria-label="Kairo is typing"
    >
      <span
        className="typing-dot rounded-full"
        style={{
          width: "0.2em",
          height: "0.2em",
          background: "#4b5563",
        }}
      />
      <span
        className="typing-dot rounded-full"
        style={{
          width: "0.2em",
          height: "0.2em",
          background: "#4b5563",
        }}
      />
      <span
        className="typing-dot rounded-full"
        style={{
          width: "0.2em",
          height: "0.2em",
          background: "#4b5563",
        }}
      />
    </span>
  );
}
