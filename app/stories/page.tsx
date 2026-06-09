import type { Metadata } from "next";
import Image from "next/image";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { programmes } from "@/lib/content";

export const metadata: Metadata = { title: "Stories" };

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero description="Stories from stages, screens, classrooms, and the people creating Lephalale's next chapter." eyebrow="Stories and productions" image="/images/generated/programmes/script-to-screen.webp" title="Local stories deserve a world stage." />
        <section className="story-grid section-pad">
          {programmes.slice(0, 3).map((programme) => (
            <article key={programme.slug}>
              <div><Image alt="" fill sizes="(max-width: 800px) 100vw, 33vw" src={programme.image} /></div>
              <p className="eyebrow">{programme.eyebrow}</p>
              <h2>{programme.statement}</h2>
              <p>{programme.copy}</p>
            </article>
          ))}
        </section>
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
