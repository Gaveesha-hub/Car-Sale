import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { n: "Kamal Perera", t: "Smooth process and a great car. Dream Motors made buying stress‑free!" },
  { n: "Nadeesha Silva", t: "Honest advice and fair price. Highly recommended to everyone." },
  { n: "Ravi Fernando", t: "Excellent after‑sales support. I'll buy my next car here too." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((p) => (p + 1) % reviews.length), 4500); return () => clearInterval(id); }, []);
  return (
    <section id="reviews" className="section center">
      <span className="tag">Reviews</span>
      <h2>What Our <span className="grad">Customers Say</span></h2>
      <div className="review">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}>
            <p>“{reviews[i].t}”</p><h4>— {reviews[i].n} ★★★★★</h4>
          </motion.div>
        </AnimatePresence>
        <div className="dots">{reviews.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} />)}</div>
      </div>
    </section>
  );
}