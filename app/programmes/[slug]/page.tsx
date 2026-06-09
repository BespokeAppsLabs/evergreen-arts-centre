import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/contact-panel";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { getProgramme, programmes } from "@/lib/content";

type ProgrammePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programmes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProgrammePageProps): Promise<Metadata> {
  const programme = getProgramme((await params).slug);
  return programme ? { title: programme.name, description: programme.copy } : {};
}

export default async function ProgrammePage({ params }: ProgrammePageProps) {
  const programme = getProgramme((await params).slug);
  if (!programme) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          description={programme.copy}
          eyebrow={programme.eyebrow}
          image={programme.image}
          title={programme.name}
        />
        <section className="programme-detail section-pad">
          <div>
            <p className="eyebrow">Why it matters</p>
            <h2>{programme.statement}</h2>
          </div>
          <div className="programme-detail-body">
            <p>{programme.body}</p>
            <ol>
              {programme.activities.map((activity, index) => (
                <li key={activity}>
                  <span>0{index + 1}</span>
                  {activity}
                </li>
              ))}
            </ol>
          </div>
          <div className="programme-detail-image">
            <Image alt="" fill sizes="100vw" src={programme.image} />
          </div>
        </section>
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
