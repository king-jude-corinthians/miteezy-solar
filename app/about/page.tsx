import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClipboardCheck, faHeadset, faSolarPanel, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Recommendation, Reveal } from "../ui";
import { PageHero, SiteFooter, SiteHeader, whatsapp } from "../site";

export const metadata: Metadata = { title: "About Miteezy", description: "Learn about Miteezy International Services Limited and its solar services in Makurdi, Benue State." };

const steps = [
  { title: "Start with a conversation", text: "Tell Miteezy about your space and the appliances or equipment you need to power.", icon: faUsers },
  { title: "Review the system", text: "Discuss a suitable direction for the equipment and installation requirements.", icon: faClipboardCheck },
  { title: "Plan installation", text: "Work through the next steps for setting up the solar system at your location.", icon: faSolarPanel },
  { title: "Keep it working", text: "Ask about maintenance, repairs and guidance for an existing system.", icon: faHeadset },
];

export default function AboutPage() {
  return <><Reveal /><a className="skip-link" href="#main">Skip to content</a><SiteHeader current="/about" /><main id="main"><PageHero eyebrow="ABOUT MITEEZY" title="Solar power made practical" copy="Miteezy International Services Limited helps homes and businesses start a conversation about solar." image="/images/solution-installation.webp" /><section className="section"><div className="container about-layout"><div data-reveal><p className="kicker">A CLEAR START</p><h2>From solar products to installation and support.</h2><p>Miteezy provides solar installation, equipment supply and maintenance for homes and businesses in Makurdi and beyond.</p><p>Start with what you want to power and the team can help you discuss the right next step for your space.</p><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer">Talk to Miteezy <FontAwesomeIcon icon={faArrowRight} /></a></div><div className="about-image" data-reveal><Image src="/images/solution-maintenance.webp" alt="Solar system maintenance" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section><section className="section section-tint"><div className="container"><div className="section-head"><div><h2>How the conversation works</h2><p>Simple steps to start planning a solar solution for your needs.</p></div></div><div className="about-steps">{steps.map((step, index) => <article key={step.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}><span><FontAwesomeIcon icon={step.icon} /></span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section><section className="section"><div className="container recommendation-wide"><div><p className="kicker">FIND YOUR STARTING POINT</p><h2>Looking for a quick recommendation?</h2><p>Choose your space and the kind of help you need, then continue the conversation on WhatsApp.</p></div><Recommendation /></div></section></main><SiteFooter /></>;
}
