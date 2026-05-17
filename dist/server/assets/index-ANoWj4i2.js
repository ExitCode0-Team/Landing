import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, Fragment as Fragment$1, useRef } from "react";
import { useScroll, useTransform, useReducedMotion, motion, useInView, useMotionValue, animate } from "framer-motion";
import { ArrowRight, Bell, FileText, BarChart2, LayoutDashboard, MessageSquare, Globe, X, Check } from "lucide-react";
const ease = [0.25, 0.46, 0.45, 0.94];
function Reveal({
  children,
  delay = 0,
  className
}) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsx(motion.div, { initial: reduce ? false : {
    opacity: 0,
    y: 24
  }, whileInView: reduce ? void 0 : {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5,
    ease,
    delay
  }, viewport: {
    once: true,
    margin: "-60px"
  }, className, children });
}
function SparkMark({
  className = ""
}) {
  return /* @__PURE__ */ jsx("span", { className: `inline-block text-[#6D72F6] ${className}`, style: {
    textShadow: "0 0 18px rgba(109,114,246,0.45)"
  }, "aria-hidden": true, children: "✦" });
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(SparkMark, {}),
      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold tracking-tight", children: "kairos." })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-9 text-sm text-[#B6BED1]", children: [
      /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-white transition-colors", children: "How it Works" }),
      /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-white transition-colors", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "#demo", className: "hover:text-white transition-colors", children: "Demo" }),
      /* @__PURE__ */ jsx("a", { href: "#pricing", className: "hover:text-white transition-colors", children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#login", className: "hidden sm:inline text-sm text-[#B6BED1] hover:text-white transition-colors", children: "Login" }),
      /* @__PURE__ */ jsx("a", { href: "#cta", className: "rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white text-sm font-medium px-5 py-2 transition-colors", children: "Get Early Access" })
    ] })
  ] }) });
}
function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-40px"
  });
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
      onUpdate: (v) => setVal(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce, mv]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    val,
    suffix
  ] });
}
const matches = [{
  co: "Wise",
  role: "Junior Full-Stack · Remote",
  score: 87,
  ago: "6 min ago",
  cur: "USD",
  strong: true
}, {
  co: "Notion",
  role: "Product Engineer · Hybrid",
  score: 74,
  ago: "1 hr ago",
  cur: "EUR",
  strong: false
}, {
  co: "Stripe",
  role: "Frontend Engineer · Remote",
  score: 91,
  ago: "12 min ago",
  cur: "USD",
  strong: true
}];
function DashboardMockup() {
  return /* @__PURE__ */ jsx("div", { className: "relative rounded-[28px] border border-white/[0.08] bg-[#0F1117] overflow-hidden", style: {
    boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(109,114,246,0.08)",
    transform: "perspective(1200px) rotateY(-6deg) rotateX(2deg)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[160px_1fr] min-h-[420px]", children: [
    /* @__PURE__ */ jsxs("aside", { className: "bg-[#0A0C12] border-r border-white/[0.06] p-4 text-[13px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 pb-4 mb-3 border-b border-white/[0.06]", children: [
        /* @__PURE__ */ jsx(SparkMark, { className: "text-sm" }),
        /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "kairos." })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-[#7C8599]", children: [
        /* @__PURE__ */ jsx("li", { className: "px-2 py-1.5 rounded-md", children: "Overview" }),
        /* @__PURE__ */ jsxs("li", { className: "px-2 py-1.5 rounded-md bg-[#6D72F6]/15 text-white border-l-2 border-[#6D72F6] flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Matches" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-[#6D72F6] text-white rounded-full px-1.5 py-0.5", children: "4 new" })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "px-2 py-1.5 rounded-md", children: "Applications" }),
        /* @__PURE__ */ jsx("li", { className: "px-2 py-1.5 rounded-md", children: "CV Builder" }),
        /* @__PURE__ */ jsx("li", { className: "px-2 py-1.5 rounded-md", children: "Settings" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-white text-[15px] font-medium", children: [
          "Good morning, Kavindu ",
          /* @__PURE__ */ jsx(SparkMark, { className: "text-xs" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#7C8599]", children: "Today, 8:41 AM" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [{
        n: "87",
        l: "matches this week"
      }, {
        n: "4",
        l: "applied"
      }, {
        n: "2",
        l: "interviews"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-[#161A22] rounded-2xl p-3", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white text-lg font-semibold", children: s.n }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] text-[#7C8599] mt-0.5", children: s.l })
      ] }, s.l)) }),
      /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-2", children: "Top Matches" }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-[#0A0C12] border border-white/[0.06] divide-y divide-white/[0.06]", children: matches.map((m) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 px-3 py-2.5 hover:bg-[#161A22] transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-md bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center text-[10px] text-white/80 font-semibold", children: m.co[0] }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-white text-[12px] font-medium truncate", children: m.role }),
            /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-[#7C8599]", children: [
              "Posted ",
              m.ago,
              " · ",
              m.cur
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "rounded-full px-2 py-0.5 text-[10px] font-semibold text-white", style: {
          background: m.strong ? "#6D72F6" : "rgba(129,140,248,0.7)"
        }, children: [
          m.score,
          "%"
        ] })
      ] }, m.co)) })
    ] })
  ] }) });
}
function Hero() {
  const {
    scrollY
  } = useScroll();
  const mockY = useTransform(scrollY, [0, 600], [0, 30]);
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", style: {
      background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109,114,246,0.14) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60", style: {
      backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
      maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.10] px-4 py-1.5 text-sm text-[#B6BED1]", children: [
          /* @__PURE__ */ jsx(SparkMark, { className: "text-xs" }),
          "AI Career Operating System · WhatsApp · Discord · Telegram"
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white", children: [
          "Apply less.",
          /* @__PURE__ */ jsx("br", {}),
          "Land more."
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-base sm:text-lg leading-relaxed text-[#B6BED1] max-w-xl", children: "Kairos watches the job market, scores every listing, and pings you on WhatsApp the moment a strong match appears. Reply with one digit — get a tailored CV in under 60 seconds." }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#cta", className: "inline-flex items-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-7 py-3 font-medium transition-colors", children: [
            "Get Early Access ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#demo", className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[#B6BED1] hover:text-white transition-colors", children: "See the Demo" })
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xs text-[#7C8599]", children: [
          "Free to start ",
          /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" }),
          " No CV uploads needed",
          /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" }),
          " Works on WhatsApp"
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-3 max-w-lg", children: [{
          v: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Counter, { to: 15, suffix: " min" }) }),
          prefix: "<",
          l: "Avg. alert latency"
        }, {
          v: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Counter, { to: 100 }) }),
          prefix: "0–",
          l: "Match accuracy score"
        }, {
          v: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Counter, { to: 60, suffix: " sec" }) }),
          prefix: "~",
          l: "CV turnaround time"
        }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: `px-4 ${i !== 2 ? "border-r border-white/[0.08]" : ""} ${i === 0 ? "pl-0" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "text-white text-xl sm:text-2xl font-semibold tracking-tight", children: [
            s.prefix,
            s.v
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#7C8599] mt-1", children: s.l })
        ] }, i)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-10 rounded-full", style: {
          background: "rgba(109,114,246,0.12)",
          filter: "blur(120px)"
        } }),
        /* @__PURE__ */ jsx(motion.div, { style: reduce ? void 0 : {
          y: mockY
        }, className: "relative", children: /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsx(DashboardMockup, {}) }) })
      ] })
    ] })
  ] });
}
const tickerNames = ["Stripe", "Linear", "Vercel", "Notion", "Shopify", "Figma", "OpenAI", "Airbnb", "Wise"];
function TrustTicker() {
  return /* @__PURE__ */ jsxs("section", { className: "py-16 overflow-hidden", children: [
    /* @__PURE__ */ jsx("p", { className: "label-eyebrow text-center", children: "Roles from top companies, matched to you daily" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-6", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-32 z-10", style: {
        background: "linear-gradient(to right, #050505, transparent)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-32 z-10", style: {
        background: "linear-gradient(to left, #050505, transparent)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "flex w-max ticker", children: [...tickerNames, ...tickerNames].map((n, i) => /* @__PURE__ */ jsxs("span", { className: "text-white/30 text-sm font-medium px-10 whitespace-nowrap", children: [
        n,
        " ",
        /* @__PURE__ */ jsx("span", { className: "mx-6 text-white/15", children: "·" })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ticker { animation: marquee 28s linear infinite; }
        .ticker:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .ticker { animation: none; } }
      ` })
  ] });
}
function ScanPulse() {
  return /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4 overflow-hidden h-full", children: [
    /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-3", children: "Live scan" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [60, 80, 50, 70, 45].map((w, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-2 rounded-full bg-white/[0.06] flex-1 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-white/[0.10]", style: {
        width: `${w}%`
      } }) }),
      /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-[#7C8599] w-6", children: [
        w,
        "%"
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsx(motion.div, { "aria-hidden": true, className: "absolute left-0 right-0 h-px", style: {
      background: "linear-gradient(90deg, transparent, #818CF8, transparent)"
    }, initial: {
      top: "20%"
    }, animate: {
      top: ["20%", "80%", "20%"]
    }, transition: {
      duration: 3.4,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "absolute right-3 top-3 flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] text-[#7C8599]", children: "scanning" })
    ] })
  ] });
}
function WhatsAppBubble() {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-3", children: "WhatsApp · Kairo" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#161A22] rounded-2xl p-3 text-sm space-y-1.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] text-[#B6BED1]", children: [
        /* @__PURE__ */ jsx(SparkMark, { className: "text-[10px]" }),
        " Kairo · Career agent"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-[#22C55E] font-semibold text-xs", children: "🟢 87% MATCH" }),
      /* @__PURE__ */ jsx("div", { className: "text-white", children: "Junior Full-Stack @ Wise" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#7C8599]", children: "Remote · Posted 6 mins ago · USD" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#B6BED1] pt-1", children: "Reply 1 · 2 · 3" })
    ] })
  ] });
}
function CvCard() {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#0A0C12] border border-white/[0.08] p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-3", children: "Delivered" }),
    /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-[#161A22] border border-white/[0.06] p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-lg bg-[#6D72F6]/15 border border-[#6D72F6]/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-[#818CF8]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white text-sm truncate", children: "Kavindu_Perera_Wise_2026.pdf" }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#7C8599] mt-0.5", children: "2 pages · Delivered in 58s" }),
        /* @__PURE__ */ jsxs("a", { className: "inline-flex items-center gap-1 text-[11px] text-[#818CF8] mt-2 hover:text-white", href: "#", children: [
          "View PDF ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] })
    ] }) })
  ] });
}
const steps = [{
  n: "01",
  tag: "Poller · MiniMax · pgvector",
  title: "Kairo watches the market for you",
  body: "Polls every 15 minutes across LinkedIn, Greenhouse, Lever, and Remotive. Deduplicates, scores with MiniMax, and only surfaces matches above your threshold.",
  visual: /* @__PURE__ */ jsx(ScanPulse, {})
}, {
  n: "02",
  tag: "Baileys · OpenClaw",
  title: "You get a WhatsApp alert in minutes",
  body: "One message. Match score, role, company, time posted, and salary. Reply 1 to apply, 2 for details, 3 to skip.",
  visual: /* @__PURE__ */ jsx(WhatsAppBubble, {})
}, {
  n: "03",
  tag: "RenderCV · Supabase Realtime",
  title: "Tailored CV in ~60 seconds",
  body: "MiniMax rewrites your summary, experience, and skills for the exact role. RenderCV renders a clean PDF — delivered in-thread. Cover letter available on request.",
  visual: /* @__PURE__ */ jsx(CvCard, {})
}];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "py-32 px-6 md:px-12 lg:px-24 relative", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "How Kairos works" }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]", children: [
      "Three steps between ",
      /* @__PURE__ */ jsx("span", { className: "text-[#7C8599]", children: '"just posted"' }),
      " and",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-[#7C8599]", children: '"application sent."' })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "mt-5 text-[#B6BED1] max-w-2xl", children: "Kairos collapses discovery, tailoring, and tracking into a single WhatsApp conversation." }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 space-y-10 relative", children: steps.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center pt-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[#6D72F6] font-mono text-sm", children: s.n }),
          i !== steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex-1 mt-3 w-px border-l border-dashed border-white/[0.12] min-h-[80px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[11px] text-[#7C8599] font-mono", children: s.tag }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 text-2xl font-semibold text-white tracking-tight", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[#B6BED1] max-w-md leading-relaxed", children: s.body })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:pl-10", children: s.visual })
    ] }) }, s.n)) })
  ] }) });
}
const features = [{
  Icon: Bell,
  t: "Instant WhatsApp Alerts",
  b: "Match score, role, company, and time-since-posted in one message. No app switching."
}, {
  Icon: FileText,
  t: "AI-Tailored CVs",
  b: "MiniMax rewrites your summary, experience, and skills for every role. RenderCV delivers a clean PDF in ~60s."
}, {
  Icon: BarChart2,
  t: "0–100 Match Score",
  b: "Not just a number — structured reasons for fit so you know exactly why you're a strong candidate."
}, {
  Icon: LayoutDashboard,
  t: "Realtime Dashboard",
  b: "Applications auto-logged via Supabase Realtime. Track status, match score, and timeline without lifting a finger."
}, {
  Icon: MessageSquare,
  t: "Cover Letters On Demand",
  b: 'Reply "Yes" after your CV is sent — Kairo drafts a tailored cover letter from the same job context.'
}, {
  Icon: Globe,
  t: "Sources You Trust",
  b: "LinkedIn, Greenhouse, Lever, Remotive. Notion sync live. Slack integration coming."
}];
const compareRows = [["Email digest once a day", "WhatsApp push within minutes of posting"], ["Generic template CV", "MiniMax-tailored CV for every role"], ["Browser / app context switch", "Primary flow in WhatsApp"], ["No match explanation", "0–100 score + structured fit reasons"], ["Manual tracker spreadsheet", "Auto-logged realtime dashboard"]];
function Features() {
  return /* @__PURE__ */ jsx("section", { id: "features", className: "py-32 px-6 md:px-12 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Why Kairos" }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]", children: "Speed and tailoring, without the busywork." }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "mt-5 text-[#B6BED1] max-w-2xl", children: "Kairos doesn't optimize for inbox volume. It optimizes for time-to-apply and quality-of-application." }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: features.map(({
      Icon,
      t,
      b
    }, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-8 hover:border-[#6D72F6]/30 hover:shadow-[0_0_30px_rgba(109,114,246,0.08)] transition-all duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-[#6D72F6]/15 border border-[#6D72F6]/25 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-[#818CF8]" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 text-lg font-semibold text-white tracking-tight", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[#B6BED1] leading-relaxed", children: b })
    ] }) }, t)) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-4", children: "Kairos vs typical tools" }),
      /* @__PURE__ */ jsx("div", { className: "rounded-[28px] bg-[#0F1117] border border-white/[0.08] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#7C8599] border-b border-white/[0.06]", children: "Typical tools" }),
        /* @__PURE__ */ jsx("div", { className: "px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-[#7C8599] border-b border-white/[0.06] border-l border-white/[0.06]", children: "Kairos" }),
        compareRows.map(([l, r], i) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 text-[#7C8599] border-b border-white/[0.06] flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4 mt-0.5 shrink-0 text-[#7C8599]" }),
            " ",
            l
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 text-white border-b border-white/[0.06] border-l border-white/[0.06] flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(SparkMark, { className: "text-xs mt-1" }),
            " ",
            r
          ] })
        ] }, i))
      ] }) })
    ] }) })
  ] }) });
}
const bubbles = [{
  kind: "in",
  content: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-[#B6BED1] flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx(SparkMark, { className: "text-[10px]" }),
      " Kairo · Career agent"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-[#22C55E] text-xs font-semibold", children: "🟢 87% MATCH" }),
    /* @__PURE__ */ jsx("div", { className: "text-white", children: "Junior Full-Stack Developer @ Wise" }),
    /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#7C8599]", children: "Remote · Posted 6 mins ago · USD" }),
    /* @__PURE__ */ jsx("div", { className: "text-[11px] text-[#B6BED1] pt-1", children: "Reply 1 · 2 · 3" })
  ] })
}, {
  kind: "out",
  content: /* @__PURE__ */ jsx("span", { children: "1" })
}, {
  kind: "typing"
}, {
  kind: "file"
}, {
  kind: "in",
  content: /* @__PURE__ */ jsx("span", { children: "Want a matching cover letter for the Wise application?" })
}, {
  kind: "out",
  content: /* @__PURE__ */ jsx("span", { children: "Yes" })
}, {
  kind: "sync"
}];
function ChatSequence() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-[#0A0C12] border border-white/[0.08] p-5 max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-white/[0.06]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full bg-[#6D72F6]/20 border border-[#6D72F6]/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(SparkMark, { className: "text-xs" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white text-sm", children: "Kairo" }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-[#22C55E]", children: "online" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-[#7C8599]", children: "WhatsApp" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: bubbles.map((b, i) => /* @__PURE__ */ jsxs(motion.div, { initial: reduce ? false : {
      opacity: 0,
      y: 12
    }, whileInView: reduce ? void 0 : {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.4,
      ease,
      delay: i * 0.25
    }, viewport: {
      once: true,
      margin: "-20px"
    }, className: b.kind === "out" ? "flex justify-end" : b.kind === "sync" ? "flex justify-center" : "flex justify-start", children: [
      b.kind === "in" && /* @__PURE__ */ jsx("div", { className: "bg-[#161A22] rounded-2xl px-4 py-3 text-sm max-w-[85%]", children: b.content }),
      b.kind === "out" && /* @__PURE__ */ jsx("div", { className: "bg-[#6D72F6] text-white rounded-2xl px-4 py-2 text-sm", children: b.content }),
      b.kind === "typing" && /* @__PURE__ */ jsxs("div", { className: "bg-[#161A22] rounded-2xl px-4 py-3 text-sm text-[#B6BED1] flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Tailoring CV for Wise" }),
        /* @__PURE__ */ jsx("span", { className: "flex gap-1", children: [0, 1, 2].map((d) => /* @__PURE__ */ jsx(motion.span, { className: "h-1 w-1 rounded-full bg-[#818CF8]", animate: reduce ? void 0 : {
          opacity: [0.2, 1, 0.2]
        }, transition: {
          duration: 1.2,
          repeat: Infinity,
          delay: d * 0.2
        } }, d)) })
      ] }),
      b.kind === "file" && /* @__PURE__ */ jsxs("div", { className: "bg-[#161A22] rounded-2xl px-4 py-3 text-sm max-w-[85%] flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-lg bg-[#6D72F6]/15 border border-[#6D72F6]/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-[#818CF8]" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white text-[13px]", children: "Kavindu_Perera_Wise_2026.pdf" }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#7C8599] mt-0.5", children: "2 pages · Delivered in 58s" })
        ] })
      ] }),
      b.kind === "sync" && /* @__PURE__ */ jsx(motion.div, { className: "rounded-full px-4 py-2 text-[11px] border bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]", animate: reduce ? void 0 : {
        boxShadow: ["0 0 0 rgba(34,197,94,0)", "0 0 24px rgba(34,197,94,0.25)", "0 0 0 rgba(34,197,94,0)"]
      }, transition: {
        duration: 2.2,
        repeat: Infinity
      }, children: "Wise · Applied · 87% · ✓ Dashboard synced" })
    ] }, i)) })
  ] });
}
function Demo() {
  return /* @__PURE__ */ jsxs("section", { id: "demo", className: "py-32 px-6 md:px-12 lg:px-24 relative bg-[#0F1117]", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", style: {
      background: "radial-gradient(ellipse 40% 40% at 15% 10%, rgba(109,114,246,0.10) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "The wow moment" }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]", children: [
          "From listing to lodged application in ",
          /* @__PURE__ */ jsx("span", { className: "text-[#818CF8]", children: "under two minutes." })
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("p", { className: "mt-6 text-[#B6BED1] leading-relaxed max-w-lg", children: [
          "An 87% match appears. You reply ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "1" }),
          ". Your CV is tailored and delivered in 60 seconds. You reply ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Yes" }),
          " — a cover letter follows. The dashboard logs itself. You didn't open a single browser tab."
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3 text-[#B6BED1]", children: ["WhatsApp-native — no new app to learn", "Per-job tailoring, not generic templates", "Realtime tracker — always in sync"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(SparkMark, { className: "text-xs mt-1.5" }),
          /* @__PURE__ */ jsx("span", { children: t })
        ] }, t)) }) })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx(ChatSequence, {}) })
    ] })
  ] });
}
const quotes = [{
  q: "I used to spend Sundays rewriting my CV for every application. Kairo does it while I'm at work.",
  name: "Dilini R.",
  role: "Software Engineer"
}, {
  q: "The match score is genuinely useful. I stopped applying to things I had no shot at — and started landing interviews.",
  name: "Ashan M.",
  role: "Product Designer"
}, {
  q: "Got a WhatsApp ping at 9 AM. Applied by 9:02. Had a call scheduled by noon. That's wild.",
  name: "Praveen S.",
  role: "Frontend Developer"
}];
function SocialProof() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 px-6 md:px-12 lg:px-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-3 gap-5", children: quotes.map((q, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-8 hover:border-[#6D72F6]/20 hover:shadow-[0_0_24px_rgba(109,114,246,0.06)] transition-all duration-300", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-[#B6BED1] leading-relaxed", children: [
      '"',
      q.q,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-[#6D72F6]/20 border border-[#6D72F6]/30 flex items-center justify-center text-[11px] font-semibold text-[#818CF8]", children: q.name.split(" ").map((p) => p[0]).join("") }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-white", children: q.name }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#7C8599]", children: q.role })
      ] })
    ] })
  ] }) }, q.name)) }) });
}
function Pricing() {
  const free = ["5 job alerts per day", "1 tailored CV per week", "Basic match scoring", "WhatsApp delivery"];
  const freeNo = ["Cover letters", "Realtime dashboard"];
  const pro = ["Unlimited job alerts", "Unlimited tailored CVs", "0–100 match score + reasons", "Cover letters on demand", "Realtime dashboard", "Multi-platform (WhatsApp, Discord, Telegram)", "Priority support"];
  return /* @__PURE__ */ jsx("section", { id: "pricing", className: "py-32 px-6 md:px-12 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl text-center", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Simple pricing" }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white", children: "Start free. Scale when you land." }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-[#0F1117] border border-white/[0.08] p-10 h-full flex flex-col", children: [
        /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Free" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-4xl font-semibold text-white tracking-tight", children: [
          "$0 ",
          /* @__PURE__ */ jsx("span", { className: "text-sm text-[#7C8599] font-normal", children: "/ month" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-7 space-y-3 text-sm flex-1", children: [
          free.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[#B6BED1]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#818CF8] mt-0.5 shrink-0" }),
            " ",
            f
          ] }, f)),
          freeNo.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[#7C8599]", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-[#7C8599] mt-0.5 shrink-0" }),
            " ",
            f
          ] }, f))
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#cta", className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] text-white px-5 py-3 text-sm hover:bg-white/[0.04] transition-colors", children: [
          "Get Started Free ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-[#0F1117] border border-[#6D72F6]/40 p-10 h-full flex flex-col relative", style: {
        boxShadow: "0 0 48px rgba(109,114,246,0.14)"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Pro" }),
          /* @__PURE__ */ jsx("span", { className: "bg-[#6D72F6]/20 text-[#818CF8] text-[10px] uppercase tracking-[0.2em] rounded-full px-3 py-1", children: "Most popular" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-4xl font-semibold text-white tracking-tight", children: [
          "$19 ",
          /* @__PURE__ */ jsx("span", { className: "text-sm text-[#7C8599] font-normal", children: "/ month" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3 text-sm flex-1", children: pro.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[#B6BED1]", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#818CF8] mt-0.5 shrink-0" }),
          " ",
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxs("a", { href: "#cta", className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-5 py-3 text-sm font-medium transition-colors", children: [
          "Get Early Access ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] })
  ] }) });
}
function FinalCta() {
  return /* @__PURE__ */ jsxs("section", { id: "cta", className: "relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", style: {
      background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,114,246,0.16) 0%, transparent 70%)"
    } }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full", style: {
      background: "rgba(109,114,246,0.12)",
      filter: "blur(140px)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Limited beta" }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]", children: "Your next opportunity already exists. Be there first." }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-[#B6BED1] leading-relaxed", children: "Drop your WhatsApp number. Kairo introduces itself, builds your profile, sets your match threshold, and starts watching the market — in minutes." }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "https://wa.me/", className: "inline-flex items-center gap-2 rounded-full bg-[#6D72F6] hover:bg-[#818CF8] text-white px-8 py-4 text-base font-medium transition-colors", children: [
          "Message Kairo on WhatsApp ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#how", className: "text-[#B6BED1] hover:text-white transition-colors text-sm", children: "Read how it works" })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-[#7C8599]", children: "Join professionals using Kairos to move faster than the market." }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/[0.06] px-6 md:px-12 lg:px-24 py-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(SparkMark, {}),
          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold tracking-tight", children: "kairos." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-[#7C8599]", children: "Apply less. Land more." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-4", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#B6BED1]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-white transition-colors", children: "How it Works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-white transition-colors", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#demo", className: "hover:text-white transition-colors", children: "Demo" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-4", children: "Resources" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#B6BED1]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "GitHub" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Buildathon Brief" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "label-eyebrow mb-4", children: "Team" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#B6BED1]", children: [
          /* @__PURE__ */ jsx("li", { children: "Exitcode0" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@kairos.app", className: "hover:text-white transition-colors", children: "hello@kairos.app" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#7C8599]", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Kairos · Team Exitcode0"
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Powered by: MiniMax · Supabase · RenderCV · Baileys" })
    ] })
  ] }) });
}
function KairosLanding() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#050505] text-white antialiased", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(TrustTicker, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(Demo, {}),
      /* @__PURE__ */ jsx(SocialProof, {}),
      /* @__PURE__ */ jsx(Pricing, {}),
      /* @__PURE__ */ jsx(FinalCta, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  KairosLanding as component
};
