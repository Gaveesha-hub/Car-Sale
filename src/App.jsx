import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Featured from "./components/Featured";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Featured />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}