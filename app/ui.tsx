"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const links = [["Solar Solutions", "/solar-solutions"], ["Products", "/products"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];

export function MobileNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <div className="mobile-nav-wrap"><button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faXmark : faBars} /></button><nav id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">{links.map(([label, href]) => <a className={current === href ? "active" : ""} key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-menu-cta" href="https://wa.me/2347083943472?text=Hello%20Miteezy%2C%20I%27d%20like%20a%20solar%20quote." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get a Solar Quote <FontAwesomeIcon icon={faArrowRight} /></a></nav></div>;
}

export function Reveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: "0px 0px 40px 0px" });
    elements.forEach(element => observer.observe(element));
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);
  return null;
}

export function Recommendation() {
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState("Home");
  const [need, setNeed] = useState("New solar system");
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const triggerButton = trigger.current;
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = [...dialog.current.querySelectorAll<HTMLElement>("button, select, a[href]")];
      if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1)?.focus(); }
      if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0]?.focus(); }
    };
    window.addEventListener("keydown", close);
    return () => { window.removeEventListener("keydown", close); triggerButton?.focus(); };
  }, [open]);
  const message = encodeURIComponent(`Hello Miteezy, I'd like a solar recommendation. Space: ${setting}. Need: ${need}. Please contact me to discuss options.`);
  return <><button ref={trigger} className="button button-white recommendation-button" type="button" onClick={() => setOpen(true)}>Get a Quick Recommendation <FontAwesomeIcon icon={faArrowRight} /></button>{open && <div className="dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setOpen(false); }}><div ref={dialog} className="recommend-dialog" role="dialog" aria-modal="true" aria-labelledby="recommend-title"><button className="dialog-close" type="button" aria-label="Close" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faXmark} /></button><p className="dialog-kicker">YOUR SOLAR NEEDS</p><h2 id="recommend-title">Tell us a little about your space</h2><p>We’ll send these details to Miteezy on WhatsApp so the team can start a conversation with you.</p><label>Where do you need solar?<select value={setting} onChange={event => setSetting(event.target.value)}><option>Home</option><option>Business</option><option>Other space</option></select></label><label>What do you need?<select value={need} onChange={event => setNeed(event.target.value)}><option>New solar system</option><option>Solar products</option><option>Maintenance or repairs</option><option>System upgrade</option></select></label><a className="button button-orange dialog-submit" href={`https://wa.me/2347083943472?text=${message}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faWhatsapp} /> Continue on WhatsApp <FontAwesomeIcon icon={faArrowRight} /></a></div></div>}</>;
}
