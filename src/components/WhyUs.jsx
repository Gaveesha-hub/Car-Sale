import { motion } from "framer-motion";

const items = [
  { i: "🛡️", t: "Certified Quality", d: "Every vehicle passes a 150‑point inspection." },
  { i: "💰", t: "Best Prices", d: "Transparent pricing with no hidden charges." },
  { i: "🔧", t: "After‑Sales Service", d: "Warranty and servicing support you can rely on." },
  { i: "🏦", t: "Easy Leasing", d: "Flexible finance options with quick approval." },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="section">
      <span className="tag">Why Us</span>
      <h2>Why Choose <span className="grad">Dream Motors</span></h2>
      <div className="grid grid--4">
        {items.map((x, k) => (
          <motion.div key={x.t} className="feature" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: k * 0.12 }} whileHover={{ y: -10 }}>
            <div className="icon">{x.i}</div><h3>{x.t}</h3><p>{x.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}