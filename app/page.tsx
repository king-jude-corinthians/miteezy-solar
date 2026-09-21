import Image from "next/image";
import { ArrowRight, ArrowUpRight, BatteryCharging, Check, CircleHelp, ClipboardCheck, MapPin, MessageCircle, Phone, PlugZap, Settings2, ShieldCheck, PanelsTopLeft as SolarPanel, Sun, Wrench } from "lucide-react";
import { MobileNav } from "./ui";

const phoneDisplay = "0708 394 3472";
const phoneHref = "tel:+2347083943472";
const whatsappHref = "https://wa.me/2347083943472?text=Hello%20Miteezy%2C%20I%27d%20like%20a%20solar%20quote.";
const mapsHref = "https://maps.app.goo.gl/mcZaVs1zqdb87BEf6?g_st=iw";

const services = [
  { icon: SolarPanel, title: "Solar installation", text: "A solar setup planned around your space and the power you need each day." },
  { icon: BatteryCharging, title: "Solar equipment sales", text: "Explore panels, inverters, batteries and the components that make a system work." },
  { icon: Wrench, title: "Maintenance & support", text: "Get help assessing, maintaining or improving an existing solar system." },
];

const products = [
  { icon: SolarPanel, title: "Solar panels", text: "Turn available sunlight into usable power.", className: "product-blue" },
  { icon: PlugZap, title: "Inverters", text: "Keep your home or business powered with the right conversion setup.", className: "product-peach" },
  { icon: BatteryCharging, title: "Batteries", text: "Store energy for the hours you need it most.", className: "product-cream" },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#home" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Miteezy International Services Limited, back to top">
    <Image src="/miteezy-mark.png" width={68} height={57} alt="" className="brand-mark" />
    <span className="brand-text"><strong>MITEEZY</strong><small>INTERNATIONAL SERVICES LIMITED</small></span>
  </a>;
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""}`}>
    <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="home">
      <div className="top-strip"><div className="container top-strip-inner"><span><MapPin size={14} aria-hidden="true" /> Makurdi, Benue State</span><a href={phoneHref}><Phone size={14} aria-hidden="true" /> Call {phoneDisplay}</a></div></div>
      <div className="container nav-wrap"><Brand /><nav className="desktop-nav" aria-label="Main navigation"><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#process">How it works</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><div className="nav-actions"><a className="nav-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Miteezy on WhatsApp"><MessageCircle size={19} aria-hidden="true" /></a><a className="button button-primary nav-quote" href={whatsappHref} target="_blank" rel="noopener noreferrer">Get a solar quote <ArrowUpRight size={17} aria-hidden="true" /></a><MobileNav /></div></div>
    </header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-photo"><Image src="/hero-solar.webp" alt="Illustrative rooftop solar panel installation" fill priority sizes="(max-width: 900px) 100vw, 62vw" /></div><div className="hero-overlay" /><div className="container hero-content"><span className="hero-kicker"><Sun size={16} aria-hidden="true" /> SOLAR POWER, MADE PRACTICAL</span><h1 id="hero-title">Reliable solar power for <em>homes & businesses.</em></h1><p>From the right equipment to installation and ongoing support, Miteezy helps you plan a solar setup that fits your needs.</p><div className="hero-buttons"><a className="button button-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Get a solar quote <ArrowUpRight size={18} aria-hidden="true" /></a><a className="button button-light" href={phoneHref}><Phone size={17} aria-hidden="true" /> Call {phoneDisplay}</a></div><div className="hero-mini"><span><Check size={15} aria-hidden="true" /> Solar installation</span><span><Check size={15} aria-hidden="true" /> Equipment sales</span><span><Check size={15} aria-hidden="true" /> Maintenance</span></div></div><div className="photo-credit">Illustrative solar imagery</div></section>

      <section className="trust-bar" aria-label="Our focus"><div className="container trust-inner"><p>Practical solar solutions<br /><strong>for everyday power needs.</strong></p><div><Sun aria-hidden="true" /><span>Solar focused</span></div><div><Settings2 aria-hidden="true" /><span>Planned for your needs</span></div><div><MapPin aria-hidden="true" /><span>Based in Makurdi</span></div></div></section>

      <section className="section solutions" id="solutions"><div className="container"><div className="heading-row"><SectionHeading eyebrow="WHAT WE DO" title="A simpler path to dependable power." text="Whether you’re starting fresh or improving what you already have, let’s find a solar solution that makes sense for your space." /><a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Discuss your needs <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="service-grid">{services.map((item, i) => <article className="service-card" key={item.title}><div className={`service-icon service-icon-${i}`}><item.icon size={27} strokeWidth={1.8} aria-hidden="true" /></div><span className="card-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${item.title}`}>Ask about this service <ArrowRight size={17} aria-hidden="true" /></a></article>)}</div></div></section>

      <section className="section fit-section"><div className="container fit-grid"><div className="fit-art" aria-hidden="true"><div className="fit-sun" /><div className="fit-house"><div className="fit-roof"><div className="fit-panels" /></div><div className="fit-building"><div className="fit-door" /><div className="fit-window" /></div></div><div className="fit-card"><Sun size={19} /> POWER THAT FITS YOUR DAY</div></div><div className="fit-copy"><SectionHeading eyebrow="SOLAR SOLUTIONS" title="Built around how you use power." text="Every property has different energy needs. Tell us what you want to run and we’ll talk through the equipment and installation approach that suits you." /><div className="fit-list"><div><span><Check size={17} /></span><p><strong>For homes</strong>Plan for the essentials that keep daily life moving.</p></div><div><span><Check size={17} /></span><p><strong>For businesses</strong>Explore solar options for your operations and workspace.</p></div><div><span><Check size={17} /></span><p><strong>For existing systems</strong>Ask about upgrades, maintenance and support.</p></div></div><a className="button button-navy" href={whatsappHref} target="_blank" rel="noopener noreferrer">Find your solar solution <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>

      <section className="section products" id="products"><div className="container"><div className="heading-row"><SectionHeading eyebrow="FEATURED PRODUCTS" title="The essentials behind a good system." text="Product availability and specifications are confirmed when you enquire. We’ll help you discuss the components that fit your intended setup." /><a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Ask about equipment <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="product-grid">{products.map(item => <article className="product-card" key={item.title}><div className={`product-visual ${item.className}`}><item.icon size={102} strokeWidth={1.15} aria-hidden="true" /></div><div className="product-body"><div><h3>{item.title}</h3><p>{item.text}</p></div><a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${item.title}`}><ArrowUpRight size={20} aria-hidden="true" /></a></div></article>)}</div><p className="section-note"><CircleHelp size={16} aria-hidden="true" /> Specific brands, models, stock and prices are provided on enquiry.</p></div></section>

      <section className="section process" id="process"><div className="container"><SectionHeading eyebrow="HOW IT WORKS" title="From first conversation to a better setup." text="A clear path to understanding your needs and planning the next step." center /><div className="process-grid"><div className="process-line" aria-hidden="true" />{[{icon:MessageCircle,title:"Tell us what you need",text:"Share your location, power needs and what you’d like your system to do."},{icon:ClipboardCheck,title:"Review the options",text:"Discuss a suitable setup, equipment and installation requirements."},{icon:SolarPanel,title:"Plan installation",text:"Confirm the details and arrange the work that fits your project."},{icon:ShieldCheck,title:"Keep it running",text:"Ask about maintenance and support for your solar system."}].map((step,i)=><article className="process-step" key={step.title}><div className="process-icon"><step.icon size={25} strokeWidth={1.7} aria-hidden="true" /></div><span>STEP 0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

      <section className="section projects" id="projects"><div className="container project-grid"><div><SectionHeading eyebrow="PROJECTS" title="Every solar journey starts with a conversation." text="A gallery of completed Miteezy installations will be added when the client provides approved project photos and details." /><a className="button button-outline" href={whatsappHref} target="_blank" rel="noopener noreferrer">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="project-placeholder"><div className="project-icon"><SolarPanel size={52} strokeWidth={1.25} aria-hidden="true" /><Sun size={28} strokeWidth={1.5} aria-hidden="true" /></div><span>PROJECT GALLERY</span><strong>Coming soon</strong><p>Verified project photos and details will appear here.</p></div></div></section>

      <section className="section testimonial"><div className="container testimonial-inner"><span className="eyebrow"><span className="eyebrow-line" /> CUSTOMER STORIES</span><div className="testimonial-row"><h2>Real experiences<br />deserve a real voice.</h2><div className="testimonial-card"><span className="quote-mark">“</span><p>Customer testimonials will appear here once they are shared and approved for publication.</p><span className="testimonial-label">VERIFIED FEEDBACK COMING SOON</span></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S GET STARTED</span><h2>Ready to explore solar<br />for your space?</h2><p>Tell us what you need powered. We’ll help you start the right conversation.</p><div className="contact-actions"><a className="button button-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Get a solar quote</a><a className="button button-ghost" href={phoneHref}><Phone size={17} aria-hidden="true" /> Call {phoneDisplay}</a></div></div><div className="contact-info"><span>VISIT OR CONTACT US</span><div><MapPin size={20} aria-hidden="true" /><p>52 Abu King Shuluwa Road,<br />Dynasty Plaza, Akpehe,<br />Makurdi, Benue State.</p></div><div><Phone size={20} aria-hidden="true" /><p><a href={phoneHref}>{phoneDisplay}</a></p></div><a href={mapsHref} target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Brand inverse /><p>Solar installation, equipment supply and maintenance for homes and businesses.</p></div><div><h3>Explore</h3><a href="#solutions">Solar solutions</a><a href="#products">Products</a><a href="#process">How it works</a><a href="#projects">Projects</a></div><div><h3>Contact</h3><a href={phoneHref}>{phoneDisplay}</a><a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a><a href={mapsHref} target="_blank" rel="noopener noreferrer">Makurdi, Benue State</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Miteezy International Services Limited.</span><span>Solar power for everyday life.</span></div></footer>
    <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Miteezy on WhatsApp"><MessageCircle size={25} aria-hidden="true" /></a>
  </>;
}
