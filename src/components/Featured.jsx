import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
const cars = [
  { name: "Porsche 911 Carrera", type: "Sports", price: "Rs. 78,500,000", year: 2021, km: "12,000 km", fuel: "Petrol", img: img("photo-1503376780353-7e6692767b70") },
  { name: "Ford Mustang GT", type: "Sports", price: "Rs. 42,000,000", year: 2020, km: "24,500 km", fuel: "Petrol", img: img("photo-1494976388531-d1058494cdd8") },
  { name: "Ferrari Roma", type: "Luxury", price: "Rs. 125,000,000", year: 2022, km: "6,000 km", fuel: "Petrol", img: img("photo-1583121274602-3e2820c69888") },
  { name: "Classic Chevrolet", type: "Classic", price: "Rs. 18,500,000", year: 1967, km: "58,000 km", fuel: "Petrol", img: img("photo-1552519507-da3b142c6e3d") },
];
const tabs = ["All", "Sports", "Luxury", "Classic"];

function Card({ car }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientY - r.top) / r.height - 0.5) * -12, y: ((e.clientX - r.left) / r.width - 0.5) * 12 });
  };
  return (
    <motion.article layout className="card" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
      onMouseMove={move} onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)` }}>
      <div className="card__img"><img src={car.img} alt={car.name} loading="lazy" /><span className="badge">{car.type}</span></div>
      <div className="card__body">
        <h3>{car.name}</h3>
        <div className="specs"><span>📅 {car.year}</span><span>🛣 {car.km}</span><span>⛽ {car.fuel}</span></div>
        <div className="card__foot"><strong>{car.price}</strong><a href="#contact" className="btn btn--sm">Enquire</a></div>
      </div>
    </motion.article>
  );
}

export default function Featured() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? cars : cars.filter((c) => c.type === tab);
  return (
    <section id="inventory" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="tag">Inventory</span>
        <h2>Featured <span className="grad">Vehicles</span></h2>
      </motion.div>
      <div className="tabs">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={tab === t ? "active" : ""}>
            {t}{tab === t && <motion.i layoutId="pill" />}
          </button>
        ))}
      </div>
      <motion.div layout className="grid">
        <AnimatePresence mode="popLayout">{list.map((c) => <Card key={c.name} car={c} />)}</AnimatePresence>
      </motion.div>
    </section>
  );
}