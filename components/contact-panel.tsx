import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export function ContactPanel() {
  return (
    <section className="contact-panel section-pad">
      <div>
        <p className="eyebrow">Create with us</p>
        <h2>Bring your voice to the next act.</h2>
      </div>
      <div className="contact-panel-actions">
        <Link className="button button-light" href="/contact">
          Start a conversation <ArrowIcon />
        </Link>
        <Link className="text-link" href="/get-involved">
          Ways to get involved <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
