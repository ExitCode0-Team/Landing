"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_KAIROS = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    label: "Step 01",
    title: "Kairo watches the market for you",
    body: "Every 15 minutes, our poller scans LinkedIn, Greenhouse, Lever, and Remotive, dedupes results, and scores each role against your profile with MiniMax. Only matches above your threshold get through.",
    tag: "Poller · MiniMax · pgvector",
  },
  {
    label: "Step 02",
    title: "You get a WhatsApp alert in minutes",
    body: "An instant message lands in your thread with the role, the match score, the reasons, and a one-tap action. Reply 1 to generate a tailored CV. Reply 2 for full details. Reply 3 to skip.",
    tag: "Baileys · OpenClaw",
  },
  {
    label: "Step 03",
    title: "Tailored CV in ~60 seconds",
    body: "Kairo merges MiniMax content into a RenderCV template and ships the PDF back in-thread. Ask for a cover letter and it follows. Your dashboard updates over Supabase realtime — no refresh needed.",
    tag: "RenderCV · Supabase realtime",
  },
] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_KAIROS },
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

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="how" className="relative border-t border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <motion.div
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl"
        >
          <p className="text-label">How it works</p>
          <h2 className="text-h1 mt-3">
            Three steps between &ldquo;just posted&rdquo; and{" "}
            <span className="gradient-text">&ldquo;application sent&rdquo;</span>
            .
          </h2>
          <p className="text-body mt-4 text-muted-foreground">
            Kairos collapses the slow parts of a job hunt — discovery, tailoring,
            tracking — into a single WhatsApp conversation. Here is the loop.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
            aria-hidden
          />

          <ol className="space-y-8">
            {STEPS.map((step, idx) => (
              <motion.li
                key={step.label}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={itemVariants}
                transition={{ delay: idx * 0.05 }}
                className="grid gap-6 md:grid-cols-[56px_1fr] md:items-start"
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white text-h3 font-extrabold text-primary">
                    {idx + 1}
                  </span>
                </div>

                <div className="card card-interactive border-l-4 border-l-primary/60">
                  <p className="text-label">{step.label}</p>
                  <h3 className="text-h2 mt-2 text-foreground">{step.title}</h3>
                  <p className="text-body mt-3 text-muted-foreground">
                    {step.body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-muted px-2.5 py-1 text-caption font-medium text-foreground">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden
                    />
                    {step.tag}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
