import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (v) => (ref.current.textContent = Math.floor(v).toLocaleString() + suffix) });
    return () => c.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0</span>;
}

const stats = [
  { n: 15, s: "+", l: "Years Experience" },
  { n: 3200, s: "+", l: "Cars Sold" },
  { n: 98, s: "%", l: "Happy Customers" },
  { n: 120, s: "+", l: "Cars in Stock" },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={s.l} style={{ animationDelay: `${i * 0.1}s` }}>
          <h3><Counter to={s.n} suffix={s.s} /></h3><p>{s.l}</p>
        </div>
      ))}
    </section>
  );
}