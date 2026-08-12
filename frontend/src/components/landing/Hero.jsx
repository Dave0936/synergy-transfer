import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBneW0lMjB3b3Jrb3V0JTIwZGFyayUyMGxpZ2h0aW5nfGVufDB8fHx8MTc4NjUxODQ0OXww&ixlib=rb-4.1.0&q=85";

const lines = [
  { text: "Stronger", accent: false },
  { text: "Together.", accent: true },
  { text: "Every Rep.", accent: false },
];

const lineVariants = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.35 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[640px] overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={HERO_IMG}
          alt="Athlete lifting a barbell in dramatic gym lighting"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-[#121212]/30" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-28"
      >
        <motion.p
          data-testid="hero-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono-accent text-xs md:text-sm tracking-[0.3em] uppercase text-[#F4F4F0]/70 mb-6"
        >
          Synergy Group Fitness — Est. 2019
        </motion.p>

        <h1 className="font-display font-bold uppercase leading-[0.9] tracking-tighter text-[#F4F4F0] text-[17vw] md:text-[11vw] lg:text-[10vw]">
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={`block ${line.accent ? "text-[#4C63F5]" : ""}`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            data-testid="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-base md:text-lg leading-relaxed text-[#F4F4F0]/80"
          >
            Elite coaching, cinematic spaces, and a community that refuses to let
            you stay the same. This is training as a way of life.
          </motion.p>
          <motion.a
            data-testid="hero-cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            href="#join"
            className="group inline-flex w-fit items-center gap-3 bg-[#4C63F5] hover:bg-[#3b4ce0] text-[#F4F4F0] font-display uppercase tracking-wide text-base px-10 py-5 transition-colors duration-300"
          >
            Start Training
            <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
