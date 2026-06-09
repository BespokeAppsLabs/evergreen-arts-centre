import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export function Hero() {
  return (
    <section className="hero">
      <Image
        alt=""
        className="hero-image"
        fill
        loading="eager"
        priority
        sizes="100vw"
        src="/images/generated/hero-arts-transformation.webp"
      />
      <div className="hero-wash" />
      <div className="hero-grain" />
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">Lephalale · Limpopo · Since 2013</p>
        <h1>
          <span>Arts that</span>
          <em>transform</em>
          <span>Lephalale.</span>
        </h1>
        <p className="hero-intro">
          We grow local talent, tell local stories, and turn creative energy
          into opportunity, belonging, and lasting change.
        </p>
        <div className="hero-actions">
          <Link className="button button-light" href="#programmes">
            Explore our world <ArrowIcon />
          </Link>
          <Link className="text-link" href="/get-involved">
            Create with us <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">
        <span>01</span>
        <i />
        <span>Arts in motion</span>
      </div>
      <a className="scroll-cue" href="#about">
        Scroll to discover <span />
      </a>
    </section>
  );
}
