import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Preloader } from "@/components/landing/Preloader";
import { Cursor } from "@/components/landing/Cursor";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Manifesto } from "@/components/landing/Manifesto";
import { Programs } from "@/components/landing/Programs";
import { ProgramModal } from "@/components/landing/ProgramModal";
import { Schedule } from "@/components/landing/Schedule";
import { Coaches } from "@/components/landing/Coaches";
import { Facilities } from "@/components/landing/Facilities";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

function App() {
  const [ready, setReady] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) {
      selectedProgram ? lenisRef.current.stop() : lenisRef.current.start();
    }
  }, [selectedProgram]);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -60 });
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div data-testid="app-root" className="bg-[#121212] text-[#F4F4F0] min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />
      <Cursor />
      <AnimatePresence>
        {!ready && <Preloader onComplete={() => setReady(true)} />}
      </AnimatePresence>
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <Manifesto />
        <Programs onSelect={setSelectedProgram} />
        <Schedule />
        <Coaches />
        <Facilities />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </div>
  );
}

export default App;
