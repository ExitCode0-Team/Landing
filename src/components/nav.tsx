import Link from "next/link";
import { KairosMark } from "./logo";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground"
          aria-label="Kairos home"
        >
          <KairosMark className="h-7 w-7" />
          <span className="text-h3 font-extrabold tracking-tight">Kairos</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#cta"
            className="btn btn-ghost hidden sm:inline-flex"
          >
            Sign in
          </Link>
          <Link href="#cta" className="btn btn-primary">
            Get early access
          </Link>
        </div>
      </div>
    </header>
  );
}
