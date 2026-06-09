import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";
import { Reveal } from "./reveal";

export function StoriesSection() {
  return (
    <section className="stories section-pad" id="stories">
      <div className="story-image">
        <Image
          alt="A cinematic world representing Evergreen Arts Centre disciplines"
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          src="/images/generated/hero-arts-transformation.webp"
        />
      </div>
      <Reveal className="story-copy">
        <p className="eyebrow">The next act</p>
        <span className="story-kicker">Script to Screen & Stage</span>
        <h2>Local stories deserve a world stage.</h2>
        <p>
          Our next chapter brings Lephalale writers, actors, directors,
          musicians, and makers together to produce original films and live
          performances rooted in this place.
        </p>
        <Link className="button button-dark" href="/stories">
          Follow the journey <ArrowIcon />
        </Link>
      </Reveal>
    </section>
  );
}
