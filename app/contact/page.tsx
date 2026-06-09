import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero description="Tell us what you want to create, support, learn, or build together." eyebrow="Contact Evergreen Arts Centre" image="/images/generated/abstract-parallax-world.webp" title="Start a conversation." />
        <section className="contact-route section-pad">
          <div>
            <p className="eyebrow">Direct contact</p>
            <h2>Lephalale, Limpopo</h2>
            <Link href="tel:+27735277147">073 527 7147</Link>
            <Link href="mailto:bafedile.masasa@gmail.com">bafedile.masasa@gmail.com</Link>
          </div>
          <form action="mailto:bafedile.masasa@gmail.com" method="post" encType="text/plain">
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" required type="email" /></label>
            <label>I want to
              <select name="interest" defaultValue="create">
                <option value="create">Create with Evergreen</option>
                <option value="school">Bring arts to a school</option>
                <option value="partner">Partner or sponsor</option>
                <option value="volunteer">Volunteer or support</option>
              </select>
            </label>
            <label>Message<textarea name="message" required rows={5} /></label>
            <button className="button button-dark" type="submit">Send enquiry</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
