"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav-wrap"><button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={25} /> : <Menu size={25} />}</button><nav id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation"><a href="#solutions" onClick={() => setOpen(false)}>Solutions</a><a href="#products" onClick={() => setOpen(false)}>Products</a><a href="#process" onClick={() => setOpen(false)}>How it works</a><a href="#projects" onClick={() => setOpen(false)}>Projects</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a className="mobile-menu-cta" href="https://wa.me/2347083943472?text=Hello%20Miteezy%2C%20I%27d%20like%20a%20solar%20quote." target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get a solar quote</a></nav></div>;
}
