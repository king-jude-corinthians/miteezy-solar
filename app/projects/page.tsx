import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../ui";
import { PageHero, SiteFooter, SiteHeader, whatsapp } from "../site";

export const metadata: Metadata = { title: "Solar Projects", description: "Browse solar setup inspiration and discuss a project with Miteezy International Services Limited." };

const projects = [
  { title: "Residential Solar", image: "/images/project-home.webp", copy: "A solar setup for a home with everyday power needs." },
  { title: "Commercial Rooftop", image: "/images/project-business.webp", copy: "A rooftop approach for business premises and workspaces." },
  { title: "Solar + Battery Backup", image: "/images/project-backup.webp", copy: "A system that combines solar collection with stored energy." },
  { title: "Solar Array", image: "/images/project-array.webp", copy: "A larger array for spaces with wider power requirements." },
];

export default function ProjectsPage() {
  return <><Reveal /><a className="skip-link" href="#main">Skip to content</a><SiteHeader current="/projects" /><main id="main"><PageHero eyebrow="SOLAR PROJECTS" title="A look at solar possibilities" copy="Explore the kinds of solar setups you can discuss with Miteezy for your own space." image="/images/project-array.webp" /><section className="section"><div className="container"><div className="section-head"><div><h2>Solar setup gallery</h2><p>Each project begins by understanding your location, the equipment you use and the power you need.</p></div></div><div className="project-grid project-grid-large">{projects.map((project, index) => <article className="project-card" key={project.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="project-body"><h3>{project.title}</h3><p>{project.copy}</p></div></article>)}</div></div></section><section className="quote-band"><div className="container"><div><p>HAVE A PROJECT IN MIND?</p><h2>Let’s talk about your power needs.</h2></div><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer">Discuss Your Project <FontAwesomeIcon icon={faArrowRight} /></a></div></section></main><SiteFooter /></>;
}
