import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ImpactSection } from "@/components/impact-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { ProgrammesSection } from "@/components/programmes-section";
import { SiteHeader } from "@/components/site-header";
import { StoriesSection } from "@/components/stories-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ManifestoSection />
        <ProgrammesSection />
        <ImpactSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}
