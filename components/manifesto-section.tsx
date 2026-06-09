import Image from "next/image";
import { Reveal } from "./reveal";

export function ManifestoSection() {
  return (
    <section className="manifesto section-pad" id="about">
      <div className="manifesto-orbit" aria-hidden="true">
        <Image
          alt=""
          height={540}
          src="/images/generated/evergreen-sculpture-transparent.webp"
          width={432}
        />
      </div>
      <Reveal className="manifesto-copy">
        <p className="eyebrow">Our creative belief</p>
        <h2>
          Art is not decoration.
          <br />
          <em>It is transformation.</em>
        </h2>
        <p>
          Born in Lephalale and built by its artists, Evergreen Arts Centre
          creates stages, screens, classrooms, and safe spaces where people can
          find their voice—and use it to move a community forward.
        </p>
      </Reveal>
      <div className="manifesto-note">
        <span>Leaving an</span>
        <strong>Everlasting Legacy</strong>
      </div>
    </section>
  );
}
