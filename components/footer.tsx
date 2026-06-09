import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export function Footer() {
  return (
    <footer className="footer section-pad" id="join">
      <div className="footer-world" />
      <div className="footer-top">
        <p className="eyebrow">Enter the creative world</p>
        <h2>
          Your voice belongs
          <br />
          <em>on this stage.</em>
        </h2>
        <div className="footer-actions">
          <Link className="button button-light" href="/contact">
            Start a conversation <ArrowIcon />
          </Link>
          <Link className="text-link" href="tel:+27735277147">
            073 527 7147
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <Image
          alt="Evergreen Arts Centre"
          height={196}
          src="/brand/evergreen-arts-logo-footer.webp"
          width={180}
        />
        <p>Leaving an Everlasting Legacy · Lephalale, Limpopo</p>
        <p>© {new Date().getFullYear()} Evergreen Arts Centre</p>
      </div>
    </footer>
  );
}
