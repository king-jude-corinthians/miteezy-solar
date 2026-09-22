import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBuilding, faGear, faHouse, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../ui";
import { PageHero, SiteFooter, SiteHeader, whatsapp } from "../site";

export const metadata: Metadata = { title: "Solar Solutions", description: "Explore residential, commercial, installation and maintenance solar solutions from Miteezy in Makurdi." };

const solutions = [
  { title: "Residential Solar", copy: "Plan a solar system around the appliances and daily power needs that matter in your home.", image: "/images/solution-residential.webp", icon: faHouse },
  { title: "Commercial Solar", copy: "Discuss solar power for offices, shops and other business spaces with different energy demands.", image: "/images/solution-commercial.webp", icon: faBuilding },
  { title: "Installation Services", copy: "Get guidance on the equipment, site requirements and installation approach for your space.", image: "/images/solution-installation.webp", icon: faScrewdriverWrench },
  { title: "Maintenance & Repairs", copy: "Ask about assessing, maintaining or improving an existing solar system.", image: "/images/solution-maintenance.webp", icon: faGear },
];

export default function SolarSolutionsPage() {
  return <><Reveal /><a className="skip-link" href="#main">Skip to content</a><SiteHeader current="/solar-solutions" /><main id="main"><PageHero eyebrow="SOLAR SOLUTIONS" title="Power planned around your needs" copy="Start with what you need to power, then build the right conversation around your space." image="/images/solution-commercial.webp" /><section className="section"><div className="container"><div className="section-head"><div><h2>Find the right fit</h2><p>Every home and business has its own power needs. Choose a starting point and talk to Miteezy about the next step.</p></div></div><div className="detail-grid">{solutions.map((solution, index) => <article className="detail-card" key={solution.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}><div className="detail-image"><Image src={solution.image} alt={solution.title} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div><FontAwesomeIcon className="detail-icon" icon={solution.icon} /><h2>{solution.title}</h2><p>{solution.copy}</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Discuss this solution <FontAwesomeIcon icon={faArrowRight} /></a></div></article>)}</div></div></section><section className="quote-band"><div className="container"><div><p>READY TO TALK SOLAR?</p><h2>Tell us what you need powered.</h2></div><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer">Get a Solar Quote <FontAwesomeIcon icon={faArrowRight} /></a></div></section></main><SiteFooter /></>;
}
