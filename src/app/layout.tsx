import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kairos — Apply less. Land more.",
  description:
    "Kairos is a WhatsApp-first AI career agent that finds, scores, and applies to jobs for you. Get instant alerts, tailored CVs, and a realtime dashboard.",
  metadataBase: new URL("https://kairos.app"),
  openGraph: {
    title: "Kairos — Apply less. Land more.",
    description:
      "WhatsApp-first AI career agent. Instant alerts, tailored CVs, realtime tracking.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
