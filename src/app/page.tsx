import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { DemoMoment } from "@/components/demo-moment";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/section-blend";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 overflow-x-hidden bg-white">
        <Hero />

        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal>
          <Features />
        </ScrollReveal>

        <ScrollReveal>
          <DemoMoment />
        </ScrollReveal>

        <ScrollReveal>
          <CtaBanner />
        </ScrollReveal>

        <Footer />
      </main>
    </>
  );
}
