import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Bell,
  FileText,
  BarChart2,
  LayoutDashboard,
  MessageSquare,
  Globe,
  Check,
  X,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: KairosLanding,
});

/* ---------- Shared primitives ---------- */

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease, delay }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SparkMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block text-[#6D72F6] ${className}`}
      style={{ textShadow: "0 0 18px rgba(109,114,246,0.45)" }}
      aria-hidden
    >
      ✦
    </span>
  );
}

/* ---------- Navbar ---------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <SparkMark />
          <span className="text-white font-semibold tracking-tight">kairos.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-[#B6BED1]">
          <a href="#how" className="hover:text-white transition-colors">How it Works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#login" className="hidden sm:inline text-sm text-[#B6BED1] hover:text-white transition-colors">
            Login
          </a>
          <a
            href="#cta"
            className="rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white text-sm font-medium px-5 py-2 transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Animated counter ---------- */

function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(mv, to, {
      duration,
      ease,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce, mv]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ---------- Hero dashboard mockup ---------- */

const matches = [
  { co: "Wise", role: "Junior Full-Stack · Remote", score: 87, ago: "6 min ago", cur: "USD", strong: true },
  { co: "Notion", role: "Product Engineer · Hybrid", score: 74, ago: "1 hr ago", cur: "EUR", strong: false },
  { co: "Stripe", role: "Frontend Engineer · Remote", score: 91, ago: "12 min ago", cur: "USD", strong: true },
];

function DashboardMockup() {
  return (
    <div
      className="relative rounded-[28px] border border-white/[0.08] bg-[#0F1117] overflow-hidden"
      style={{
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(109,114,246,0.08)",
        transform: "perspective(1200px) rotateY(-6deg) rotateX(2deg)",
      }}
    >
      <div className="grid grid-cols-[160px_1fr] min-h-[420px]">
        {/* Sidebar */}
        <aside className="bg-[#0A0C12] border-r border-white/[0.06] p-4 text-[13px]">
          <div className="flex items-center gap-2 px-2 pb-4 mb-3 border-b border-white/[0.06]">
            <SparkMark className="text-sm" />
            <span className="text-white font-semibold">kairos.</span>
          </div>
          <ul className="space-y-1 text-[#7C8599]">
            <li className="px-2 py-1.5 rounded-md">Overview</li>
            <li className="px-2 py-1.5 rounded-md bg-[#6D72F6]/15 text-white border-l-2 border-[#6D72F6] flex items-center justify-between">
              <span>Matches</span>
              <span className="text-[10px] bg-[#6D72F6] text-white rounded-full px-1.5 py-0.5">4 new</span>
            </li>
            <li className="px-2 py-1.5 rounded-md">Applications</li>
            <li className="px-2 py-1.5 rounded-md">CV Builder</li>
            <li className="px-2 py-1.5 rounded-md">Settings</li>
          </ul>
        </aside>

        {/* Main */}
        <main className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white text-[15px] font-medium">
                Good morning, Kavindu <SparkMark className="text-xs" />
              </p>
              <p className="text-[11px] text-[#7C8599]">Today, 8:41 AM</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { n: "87", l: "matches this week" },
              { n: "4", l: "applied" },
              { n: "2", l: "interviews" },
            ].map((s) => (
              <div key={s.l} className="bg-[#161A22] rounded-2xl p-3">
                <div className="text-white text-lg font-semibold">{s.n}</div>
                <div className="text-[10px] text-[#7C8599] mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>

          <p className="label-eyebrow mb-2">Top Matches</p>
          <div className="rounded-2xl bg-[#0A0C12] border border-white/[0.06] divide-y divide-white/[0.06]">
            {matches.map((m) => (
              <div
                key={m.co}
                className="flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-[#161A22] transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="h-7 w-7 rounded-md bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center text-[10px] text-white/80 font-semibold">
                    {m.co[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[12px] font-medium truncate">{m.role}</p>
                    <p className="text-[10px] text-[#7C8599]">
                      Posted {m.ago} · {m.cur}
                    </p>
                  </div>
                </div>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                  style={{
                    background: m.strong ? "#6D72F6" : "rgba(129,140,248,0.7)",
                  }}
                >
                  {m.score}%
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const { scrollY } = useScroll();
  const mockY = useTransform(scrollY, [0, 600], [0, 30]);
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109,114,246,0.14) 0%, transparent 70%)",
        }}
      />
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.10] px-4 py-1.5 text-sm text-[#B6BED1]">
              <SparkMark className="text-xs" />
              AI Career Operating System · WhatsApp · Discord · Telegram
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white">
              Apply less.
              <br />
              Land more.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#B6BED1] max-w-xl">
              Kairos watches the job market, scores every listing, and pings you on
              WhatsApp the moment a strong match appears. Reply with one digit — get
              a tailored CV in under 60 seconds.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-7 py-3 font-medium transition-colors"
              >
                Get Early Access <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[#B6BED1] hover:text-white transition-colors"
              >
                See the Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-xs text-[#7C8599]">
              Free to start <span className="mx-2">·</span> No CV uploads needed
              <span className="mx-2">·</span> Works on WhatsApp
            </p>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-3 max-w-lg">
              {[
                { v: <><Counter to={15} suffix=" min" /></>, prefix: "<", l: "Avg. alert latency" },
                { v: <><Counter to={100} /></>, prefix: "0–", l: "Match accuracy score" },
                { v: <><Counter to={60} suffix=" sec" /></>, prefix: "~", l: "CV turnaround time" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`px-4 ${i !== 2 ? "border-r border-white/[0.08]" : ""} ${i === 0 ? "pl-0" : ""}`}
                >
                  <div className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                    {s.prefix}
                    {s.v}
                  </div>
                  <div className="text-[11px] text-[#7C8599] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Mockup */}
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-10 rounded-full"
            style={{
              background: "rgba(109,114,246,0.12)",
              filter: "blur(120px)",
            }}
          />
          <motion.div style={reduce ? undefined : { y: mockY }} className="relative">
            <Reveal delay={0.15}>
              <DashboardMockup />
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ticker ---------- */

const tickerNames = [
  "Stripe", "Linear", "Vercel", "Notion", "Shopify", "Figma", "OpenAI", "Airbnb", "Wise",
];

function TrustTicker() {
  return (
    <section className="py-16 overflow-hidden">
      <p className="label-eyebrow text-center">Roles from top companies, matched to you daily</p>
      <div className="relative mt-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }}
        />
        <div className="flex w-max ticker">
          {[...tickerNames, ...tickerNames].map((n, i) => (
            <span
              key={i}
              className="text-white/30 text-sm font-medium px-10 whitespace-nowrap"
            >
              {n} <span className="mx-6 text-white/15">·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ticker { animation: marquee 28s linear infinite; }
        .ticker:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .ticker { animation: none; } }
      `}</style>
    </section>
  );
}

/* ---------- How it works ---------- */

function ScanPulse() {
  return (
    <div className="relative rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4 overflow-hidden h-full">
      <p className="label-eyebrow mb-3">Live scan</p>
      <div className="space-y-2">
        {[60, 80, 50, 70, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 rounded-full bg-white/[0.06] flex-1 overflow-hidden">
              <div className="h-full bg-white/[0.10]" style={{ width: `${w}%` }} />
            </div>
            <span className="text-[10px] text-[#7C8599] w-6">{w}%</span>
          </div>
        ))}
      </div>
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #818CF8, transparent)" }}
        initial={{ top: "20%" }}
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-3 top-3 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
        <span className="text-[10px] text-[#7C8599]">scanning</span>
      </div>
    </div>
  );
}

function WhatsAppBubble() {
  return (
    <div className="rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4">
      <p className="label-eyebrow mb-3">WhatsApp · Kairo</p>
      <div className="bg-[#161A22] rounded-2xl p-3 text-sm space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] text-[#B6BED1]">
          <SparkMark className="text-[10px]" /> Kairo · Career agent
        </div>
        <div className="text-[#22C55E] font-semibold text-xs">🟢 87% MATCH</div>
        <div className="text-white">Junior Full-Stack @ Wise</div>
        <div className="text-[11px] text-[#7C8599]">Remote · Posted 6 mins ago · USD</div>
        <div className="text-[11px] text-[#B6BED1] pt-1">Reply 1 · 2 · 3</div>
      </div>
    </div>
  );
}

function CvCard() {
  return (
    <div className="rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4">
      <p className="label-eyebrow mb-3">Delivered</p>
      <div className="rounded-xl bg-[#161A22] border border-white/[0.06] p-4">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#6D72F6]/15 border border-[#6D72F6]/30 flex items-center justify-center">
            <FileText className="h-4 w-4 text-[#818CF8]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white text-sm truncate">Kavindu_Perera_Wise_2026.pdf</p>
            <p className="text-[11px] text-[#7C8599] mt-0.5">2 pages · Delivered in 58s</p>
            <a className="inline-flex items-center gap-1 text-[11px] text-[#818CF8] mt-2 hover:text-white" href="#">
              View PDF <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    tag: "Poller · MiniMax · pgvector",
    title: "Kairo watches the market for you",
    body: "Polls every 15 minutes across LinkedIn, Greenhouse, Lever, and Remotive. Deduplicates, scores with MiniMax, and only surfaces matches above your threshold.",
    visual: <ScanPulse />,
  },
  {
    n: "02",
    tag: "Baileys · OpenClaw",
    title: "You get a WhatsApp alert in minutes",
    body: "One message. Match score, role, company, time posted, and salary. Reply 1 to apply, 2 for details, 3 to skip.",
    visual: <WhatsAppBubble />,
  },
  {
    n: "03",
    tag: "RenderCV · Supabase Realtime",
    title: "Tailored CV in ~60 seconds",
    body: "MiniMax rewrites your summary, experience, and skills for the exact role. RenderCV renders a clean PDF — delivered in-thread. Cover letter available on request.",
    visual: <CvCard />,
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="label-eyebrow">How Kairos works</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]">
            Three steps between <span className="text-[#7C8599]">"just posted"</span> and{" "}
            <span className="text-[#7C8599]">"application sent."</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[#B6BED1] max-w-2xl">
            Kairos collapses discovery, tailoring, and tracking into a single WhatsApp conversation.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center pt-1">
                    <div className="text-[#6D72F6] font-mono text-sm">{s.n}</div>
                    {i !== steps.length - 1 && (
                      <div className="flex-1 mt-3 w-px border-l border-dashed border-white/[0.12] min-h-[80px]" />
                    )}
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[11px] text-[#7C8599] font-mono">
                      {s.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-[#B6BED1] max-w-md leading-relaxed">{s.body}</p>
                  </div>
                </div>
                <div className="lg:pl-10">{s.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */

const features = [
  { Icon: Bell, t: "Instant WhatsApp Alerts", b: "Match score, role, company, and time-since-posted in one message. No app switching." },
  { Icon: FileText, t: "AI-Tailored CVs", b: "MiniMax rewrites your summary, experience, and skills for every role. RenderCV delivers a clean PDF in ~60s." },
  { Icon: BarChart2, t: "0–100 Match Score", b: "Not just a number — structured reasons for fit so you know exactly why you're a strong candidate." },
  { Icon: LayoutDashboard, t: "Realtime Dashboard", b: "Applications auto-logged via Supabase Realtime. Track status, match score, and timeline without lifting a finger." },
  { Icon: MessageSquare, t: "Cover Letters On Demand", b: "Reply \"Yes\" after your CV is sent — Kairo drafts a tailored cover letter from the same job context." },
  { Icon: Globe, t: "Sources You Trust", b: "LinkedIn, Greenhouse, Lever, Remotive. Notion sync live. Slack integration coming." },
];

const compareRows = [
  ["Email digest once a day", "WhatsApp push within minutes of posting"],
  ["Generic template CV", "MiniMax-tailored CV for every role"],
  ["Browser / app context switch", "Primary flow in WhatsApp"],
  ["No match explanation", "0–100 score + structured fit reasons"],
  ["Manual tracker spreadsheet", "Auto-logged realtime dashboard"],
];

function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="label-eyebrow">Why Kairos</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]">
            Speed and tailoring, without the busywork.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[#B6BED1] max-w-2xl">
            Kairos doesn't optimize for inbox volume. It optimizes for time-to-apply and quality-of-application.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ Icon, t, b }, i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className="h-full rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-8 hover:border-[#6D72F6]/30 hover:shadow-[0_0_30px_rgba(109,114,246,0.08)] transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-[#6D72F6]/15 border border-[#6D72F6]/25 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#818CF8]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white tracking-tight">{t}</h3>
                <p className="mt-2 text-sm text-[#B6BED1] leading-relaxed">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16">
            <p className="label-eyebrow mb-4">Kairos vs typical tools</p>
            <div className="rounded-[28px] bg-[#0F1117] border border-white/[0.08] overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                <div className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#7C8599] border-b border-white/[0.06]">Typical tools</div>
                <div className="px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#7C8599] border-b border-white/[0.06] border-l border-white/[0.06]">Kairos</div>
                {compareRows.map(([l, r], i) => (
                  <Fragment key={i}>
                    <div className="px-6 py-4 text-[#7C8599] border-b border-white/[0.06] flex items-start gap-2">
                      <X className="h-4 w-4 mt-0.5 shrink-0 text-[#7C8599]" /> {l}
                    </div>
                    <div className="px-6 py-4 text-white border-b border-white/[0.06] border-l border-white/[0.06] flex items-start gap-2">
                      <SparkMark className="text-xs mt-1" /> {r}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Demo section ---------- */

type Bubble =
  | { kind: "in"; content: React.ReactNode }
  | { kind: "out"; content: React.ReactNode }
  | { kind: "typing" }
  | { kind: "file" }
  | { kind: "sync" };

const bubbles: Bubble[] = [
  {
    kind: "in",
    content: (
      <div className="space-y-1">
        <div className="text-[11px] text-[#B6BED1] flex items-center gap-1.5">
          <SparkMark className="text-[10px]" /> Kairo · Career agent
        </div>
        <div className="text-[#22C55E] text-xs font-semibold">🟢 87% MATCH</div>
        <div className="text-white">Junior Full-Stack Developer @ Wise</div>
        <div className="text-[11px] text-[#7C8599]">Remote · Posted 6 mins ago · USD</div>
        <div className="text-[11px] text-[#B6BED1] pt-1">Reply 1 · 2 · 3</div>
      </div>
    ),
  },
  { kind: "out", content: <span>1</span> },
  { kind: "typing" },
  { kind: "file" },
  { kind: "in", content: <span>Want a matching cover letter for the Wise application?</span> },
  { kind: "out", content: <span>Yes</span> },
  { kind: "sync" },
];

function ChatSequence() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-[28px] bg-[#0A0C12] border border-white/[0.08] p-5 max-w-md mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#6D72F6]/20 border border-[#6D72F6]/30 flex items-center justify-center">
            <SparkMark className="text-xs" />
          </div>
          <div>
            <p className="text-white text-sm">Kairo</p>
            <p className="text-[10px] text-[#22C55E]">online</p>
          </div>
        </div>
        <p className="text-[10px] text-[#7C8599]">WhatsApp</p>
      </div>

      <div className="space-y-3 pt-4">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: i * 0.25 }}
            viewport={{ once: true, margin: "-20px" }}
            className={
              b.kind === "out"
                ? "flex justify-end"
                : b.kind === "sync"
                  ? "flex justify-center"
                  : "flex justify-start"
            }
          >
            {b.kind === "in" && (
              <div className="bg-[#161A22] rounded-2xl px-4 py-3 text-sm max-w-[85%]">{b.content}</div>
            )}
            {b.kind === "out" && (
              <div className="bg-[#6D72F6] text-white rounded-2xl px-4 py-2 text-sm">{b.content}</div>
            )}
            {b.kind === "typing" && (
              <div className="bg-[#161A22] rounded-2xl px-4 py-3 text-sm text-[#B6BED1] flex items-center gap-2">
                <span>Tailoring CV for Wise</span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1 w-1 rounded-full bg-[#818CF8]"
                      animate={reduce ? undefined : { opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                    />
                  ))}
                </span>
              </div>
            )}
            {b.kind === "file" && (
              <div className="bg-[#161A22] rounded-2xl px-4 py-3 text-sm max-w-[85%] flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#6D72F6]/15 border border-[#6D72F6]/30 flex items-center justify-center shrink-0">
                  <FileText className="h-4 w-4 text-[#818CF8]" />
                </div>
                <div>
                  <p className="text-white text-[13px]">Kavindu_Perera_Wise_2026.pdf</p>
                  <p className="text-[11px] text-[#7C8599] mt-0.5">2 pages · Delivered in 58s</p>
                </div>
              </div>
            )}
            {b.kind === "sync" && (
              <motion.div
                className="rounded-full px-4 py-2 text-[11px] border bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]"
                animate={reduce ? undefined : { boxShadow: ["0 0 0 rgba(34,197,94,0)", "0 0 24px rgba(34,197,94,0.25)", "0 0 0 rgba(34,197,94,0)"] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                Wise · Applied · 87% · ✓ Dashboard synced
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Demo() {
  return (
    <section id="demo" className="py-32 px-6 md:px-12 lg:px-24 relative bg-[#0F1117]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 15% 10%, rgba(109,114,246,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <p className="label-eyebrow">The wow moment</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              From listing to lodged application in <span className="text-[#818CF8]">under two minutes.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[#B6BED1] leading-relaxed max-w-lg">
              An 87% match appears. You reply <span className="text-white font-medium">1</span>. Your CV is tailored
              and delivered in 60 seconds. You reply <span className="text-white font-medium">Yes</span> — a cover
              letter follows. The dashboard logs itself. You didn't open a single browser tab.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-7 space-y-3 text-[#B6BED1]">
              {[
                "WhatsApp-native — no new app to learn",
                "Per-job tailoring, not generic templates",
                "Realtime tracker — always in sync",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <SparkMark className="text-xs mt-1.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ChatSequence />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Social proof ---------- */

const quotes = [
  {
    q: "I used to spend Sundays rewriting my CV for every application. Kairo does it while I'm at work.",
    name: "Dilini R.",
    role: "Software Engineer",
  },
  {
    q: "The match score is genuinely useful. I stopped applying to things I had no shot at — and started landing interviews.",
    name: "Ashan M.",
    role: "Product Designer",
  },
  {
    q: "Got a WhatsApp ping at 9 AM. Applied by 9:02. Had a call scheduled by noon. That's wild.",
    name: "Praveen S.",
    role: "Frontend Developer",
  },
];

function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-5">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.05}>
            <div className="h-full rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-8 hover:border-[#6D72F6]/20 hover:shadow-[0_0_24px_rgba(109,114,246,0.06)] transition-all duration-300">
              <p className="text-[#B6BED1] leading-relaxed">"{q.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#6D72F6]/20 border border-[#6D72F6]/30 flex items-center justify-center text-[11px] font-semibold text-[#818CF8]">
                  {q.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <p className="text-sm text-white">{q.name}</p>
                  <p className="text-[11px] text-[#7C8599]">{q.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

function Pricing() {
  const free = ["5 job alerts per day", "1 tailored CV per week", "Basic match scoring", "WhatsApp delivery"];
  const freeNo = ["Cover letters", "Realtime dashboard"];
  const pro = [
    "Unlimited job alerts",
    "Unlimited tailored CVs",
    "0–100 match score + reasons",
    "Cover letters on demand",
    "Realtime dashboard",
    "Multi-platform (WhatsApp, Discord, Telegram)",
    "Priority support",
  ];

  return (
    <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="label-eyebrow">Simple pricing</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Start free. Scale when you land.
          </h2>
        </Reveal>

        <div className="mt-14 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Reveal>
            <div className="rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-10 h-full flex flex-col">
              <p className="label-eyebrow">Free</p>
              <p className="mt-3 text-4xl font-semibold text-white tracking-tight">$0 <span className="text-sm text-[#7C8599] font-normal">/ month</span></p>
              <ul className="mt-7 space-y-3 text-sm flex-1">
                {free.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#B6BED1]">
                    <Check className="h-4 w-4 text-[#818CF8] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
                {freeNo.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#7C8599]">
                    <X className="h-4 w-4 text-[#7C8599] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] text-white px-5 py-3 text-sm hover:bg-white/[0.04] transition-colors">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div
              className="rounded-[28px] bg-[#0F1117] border border-[#6D72F6]/40 p-10 h-full flex flex-col relative"
              style={{ boxShadow: "0 0 48px rgba(109,114,246,0.14)" }}
            >
              <div className="flex items-center justify-between">
                <p className="label-eyebrow">Pro</p>
                <span className="bg-[#6D72F6]/20 text-[#818CF8] text-[10px] uppercase tracking-[0.2em] rounded-full px-3 py-1">Most popular</span>
              </div>
              <p className="mt-3 text-4xl font-semibold text-white tracking-tight">$19 <span className="text-sm text-[#7C8599] font-normal">/ month</span></p>
              <ul className="mt-7 space-y-3 text-sm flex-1">
                {pro.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#B6BED1]">
                    <Check className="h-4 w-4 text-[#818CF8] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-5 py-3 text-sm font-medium transition-colors">
                Get Early Access <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCta() {
  return (
    <section id="cta" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,114,246,0.16) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: "rgba(109,114,246,0.12)", filter: "blur(140px)" }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="label-eyebrow">Limited beta</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Your next opportunity already exists. Be there first.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[#B6BED1] leading-relaxed">
            Drop your WhatsApp number. Kairo introduces itself, builds your profile, sets your match threshold, and starts watching the market — in minutes.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/"
              className="inline-flex items-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-8 py-4 text-base font-medium transition-colors"
            >
              Message Kairo on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="text-[#B6BED1] hover:text-white transition-colors text-sm">
              Read how it works
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-xs text-[#7C8599]">
            Join professionals using Kairos to move faster than the market.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 lg:px-24 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="flex items-center gap-2">
              <SparkMark />
              <span className="text-white font-semibold tracking-tight">kairos.</span>
            </a>
            <p className="mt-3 text-sm text-[#7C8599]">Apply less. Land more.</p>
          </div>
          <div>
            <p className="label-eyebrow mb-4">Product</p>
            <ul className="space-y-2 text-sm text-[#B6BED1]">
              <li><a href="#how" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <p className="label-eyebrow mb-4">Resources</p>
            <ul className="space-y-2 text-sm text-[#B6BED1]">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buildathon Brief</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <p className="label-eyebrow mb-4">Team</p>
            <ul className="space-y-2 text-sm text-[#B6BED1]">
              <li>Exitcode0</li>
              <li><a href="mailto:hello@kairos.app" className="hover:text-white transition-colors">hello@kairos.app</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#7C8599]">
          <p>© {new Date().getFullYear()} Kairos · Team Exitcode0</p>
          <p>Powered by: MiniMax · Supabase · RenderCV · Baileys</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function KairosLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustTicker />
        <HowItWorks />
        <Features />
        <Demo />
        <SocialProof />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
