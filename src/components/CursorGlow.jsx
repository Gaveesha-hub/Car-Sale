import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20 });
  const y = useSpring(useMotionValue(-500), { stiffness: 80, damping: 20 });
  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 200); y.set(e.clientY - 200); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return <motion.div className="cursor-glow" style={{ x, y }} />;
}