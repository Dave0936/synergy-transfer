import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/landing/PageHeader";
import { Programs } from "@/components/landing/Programs";
import { ProgramModal } from "@/components/landing/ProgramModal";
import { CTA } from "@/components/landing/CTA";

const services = [
  {
    name: "Personal Training",
    desc: "1-2-1 coaching with an award-winning team. Programming, nutrition, and accountability built around you.",
  },
  {
    name: "Teen & Kids Fitness",
    desc: "Confidence-building sessions for younger athletes — safe, structured, and genuinely fun.",
  },
  {
    name: "Private Group Sessions",
    desc: "Bespoke group fitness and sports performance for teams, friends, and colleagues. Booked privately.",
  },
  {
    name: "SG3 Nutrition",
    desc: "Our online fat-loss and performance nutrition programme — complimentary for Synergy Plus members.",
  },
];

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <>
      <PageHeader
        kicker="Programs"
        title={"Four Disciplines.\nOne Standard."}
        sub="Every class is programmed in progressive blocks and coached by people who've done it. Tap any discipline for the full breakdown — coach, session structure, and results."
      />
      <Programs onSelect={setSelectedProgram} />

      <section data-testid="services-section" className="px-6 md:px-12 pb-32 md:pb-40">
        <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-12">
          Beyond The Timetable
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#F4F4F0]/10">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              data-testid={`service-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-r border-[#F4F4F0]/10 p-8 md:p-12 hover:bg-[#1A1A1A] transition-colors duration-500"
            >
              <h3 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl text-[#F4F4F0] group-hover:text-[#4C63F5] transition-colors duration-500">
                {s.name}
              </h3>
              <p className="mt-4 text-sm md:text-base text-[#F4F4F0]/60 leading-relaxed max-w-md">
                {s.desc}
              </p>
              <Link
                data-testid={`service-enquire-${i}`}
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 font-mono-accent text-xs tracking-[0.2em] uppercase text-[#F4F4F0]/50 hover:text-[#4C63F5] transition-colors duration-300"
              >
                Enquire <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </>
  );
}
