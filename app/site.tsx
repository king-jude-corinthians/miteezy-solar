import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MobileNav } from "./ui";

export const phone = "07083943472";
export const phoneHref = "tel:+2347083943472";
export const whatsapp = "https://wa.me/2347083943472?text=Hello%20Miteezy%2C%20I%27d%20like%20a%20solar%20quote.";
export const maps = "https://maps.app.goo.gl/mcZaVs1zqdb87BEf6?g_st=iw";

const navigation = [
  ["Solar Solutions", "/solar-solutions"], ["Products", "/products"],
  ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"],
];

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link className={`brand ${footer ? "brand-footer" : ""}`} href="/" aria-label="Miteezy International Services Limited, home">
    <Image src="/miteezy-mark.png" alt="" width={73} height={57} priority={!footer} />
    <span><strong>MITEEZY INTERNATIONAL</strong><small>SERVICES LIMITED</small></span>
  </Link>;
}

export function SiteHeader({ current }: { current?: string }) {
  return <header className="header">
    <div className="topbar"><div className="container topbar-inner"><span><FontAwesomeIcon icon={faLocationDot} /> 52 Abu King Shuluwa Road, Dynasty Plaza, Akpehe, Makurdi, Benue State</span><a href={phoneHref}><FontAwesomeIcon icon={faPhone} /> Call or WhatsApp: {phone}</a></div></div>
    <div className="container nav-row"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, href]) => <Link className={current === href ? "active" : ""} href={href} key={href}>{label}</Link>)}</nav><a className="button button-orange nav-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Get a Quote <FontAwesomeIcon icon={faArrowRight} /></a><MobileNav current={current} /></div>
  </header>;
}

export function SiteFooter() {
  return <><footer className="footer"><div className="container footer-columns"><div className="footer-intro"><Brand footer /><p>Solar installation, equipment supply and maintenance for homes and businesses in Makurdi and beyond.</p></div><div><h3>Quick Links</h3>{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div><div><h3>Our Services</h3><Link href="/solar-solutions">Residential Solar</Link><Link href="/solar-solutions">Commercial Solar</Link><Link href="/solar-solutions">Installation</Link><Link href="/solar-solutions">Maintenance &amp; Repairs</Link><Link href="/products">Solar Products</Link></div><div><h3>Contact Us</h3><a className="footer-contact" href={maps} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLocationDot} /> <span>52 Abu King Shuluwa Road,<br />Dynasty Plaza, Akpehe,<br />Makurdi, Benue State</span></a><a className="footer-contact" href={phoneHref}><FontAwesomeIcon icon={faPhone} /> {phone}</a><a className="footer-contact" href={whatsapp} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp</a></div></div><div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Miteezy International Services Limited. All rights reserved.</span><span>RC: 7287414</span></div></div></footer><a className="whatsapp-float" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Miteezy on WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a></>;
}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="page-hero"><Image src={image} alt="Solar power system" fill priority sizes="100vw" /><div className="page-hero-shade" /><div className="container page-hero-content"><p>{eyebrow}</p><h1>{title}</h1><span>{copy}</span></div></section>;
}
