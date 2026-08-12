import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const programs = [
  {
    num: "01",
    name: "Forge",
    tag: "Strength & Conditioning",
    desc: "Barbell-led group strength work, coached to proper S&C standard. Squat, hinge, press, pull — progressive blocks that make you measurably stronger.",
    meta: "60 min / Max 12 athletes",
    detail: "Our flagship strength session. Built on Ross's creative, functional S&C programming — every block runs four weeks, every lift is coached, and every session finishes with the kind of conditioning that reminds you why you came.",
    coach: {
      name: "Ross Paterson",
      bio: "Owner & Head Coach. Speciality: strength & conditioning and creative functional fitness.",
    },
    stats: { duration: "60 min", capacity: "12", intensity: "High" },
    session: [
      { step: "Movement Prep", time: "10 min" },
      { step: "Strength Block", time: "30 min" },
      { step: "Functional Finisher", time: "15 min" },
      { step: "Cooldown & Breath", time: "5 min" },
    ],
    results: [
      "Progressive, trackable strength across every major lift",
      "Confidence with barbells — even if you started with none",
      "Structured four-week blocks, so progress never stalls",
    ],
  },
  {
    num: "02",
    name: "Pulse",
    tag: "Functional Conditioning",
    desc: "High-energy functional intervals that build an engine. Relentless, creative, and — fair warning — Bev gives no rest in class.",
    meta: "45 min / Max 16 athletes",
    detail: "The session Edinburgh talks about. Bev's high-energy conditioning mixes sleds, ergs, carries and bodyweight intervals into workouts that are challenging, creative, and genuinely fun. Scaled for every level, dreaded by no one for long.",
    coach: {
      name: "Bev Paterson",
      bio: "Partner & Group Coach. Speciality: relentless high energy and giving no rest in class.",
    },
    stats: { duration: "45 min", capacity: "16", intensity: "Very High" },
    session: [
      { step: "Ramp-Up Warm-Up", time: "8 min" },
      { step: "Interval Block One", time: "15 min" },
      { step: "Interval Block Two", time: "15 min" },
      { step: "Team Finisher", time: "7 min" },
    ],
    results: [
      "A bigger engine — work capacity that carries into everything",
      "Serious calorie burn without a single boring minute",
      "The famous Synergy community energy, at full volume",
    ],
  },
  {
    num: "03",
    name: "Perform",
    tag: "Sports Performance & HYROX",
    desc: "Sport-specific training and HYROX preparation. Strength, power, and race-pace conditioning for athletes and the ambitious.",
    meta: "60 min / Max 10 athletes",
    detail: "Jonny's domain. Sports-performance S&C with HYROX-specific conditioning built in — sled work, wall balls, running economy and the pacing discipline that race day demands. Whether it's your first race or your fifth, there's a lane for you.",
    coach: {
      name: "Jonny Jones",
      bio: "PT & Group Coach. Speciality: S&C sports performance, rehab, and introduction to lifting.",
    },
    stats: { duration: "60 min", capacity: "10", intensity: "High" },
    session: [
      { step: "Athlete Warm-Up", time: "10 min" },
      { step: "Power & Strength", time: "20 min" },
      { step: "Race-Pace Conditioning", time: "25 min" },
      { step: "Recovery Protocol", time: "5 min" },
    ],
    results: [
      "Race-ready HYROX conditioning and pacing strategy",
      "Power and speed that transfer to your sport",
      "A introduction-to-lifting pathway for newer athletes",
    ],
  },
  {
    num: "04",
    name: "Restore",
    tag: "Mobility & Rehab",
    desc: "Mobility, rehab-informed movement, and loaded stretching led by a 2x UK Personal Trainer of the Year. The session that makes every other session possible.",
    meta: "45 min / Max 14 athletes",
    detail: "Amy built this around what most training ignores: moving well. Mobility, S&C-informed rehab work, and genuine care for where your body is today. Ideal if you're returning from injury — or making sure you never have to.",
    coach: {
      name: "Amy Toolis",
      bio: "Partner & 2x UK Personal Trainer of the Year. Speciality: mobility, S&C, rehab.",
    },
    stats: { duration: "45 min", capacity: "14", intensity: "Low" },
    session: [
      { step: "Breath & Positions", time: "8 min" },
      { step: "Mobility Flow", time: "20 min" },
      { step: "Loaded Stretching", time: "12 min" },
      { step: "Downshift", time: "5 min" },
    ],
    results: [
      "Range of motion you can actually use under load",
      "Rehab-informed progressions for cranky joints",
      "Better recovery between every hard session",
    ],
  },
];

export const Programs = ({ onSelect }) => {
  return (
    <section id="programs" data-testid="programs-section" className="py-32 md:py-40">
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-4">
            Programs
          </p>
          <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-[#F4F4F0]">
            Strength. Fitness.
            <br />
            Community.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-[#F4F4F0]/60">
          Four disciplines, one standard. Every session is programmed,
          coached, and scaled to you — tap a program to see exactly what
          happens inside.
        </p>
      </div>

      <div className="border-t border-[#F4F4F0]/10">
        {programs.map((p, i) => (
          <motion.button
            key={p.num}
            type="button"
            onClick={() => onSelect(p)}
            data-testid={`program-row-${p.name.toLowerCase()}`}
            data-cursor="view"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group w-full text-left grid grid-cols-12 gap-4 items-center px-6 md:px-12 py-10 md:py-12 border-b border-[#F4F4F0]/10 hover:bg-[#1A1A1A] transition-colors duration-500"
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
          </motion.button>
        ))}
      </div>
    </section>
  );
};
