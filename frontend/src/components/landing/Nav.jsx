import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Coaches", href: "#coaches" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        data-testid="main-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-[#121212]/70 backdrop-blur-xl border-b border-[#F4F4F0]/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <a
            data-testid="nav-logo"
            href="#top"
            onClick={() => setOpen(false)}
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
          <div className="flex items-center gap-3">
            <a
              data-testid="nav-join-button"
              href="#join"
              onClick={() => setOpen(false)}
              className="group hidden sm:flex items-center gap-2 bg-[#4C63F5] hover:bg-[#3b4ce0] text-[#F4F4F0] font-display uppercase tracking-wide text-sm px-6 py-3 transition-colors duration-300"
            >
              Join Now
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              data-testid="mobile-menu-button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-[#F4F4F0] p-2"
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-4%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#121212] flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <div key={l.label} className="overflow-hidden">
                  <motion.a
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-baseline gap-4 font-display font-bold uppercase tracking-tight text-5xl text-[#F4F4F0] py-2"
                  >
                    <span className="font-mono-accent text-xs text-[#4C63F5]">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.a
              data-testid="mobile-join-button"
              href="#join"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex items-center justify-center gap-2 bg-[#4C63F5] text-[#F4F4F0] font-display uppercase tracking-wide text-lg px-8 py-5"
            >
              Join Now
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
