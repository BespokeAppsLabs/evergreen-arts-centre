import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Get involved" };

const pathways = [
  ["Artists", "Audition, train, perform, write, direct, film, or share your craft."],
  ["Schools", "Bring weekly creative learning and showcases to your learners."],
  ["Partners", "Fund, host, mentor, supply, or collaborate on programmes."],
  ["Community", "Attend, volunteer, share opportunities, and champion local art."],
];

export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero description="Artists, schools, partners, volunteers, and supporters all have a place in this creative world." eyebrow="Get involved" image="/images/generated/programmes/creative-futures.webp" title="Your voice belongs on this stage." />
        <section className="pathways section-pad">
          {pathways.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><Link className="text-link" href="/contact">Start here <ArrowIcon /></Link></article>)}
        </section>
      </main>
      <Footer />
    </>
  );
}
