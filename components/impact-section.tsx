import { Reveal } from "./reveal";
import { SculptureScene } from "./sculpture-scene";

const stats = [
  ["2013", "Growing creativity since"],
  ["5+", "Schools reached"],
  ["200+", "Young learners engaged"],
  ["7", "Creative disciplines"],
] as const;

export function ImpactSection() {
  return (
    <section className="impact section-pad" id="impact">
      <div className="impact-world" />
      <div className="impact-copy">
        <Reveal>
          <p className="eyebrow">A living legacy</p>
          <h2>When artists grow, communities rise.</h2>
          <p className="impact-lead">
            Every production, workshop, lesson, and opportunity adds another
            branch to Lephalale&apos;s creative future.
          </p>
        </Reveal>
        <div className="stats">
          {stats.map(([value, label]) => (
            <Reveal className="stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <SculptureScene />
    </section>
  );
}
