import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBatteryFull, faBolt, faSliders } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../ui";
import { PageHero, SiteFooter, SiteHeader, whatsapp } from "../site";

export const metadata: Metadata = { title: "Solar Products", description: "Ask Miteezy about solar panels, inverters, lithium batteries, charge controllers and accessories." };

const products = [
  { title: "Solar Panels", image: "/images/product-panels.webp", icon: faBolt, copy: "Capture sunlight and make it available for your solar system." },
  { title: "Inverters", image: "/images/product-inverter.webp", icon: faSliders, copy: "Convert and manage power for the equipment in your setup." },
  { title: "Lithium Batteries", image: "/images/product-battery.webp", icon: faBatteryFull, copy: "Store energy for the hours when you need it." },
  { title: "Charge Controllers", image: "/images/product-controller.webp", icon: faSliders, copy: "Manage the flow of energy between panels and batteries." },
  { title: "Solar Accessories", image: "/images/product-accessories.webp", icon: faBolt, copy: "The supporting components that bring a solar system together." },
];

export default function ProductsPage() {
  return <><Reveal /><a className="skip-link" href="#main">Skip to content</a><SiteHeader current="/products" /><main id="main"><PageHero eyebrow="SOLAR PRODUCTS" title="The parts behind dependable power" copy="Ask about the right components for the solar system you have in mind." image="/images/product-accessories.webp" /><section className="section section-tint"><div className="container"><div className="section-head"><div><h2>Featured solar products</h2><p>Product availability, brands, specifications and prices are confirmed when you enquire.</p></div></div><div className="catalog-grid">{products.map((product, index) => <article className="catalog-card" key={product.title} data-reveal style={{ transitionDelay: `${index * 65}ms` }}><div className="catalog-image"><Image src={product.image} alt={product.title} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 20vw" /></div><div><FontAwesomeIcon icon={product.icon} /><h2>{product.title}</h2><p>{product.copy}</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Request Price <FontAwesomeIcon icon={faArrowRight} /></a></div></article>)}</div></div></section><section className="quote-band"><div className="container"><div><p>NOT SURE WHAT YOU NEED?</p><h2>Start with the equipment you want to power.</h2></div><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer">Ask About Products <FontAwesomeIcon icon={faArrowRight} /></a></div></section></main><SiteFooter /></>;
}
