import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "Inventory", "Why Us", "Reviews", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.header
      className={`nav ${scrolled ? "nav--solid" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="#home" className="logo">Dream<span>MOTORS</span></a>
      <nav className={`nav__links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "")}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </nav>
      <a href="#contact" className="btn btn--sm">Book Test Drive</a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
    </motion.header>
  );
}