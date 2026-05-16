import Link from "next/link";
import { KairosMark } from "./logo";

const FOOTER_LINKS = [
  {
    heading: "Product",
    items: [
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Buildathon brief", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
  {
    heading: "Team",
    items: [
      { label: "Exitcode0", href: "#" },
      { label: "Contact", href: "mailto:hello@kairos.app" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer
      className="bg-white"
      style={{ marginTop: -40, paddingTop: 40 }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground"
              aria-label="Kairos home"
            >
              <KairosMark className="h-7 w-7" />
              <span className="text-h3 font-extrabold tracking-tight">
                Kairos
              </span>
            </Link>
            <p className="text-body-sm mt-4 max-w-xs text-muted-foreground">
              Apply less. Land more. A WhatsApp-first AI career agent built by
              Team Exitcode0 for the Cursor Colombo Buildathon 2026.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <p className="text-label">{column.heading}</p>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-caption">
            © {new Date().getFullYear()} Kairos · Team Exitcode0
          </p>
          <p className="text-caption">
            Powered by MiniMax · Supabase · RenderCV · Baileys
          </p>
        </div>
      </div>
    </footer>
  );
}
