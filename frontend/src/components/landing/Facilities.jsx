import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_MAIN =
  "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbHV4dXJ5JTIwZ3ltJTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc4NjUxODQ0OHww&ixlib=rb-4.1.0&q=85";
const IMG_HALL =
  "https://images.unsplash.com/photo-1648235692910-947cb90ddd97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwbHV4dXJ5JTIwZ3ltJTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc4NjUxODQ0OHww&ixlib=rb-4.1.0&q=85";

const stats = [
  { value: "12,000", label: "Sq Ft of Training Floor" },
  { value: "24/7", label: "Member Access" },
  { value: "120+", label: "Classes Every Week" },
  { value: "03", label: "Recovery Suites" },
];

export const Facilities = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yHall = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="facilities" ref={ref} data-testid="facilities-section" className="relative py-32 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 mb-20">
        <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-4">
          The Facility
        </p>
        <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-[#F4F4F0] max-w-4xl">
          Built Like An Arena. Finished Like A Gallery.
        </h2>
      </div>

      <div className="relative px-6 md:px-12 grid grid-cols-12 gap-6 items-start">
        <motion.div style={{ y: yMain }} className="col-span-12 md:col-span-8 overflow-hidden">
          <img
            src={IMG_MAIN}
            alt="Premium training floor with machines in cinematic dark lighting"
            className="w-full aspect-[16/10] object-cover scale-110"
          />
        </motion.div>
        <motion.div
          style={{ y: yHall }}
          className="col-span-8 col-start-3 md:col-span-3 md:col-start-10 md:-mt-32 overflow-hidden"
        >
          <img
            src={IMG_HALL}
            alt="Dark hallway with neon signage inside the facility"
            className="w-full aspect-[3/4] object-cover"
          />
        </motion.div>
      </div>

      <div className="mt-24 md:mt-32 border-t border-b border-[#F4F4F0]/10 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            data-testid={`facility-stat-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`px-6 md:px-12 py-12 md:py-16 ${i > 0 ? "border-l border-[#F4F4F0]/10" : ""} ${i >= 2 ? "border-t md:border-t-0 border-[#F4F4F0]/10" : ""}`}
          >
            <p className="font-display font-bold text-5xl md:text-7xl text-[#F4F4F0] tracking-tight">
              {s.value}
            </p>
            <p className="font-mono-accent text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#F4F4F0]/50 mt-3">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
