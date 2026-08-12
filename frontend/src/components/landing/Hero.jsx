import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBneW0lMjB3b3Jrb3V0JTIwZGFyayUyMGxpZ2h0aW5nfGVufDB8fHx8MTc4NjUxODQ0OXww&ixlib=rb-4.1.0&q=85";
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/6740245/6740245-hd_1920_1080_25fps.mp4";

const lines = [
  { text: "Stronger", accent: false },
  { text: "Together.", accent: true },
  { text: "Every Rep.", accent: false },
];

const variantsMeta = [
  { id: 0, name: "Full-Bleed" },
  { id: 1, name: "Split" },
  { id: 2, name: "Overlap" },
];

const lineVariants = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.35 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

const VideoBg = ({ className }) => {
  const vRef = useRef(null);
  useEffect(() => {
    const v = vRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);
  return (
    <video
      ref={vRef}
      data-testid="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={HERO_IMG}
      className={className}
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  );
};

const MaskedLines = ({ ready, className, outline = false }) => (
  <h1 className={`font-display font-bold uppercase leading-[0.9] tracking-tighter ${className}`}>
    {lines.map((line, i) => (
      <span key={line.text} className="block overflow-hidden pb-1">
        <motion.span
          custom={i}
          variants={lineVariants}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          className={`block ${
            line.accent ? "text-[#4C63F5]" : outline ? "text-outline" : "text-[#F4F4F0]"
          }`}
        >
          {line.text}
        </motion.span>
      </span>
    ))}
  </h1>
);

const Kicker = ({ ready, centered = false }) => (
  <motion.p
    data-testid="hero-kicker"
    initial={{ opacity: 0 }}
    animate={ready ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    className={`font-mono-accent text-xs md:text-sm tracking-[0.3em] uppercase text-[#F4F4F0]/70 mb-6 ${centered ? "text-center" : ""}`}
  >
    Synergy Group Fitness — Leith, Edinburgh
  </motion.p>
);

const SubAndCta = ({ ready, centered = false }) => (
  <div className={`mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 ${centered ? "md:flex-col md:items-center md:text-center" : ""}`}>
    <motion.p
      data-testid="hero-subtext"
      initial={{ opacity: 0, y: 20 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-md text-base md:text-lg leading-relaxed text-[#F4F4F0]/80"
    >
      An award-winning functional gym where elite coaching, creative
      programming, and a family-run community refuse to let you stay the same.
    </motion.p>
    <motion.a
      data-testid="hero-cta-button"
      initial={{ opacity: 0, y: 20 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
      href="#join"
      className="group inline-flex w-fit items-center gap-3 bg-[#4C63F5] hover:bg-[#3b4ce0] text-[#F4F4F0] font-display uppercase tracking-wide text-base px-10 py-5 transition-colors duration-300"
    >
      Start Training
      <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
    </motion.a>
  </div>
);

const variantTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

export const Hero = ({ ready = true }) => {
  const ref = useRef(null);
  const [variant, setVariant] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#121212]"
    >
      <AnimatePresence mode="wait">
        {variant === 0 && (
          <motion.div key="fullbleed" {...variantTransition} className="absolute inset-0">
            <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
              <VideoBg className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/45 to-[#121212]/20" />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
            <motion.div
              style={{ opacity: fade }}
              className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-28"
            >
              <Kicker ready={ready} />
              <MaskedLines ready={ready} className="text-[#F4F4F0] text-[17vw] md:text-[11vw] lg:text-[10vw]" />
              <SubAndCta ready={ready} />
            </motion.div>
          </motion.div>
        )}

        {variant === 1 && (
          <motion.div key="split" {...variantTransition} className="absolute inset-0 grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 flex flex-col justify-end md:justify-center px-6 md:px-12 pb-28 md:pb-0">
              <Kicker ready={ready} />
              <MaskedLines ready={ready} className="text-[#F4F4F0] text-[15vw] md:text-[7.5vw]" />
              <SubAndCta ready={ready} />
            </div>
            <div className="hidden md:block md:col-span-5 relative overflow-hidden border-l border-[#F4F4F0]/10">
              <motion.div style={{ y: bgY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                <VideoBg className="w-full h-full object-cover object-center" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/60 via-transparent to-transparent" />
              <span className="absolute bottom-6 right-6 font-mono-accent text-[10px] tracking-[0.25em] uppercase text-[#F4F4F0]/60">
                Live / Group Floor 06:00
              </span>
            </div>
          </motion.div>
        )}

        {variant === 2 && (
          <motion.div key="overlap" {...variantTransition} className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[72vw] md:w-[34vw] overflow-hidden">
              <motion.div style={{ y: bgY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                <VideoBg className="w-full h-full object-cover object-center" />
              </motion.div>
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <motion.div style={{ opacity: fade }} className="relative z-10 w-full px-6 md:px-12 pt-24">
              <Kicker ready={ready} centered />
              <MaskedLines ready={ready} outline className="text-center text-[14vw] md:text-[8vw]" />
              <SubAndCta ready={ready} centered />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        data-testid="hero-variant-switcher"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-[#121212]/60 backdrop-blur-md border border-[#F4F4F0]/10 px-5 py-3"
      >
        <span className="font-mono-accent text-[10px] tracking-[0.25em] uppercase text-[#F4F4F0]/40">
          Hero
        </span>
        {variantsMeta.map((v) => (
          <button
            key={v.id}
            data-testid={`hero-variant-${v.id + 1}`}
            onClick={() => setVariant(v.id)}
            aria-label={`Switch hero to ${v.name} layout`}
            className={`font-mono-accent text-xs tracking-[0.15em] transition-colors duration-300 ${
              variant === v.id ? "text-[#4C63F5]" : "text-[#F4F4F0]/50 hover:text-[#F4F4F0]"
            }`}
          >
            {String(v.id + 1).padStart(2, "0")}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10"
      >
        <span className="font-mono-accent text-[10px] tracking-[0.3em] uppercase text-[#F4F4F0]/50 [writing-mode:vertical-rl]">
          Scroll to begin
        </span>
        <span className="w-px h-20 bg-gradient-to-b from-[#4C63F5] to-transparent" />
      </motion.div>
    </section>
  );
};
