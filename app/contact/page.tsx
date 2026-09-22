import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Recommendation, Reveal } from "../ui";
import { maps, PageHero, phone, phoneHref, SiteFooter, SiteHeader, whatsapp } from "../site";

export const metadata: Metadata = { title: "Contact Miteezy", description: "Call or WhatsApp Miteezy International Services Limited for solar installation, products and support in Makurdi." };

export default function ContactPage() {
  return <><Reveal /><a className="skip-link" href="#main">Skip to content</a><SiteHeader current="/contact" /><main id="main"><PageHero eyebrow="CONTACT MITEEZY" title="Let’s talk about your solar needs" copy="Call, send a WhatsApp message or visit Miteezy in Makurdi to start the conversation." image="/images/cta-worker.webp" /><section className="section"><div className="container contact-layout"><div className="contact-card" data-reveal><FontAwesomeIcon icon={faPhone} /><h2>Call Miteezy</h2><p>Speak to the team about your home, business or solar equipment needs.</p><a href={phoneHref}>{phone}</a></div><div className="contact-card" data-reveal><FontAwesomeIcon icon={faWhatsapp} /><h2>Chat on WhatsApp</h2><p>Share a few details about the system you have in mind and get the conversation started.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp <FontAwesomeIcon icon={faArrowRight} /></a></div><div className="contact-card" data-reveal><FontAwesomeIcon icon={faLocationDot} /><h2>Visit Miteezy</h2><p>52 Abu King Shuluwa Road, Dynasty Plaza, Akpehe, Makurdi, Benue State.</p><a href={maps} target="_blank" rel="noopener noreferrer">Open in Google Maps <FontAwesomeIcon icon={faArrowRight} /></a></div></div></section><section className="section section-tint"><div className="container recommendation-wide"><div><p className="kicker">GET A QUICK START</p><h2>Tell us what you need.</h2><p>Choose your type of space and the help you’re looking for. Your choices will be included in a WhatsApp message to Miteezy.</p></div><Recommendation /></div></section></main><SiteFooter /></>;
}
