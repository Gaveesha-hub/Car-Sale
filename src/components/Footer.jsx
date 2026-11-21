import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <motion.div className="cta" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <h2>Ready to find your <span className="grad">next car?</span></h2>
        <p>Visit our showroom or call us today.</p>
        <a className="btn" href="tel:+94000000000">📞 +94 00 000 0000</a>
      </motion.div>
      <div className="footer__bottom">
        <span className="logo">Dream<span>MOTORS</span></span>
        <p>📍 Negombo, Sri Lanka · © {new Date().getFullYear()} Dream Motors. All rights reserved.</p>
      </div>
    </footer>
  );
}