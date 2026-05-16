import Link from "next/link";
import { KairosMark } from "./logo";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-white shadow-[0_4px_24px_-4px_rgba(17,24,39,0.12)]">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground"
          aria-label="Kairos home"
        >
          <KairosMark className="h-9 w-9" />
          <span className="text-h2 font-extrabold tracking-tight">Kairos</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2.5 text-body font-semibold text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#cta"
            className="btn btn-ghost hidden px-4 py-2.5 text-body font-semibold sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="#cta"
            className="btn btn-primary px-5 py-2.5 text-body font-semibold shadow-none"
          >
            Get early access
          </Link>
        </div>
      </div>
    </header>
  );
}
