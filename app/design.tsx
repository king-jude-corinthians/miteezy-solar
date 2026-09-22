import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight, faBatteryFull, faBolt, faBuilding, faChartLine,
  faClipboardCheck, faGear, faHeadset, faHouse, faLeaf,
  faSeedling, faShieldHalved, faSolarPanel,
  faScrewdriverWrench, faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Recommendation, Reveal } from "./ui";
import { phone, phoneHref, SiteFooter, SiteHeader, whatsapp } from "./site";

const solutions = [
  { title: "Residential Solar", image: "/images/solution-residential.webp", icon: faHouse, copy: "Solar options planned around everyday power needs at home." },
  { title: "Commercial Solar", image: "/images/solution-commercial.webp", icon: faBuilding, copy: "Explore solar power for offices, shops and other workspaces." },
  { title: "Installation Services", image: "/images/solution-installation.webp", icon: faScrewdriverWrench, copy: "Discuss the equipment and installation your space needs." },
  { title: "Maintenance & Repairs", image: "/images/solution-maintenance.webp", icon: faGear, copy: "Get help assessing and maintaining an existing system." },
];

const products = [
  { title: "Solar Panels", image: "/images/product-panels.webp" },
  { title: "Inverters", image: "/images/product-inverter.webp" },
  { title: "Lithium Batteries", image: "/images/product-battery.webp" },
  { title: "Charge Controllers", image: "/images/product-controller.webp" },
  { title: "Solar Accessories", image: "/images/product-accessories.webp" },
];

const gallery = [
  { title: "Residential solar", image: "/images/project-home.webp" },
  { title: "Commercial rooftop", image: "/images/project-business.webp" },
  { title: "Solar + battery backup", image: "/images/project-backup.webp" },
  { title: "Solar array", image: "/images/project-array.webp" },
];

function Heading({ title, subtitle, action, href }: { title: string; subtitle: string; action?: string; href?: string }) {
  return <div className="section-head"><div><h2>{title}</h2><p>{subtitle}</p></div>{action && href && <a className="section-action" href={href}>{action} <FontAwesomeIcon icon={faArrowRight} /></a>}</div>;
}

