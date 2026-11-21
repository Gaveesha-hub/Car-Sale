import { motion, useScroll, useTransform } from "framer-motion";

const word = {
  hidden: { y: "110%" },
  show: (i) => ({ y: 0, transition: { delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }),
};

export default function Hero() {
  const { scrollY } = useScroll();
  const carY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const title = ["Drive", "Your", "Dream."];
  return (
    <section id="home" className="hero">
      <div className="orb orb--1" /><div className="orb orb--2" />
      <motion.div className="hero__text" style={{ y: textY }}>
        <motion.span className="tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          ● Premium Pre‑Owned & New Vehicles
        </motion.span>
        <h1>
          {title.map((w, i) => (
            <span className="mask" key={w}>
              <motion.span custom={i} variants={word} initial="hidden" animate="show" className={i === 2 ? "grad" : ""}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          Welcome to Dream Motors — trusted quality, honest prices and cars you'll love for years to come.
        </motion.p>
        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href="#inventory" className="btn">Browse Cars →</motion.a>
          <motion.a whileHover={{ scale: 1.06 }} href="#contact" className="btn btn--ghost">Get a Quote</motion.a>
        </motion.div>
      </motion.div>

      <motion.div className="hero__car" style={{ y: carY }}
        initial={{ opacity: 0, x: 200, rotate: 4 }} animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}>
        <motion.img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
          alt="Featured car" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
      </motion.div>

      <div className="scroll-hint"><span /></div>
    </section>
  );
}