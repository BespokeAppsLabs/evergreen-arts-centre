import type { Metadata } from "next";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Impact" };

const outcomes = [["200+", "Children reached through creative education"], ["30+", "Young artists supported through training and platforms"], ["5+", "Schools and crèches participating"], ["10+", "Short-term creative jobs targeted"]];

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero description="Every number represents a voice, a stage, a skill, or a new possibility." eyebrow="Our impact" image="/images/generated/abstract-parallax-world.webp" title="Creativity becomes community power." />
        <section className="outcomes section-pad">
          {outcomes.map(([value, label]) => <article key={value}><strong>{value}</strong><p>{label}</p></article>)}
        </section>
        <section className="editorial section-pad impact-editorial">
          <div><p className="eyebrow">How change grows</p><h2>Platforms become confidence. Confidence becomes opportunity.</h2></div>
          <div className="editorial-copy"><p>Our work connects artistic practice to education, employment, health awareness, social cohesion, and pride in place.</p><p>We document participation, productions, workshops, school activity, jobs, and community feedback so impact can be understood, improved, and sustained.</p></div>
        </section>
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
