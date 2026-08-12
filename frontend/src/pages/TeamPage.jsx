import { motion } from "framer-motion";
import { PageHeader } from "@/components/landing/PageHeader";
import { Coaches } from "@/components/landing/Coaches";
import { CTA } from "@/components/landing/CTA";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        kicker="The Team"
        title={"A Family Team.\nAn Award-Winning One."}
        sub="2x UK Personal Trainer of the Year. 4x UK Functional Gym of the Year. But what members talk about most is how this team makes them feel — welcome, coached, and capable of more."
      />
      <Coaches />
      <section data-testid="team-ethos" className="px-6 md:px-12 py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase tracking-tight text-3xl md:text-5xl text-[#F4F4F0]"
          >
            By Your Side. Every Session.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-base md:text-lg leading-relaxed text-[#F4F4F0]/70"
          >
            <p>
              There's no induction to pass and no experience required. A coach
              is by your side during every session — keeping your technique on
              point and giving you easier or harder options as you need them.
            </p>
            <p>
              Don't know your barbells from your burpees? Training for your
              first HYROX? Either way, walk through the door. You won't be
              disappointed.
            </p>
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  );
}
