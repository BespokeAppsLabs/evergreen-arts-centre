import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/lib/content";
import { ArrowIcon } from "./arrow-icon";
import { Reveal } from "./reveal";

export function ProgrammesSection() {
  return (
    <section className="programmes section-pad" id="programmes">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">Our programmes</p>
          <h2>Every discipline becomes a doorway.</h2>
        </Reveal>
        <p>
          From first brushstroke to final curtain, our programmes give talent
          somewhere to begin—and somewhere to go.
        </p>
      </div>
      <div className="programme-grid">
        {programmes.map((programme) => (
          <Reveal className={`programme-card ${programme.tone}`} key={programme.number}>
            <Image
              alt=""
              className="programme-image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
              src={programme.image}
            />
            <span>{programme.number}</span>
            <div>
              <h3>{programme.name}</h3>
              <p>{programme.copy}</p>
            </div>
            <Link aria-label={`Explore ${programme.name}`} className="programme-arrow" href={`/programmes/${programme.slug}`}>
              <ArrowIcon />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
