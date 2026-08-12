import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="main-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#121212]/70 backdrop-blur-xl border-b border-[#F4F4F0]/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <a
          data-testid="nav-logo"
          href="#top"
          className="font-display font-bold uppercase tracking-tight text-xl md:text-2xl text-[#F4F4F0]"
        >
          Synergy<span className="text-[#4C63F5]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              href={l.href}
              className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#F4F4F0]/70 hover:text-[#4C63F5] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          data-testid="nav-join-button"
          href="#join"
          className="group flex items-center gap-2 bg-[#4C63F5] hover:bg-[#3b4ce0] text-[#F4F4F0] font-display uppercase tracking-wide text-sm px-6 py-3 transition-colors duration-300"
        >
          Join Now
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </motion.header>
  );
};
