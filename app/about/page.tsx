import type { Metadata } from "next";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          description="A community-led creative home built in Lephalale, for Lephalale."
          eyebrow="Our story · Since 2013"
          image="/images/generated/hero-arts-transformation.webp"
          title="Art is how we build what lasts."
        />
        <section className="editorial section-pad">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>Born here. Built together. Growing forward.</h2>
          </div>
          <div className="editorial-copy">
            <p>Evergreen Arts Centre is a non-profit organisation founded by young activists and artists from Lephalale. Since 2013, it has become an umbrella for performers, filmmakers, writers, dancers, musicians, facilitators, and community builders.</p>
            <p>We believe creativity is practical infrastructure: it helps children learn, gives young people opportunity, creates safer dialogue, protects culture, and builds a local creative economy.</p>
          </div>
        </section>
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
