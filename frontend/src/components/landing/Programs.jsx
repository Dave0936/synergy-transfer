import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    num: "01",
    name: "Forge",
    tag: "Strength",
    desc: "Barbell-first group strength training. Squat, press, pull — coached to competition standard.",
    meta: "60 min / Max 12 athletes",
  },
  {
    num: "02",
    name: "Pulse",
    tag: "Conditioning",
    desc: "High-intensity intervals engineered for engine building. Heart-rate tracked, results measured.",
    meta: "45 min / Max 16 athletes",
  },
  {
    num: "03",
    name: "Ride",
    tag: "Endurance",
    desc: "Immersive cycling in a darkened studio. Rhythm, resistance, and relentless pacing.",
    meta: "50 min / Max 24 riders",
  },
  {
    num: "04",
    name: "Flow",
    tag: "Recovery",
    desc: "Mobility, breathwork, and loaded stretching. The session that makes every other session possible.",
    meta: "45 min / Max 14 athletes",
  },
];

export const Programs = () => {
  return (
    <section id="programs" data-testid="programs-section" className="py-32 md:py-40">
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-4">
            Programs
          </p>
          <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-[#F4F4F0]">
            Four Disciplines.
            <br />
            One Standard.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-[#F4F4F0]/60">
          Every program is periodized across the year. You don't just attend
          classes — you follow a system built to make you undeniably stronger.
        </p>
      </div>

      <div className="border-t border-[#F4F4F0]/10">
        {programs.map((p, i) => (
          <motion.a
            key={p.num}
            href="#join"
            data-testid={`program-row-${p.name.toLowerCase()}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-12 gap-4 items-center px-6 md:px-12 py-10 md:py-12 border-b border-[#F4F4F0]/10 hover:bg-[#1A1A1A] transition-colors duration-500"
          >
            <span aria-hidden="true" className="col-span-2 md:col-span-1 font-mono-accent text-sm text-[#F4F4F0]/40">
              {p.num}
            </span>
            <h3 className="col-span-10 md:col-span-4 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl text-[#F4F4F0] group-hover:text-[#4C63F5] transition-colors duration-500">
              {p.name}
            </h3>
            <p className="col-span-10 col-start-3 md:col-span-4 md:col-start-6 text-sm md:text-base text-[#F4F4F0]/60 leading-relaxed">
              {p.desc}
            </p>
            <div className="col-span-10 col-start-3 md:col-span-2 md:col-start-10 flex items-center justify-between md:justify-end gap-6">
              <span className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-[#F4F4F0]/40">
                {p.meta}
              </span>
              <ArrowUpRight className="w-6 h-6 text-[#F4F4F0]/40 group-hover:text-[#4C63F5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shrink-0" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
