import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { programmes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore Evergreen Arts Centre programmes across film, theatre, schools, and creative entrepreneurship.",
};

export default function ProgrammesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          description="Four connected pathways. One purpose: giving local talent somewhere to begin, belong, and build."
          eyebrow="Our creative world"
          image="/images/generated/abstract-parallax-world.webp"
          title="Every discipline becomes a doorway."
        />
        <section className="route-programmes section-pad">
          {programmes.map((programme) => (
            <article className="route-programme" key={programme.slug}>
              <div className="route-programme-image">
                <Image alt="" fill sizes="(max-width: 800px) 100vw, 50vw" src={programme.image} />
              </div>
              <div className="route-programme-copy">
                <span>{programme.number}</span>
                <p className="eyebrow">{programme.eyebrow}</p>
                <h2>{programme.name}</h2>
                <p>{programme.body}</p>
                <Link className="text-link" href={`/programmes/${programme.slug}`}>
                  Enter programme <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </section>
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
