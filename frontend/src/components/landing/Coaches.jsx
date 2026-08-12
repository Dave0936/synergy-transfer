import { motion } from "framer-motion";

const coaches = [
  {
    name: "Maya Okonkwo",
    role: "Head of Strength",
    creds: "CSCS / 12 yrs / Former national weightlifter",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwZGFya3xlbnwwfHx8fDE3ODY1MTg0NDh8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Dorian Vale",
    role: "Conditioning Lead",
    creds: "EXOS-XPS / 9 yrs / Elite HYROX coach",
    img: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Alina Reyes",
    role: "Movement & Recovery",
    creds: "FRC-ms / 10 yrs / Ex-professional dancer",
    img: "https://images.unsplash.com/photo-1434847868581-86e8a2b8e7a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwZGFya3xlbnwwfHx8fDE3ODY1MTg0NDh8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const Coaches = () => {
  return (
    <section id="coaches" data-testid="coaches-section" className="px-6 md:px-12 py-32 md:py-40 bg-[#1A1A1A]">
      <div className="mb-20">
        <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-4">
          The Coaches
        </p>
        <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-[#F4F4F0] max-w-3xl">
          Coached By People Who've Done It
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {coaches.map((c, i) => (
          <motion.div
            key={c.name}
            data-testid={`coach-card-${c.name.split(" ")[0].toLowerCase()}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`group ${i === 1 ? "md:mt-16" : ""}`}
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={c.img}
                alt={`Portrait of ${c.name}, ${c.role}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span
                aria-hidden="true"
                className="absolute top-4 right-4 font-mono-accent text-xs text-[#F4F4F0]/60"
              >
                /{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4 border-t border-[#F4F4F0]/10 pt-5">
              <div>
                <h3 className="font-display font-semibold uppercase tracking-tight text-2xl text-[#F4F4F0]">
                  {c.name}
                </h3>
                <p className="text-[#4C63F5] font-mono-accent text-xs tracking-[0.2em] uppercase mt-1">
                  {c.role}
                </p>
              </div>
              <p className="text-xs text-[#F4F4F0]/50 text-right leading-relaxed max-w-[45%]">
                {c.creds}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