export default function Home() {
  return <>
    <Reveal />
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader current="/" />

    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><Image className="hero-image" src="/images/hero-home.webp" alt="Solar-powered home" fill priority sizes="100vw" /><div className="hero-wash" /><div className="hero-blur" /><div className="container hero-inner"><div className="hero-copy" data-reveal><p className="kicker">CLEAN ENERGY, BRIGHTER TOMORROW.</p><h1 id="hero-title">Reliable Solar Power<br />for <span>Homes &amp;<br />Businesses</span></h1><p className="hero-lede">We design, supply, install and maintain solar energy systems that give you dependable, affordable and clean power.</p><div className="hero-features"><span><FontAwesomeIcon icon={faSolarPanel} /> Solar Installation</span><span><FontAwesomeIcon icon={faBatteryFull} /> Solar Products</span><span><FontAwesomeIcon icon={faShieldHalved} /> Maintenance &amp; Support</span></div><div className="hero-actions"><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUsers} /> Get a Solar Quote <FontAwesomeIcon icon={faArrowRight} /></a><a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp</a></div></div><div className="hero-floating" data-reveal><span><FontAwesomeIcon icon={faBolt} /></span><strong>Powering<br />Homes &amp; Businesses<br />in Makurdi and beyond</strong></div></div></section>

      <section className="benefits"><div className="container benefits-grid">{[
        { icon: faLeaf, title: "Lower Electricity Bills", text: "Save more, do more", tone: "green" },
        { icon: faShieldHalved, title: "Reliable Power Supply", text: "Less downtime, more productivity", tone: "blue" },
        { icon: faSeedling, title: "Clean & Renewable", text: "A cleaner, greener future", tone: "green" },
        { icon: faUsers, title: "Expert Support", text: "From design to after-sales", tone: "blue" },
      ].map(item => <div className="benefit" key={item.title} data-reveal><span className={`benefit-icon ${item.tone}`}><FontAwesomeIcon icon={item.icon} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></section>

      <section className="section section-tint" id="solutions"><div className="container"><Heading title="Our Solar Solutions" subtitle="Tailored solar solutions for homes, businesses and industries." action="View All Solutions" href="/solar-solutions" /><div className="solutions-grid">{solutions.map((item, i) => <article className="solution-card" key={item.title} data-reveal style={{transitionDelay:`${i*80}ms`}}><div className="solution-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1020px) 50vw, 25vw" /></div><div className="solution-body"><FontAwesomeIcon className="solution-icon" icon={item.icon} /><h3>{item.title}</h3><p>{item.copy}</p><a href="/solar-solutions">Learn More <FontAwesomeIcon icon={faArrowRight} /></a></div></article>)}</div></div></section>

      <section className="section" id="products"><div className="container"><Heading title="Featured Solar Products" subtitle="Explore the components that power a dependable solar system." action="View All Products" href="/products" /><div className="products-grid">{products.map((item,i) => <article className="product-card" key={item.title} data-reveal style={{transitionDelay:`${i*65}ms`}}><div className="product-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 20vw" /></div><div className="product-body"><h3>{item.title}</h3><a href="/products">Request Price <FontAwesomeIcon icon={faArrowRight} /></a></div></article>)}</div><p className="products-note">Brands, models, stock and prices are confirmed on enquiry.</p></div></section>

      <section className="section process-section" id="about"><div className="container process-layout"><div className="recommend-card" data-reveal><div className="recommend-blur" /><h2>Find the Right<br />Solar Solution</h2><p>Answer a few questions and we’ll help you start the conversation about a system for your needs.</p><Recommendation /></div><div className="process-content" data-reveal><Heading title="Our Installation Process" subtitle="Simple. Transparent. Reliable." /><div className="steps">{[
        { icon: faClipboardCheck, title: "1 Consultation", text: "We understand your needs" },
        { icon: faChartLine, title: "2 System Design", text: "A plan for your space" },
        { icon: faSolarPanel, title: "3 Installation", text: "Professional setup" },
        { icon: faHeadset, title: "4 Support", text: "Maintenance and guidance" },
      ].map(item => <div className="step" key={item.title}><span><FontAwesomeIcon icon={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></div></section>

      <section className="section section-tint" id="projects"><div className="container"><Heading title="Solar Project Gallery" subtitle="Explore the types of solar setups Miteezy can discuss with you." action="View All Projects" href="/projects" /><div className="project-grid">{gallery.map((item,i) => <article className="project-card" key={item.title} data-reveal style={{transitionDelay:`${i*75}ms`}}><div className="project-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1020px) 50vw, 25vw" /></div><div className="project-body"><h3>{item.title}</h3><p>Solar power setup</p></div></article>)}</div></div></section>

      <section className="section testimonials" id="testimonials"><div className="container"><Heading title="What Our Clients Say" subtitle="Feedback from customers who chose Miteezy for their solar needs." /><div className="testimonial-grid">{[
        { quote: "The team explained the options clearly and helped us get started with a system that suits our home.", type: "Home solar customer" },
        { quote: "Professional service and a smooth process from our first conversation through to the next steps.", type: "Business solar customer" },
        { quote: "Helpful guidance, clear communication and a solar solution we can feel confident about.", type: "Solar service customer" },
      ].map((item,i) => <article className="testimonial-card" key={item.type} data-reveal style={{transitionDelay:`${i*75}ms`}}><span className="testimonial-mark">“</span><p>{item.quote}</p><div className="testimonial-person"><span className="testimonial-avatar"><FontAwesomeIcon icon={faUsers} /></span><div><strong>{item.type}</strong><small>Customer feedback</small></div></div></article>)}</div></div></section>

      <section className="closing" id="contact"><Image src="/images/cta-worker.webp" alt="Solar panels and technician" fill sizes="100vw" /><div className="closing-shade" /><div className="container closing-inner" data-reveal><h2>Ready to Power Your World?</h2><p>Get a custom solar conversation started for your home or business today.</p><div><a className="button button-orange" href={whatsapp} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUsers} /> Get a Solar Quote <FontAwesomeIcon icon={faArrowRight} /></a><a className="button button-white" href={phoneHref}><FontAwesomeIcon icon={faWhatsapp} /> Call/WhatsApp: {phone}</a></div></div></section>
    </main>

    <SiteFooter />
  </>;
}
