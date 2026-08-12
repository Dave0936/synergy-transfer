import { motion } from "framer-motion";

const quotes = [
  {
    quote: "I've trained everywhere. Nowhere else made me feel like my effort actually mattered to the people coaching me.",
    name: "Jordan M.",
    detail: "Member since 2021 / Performance",
  },
  {
    quote: "Down 14 kilos, deadlifting double bodyweight, and for the first time in my life I look forward to Mondays.",
    name: "Priya S.",
    detail: "Member since 2023 / Elite",
  },
  {
    quote: "It's not a gym. It's a standard you hold yourself to — and a room full of people who won't let you lower it.",
    name: "Marcus T.",
    detail: "Member since 2020 / Performance",
  },
];

export const Testimonials = () => {
  return (
    <section data-testid="testimonials-section" className="px-6 md:px-12 py-32 md:py-40 bg-[#1A1A1A]">
      <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-20">
        From The Floor
      </p>
      <div className="space-y-24 md:space-y-32">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={q.name}
            data-testid={`testimonial-${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`max-w-4xl ${i % 2 === 1 ? "md:ml-auto md:text-right" : ""}`}
          >
            <p className="font-display font-medium uppercase tracking-tight text-3xl md:text-5xl leading-[1.1] text-[#F4F4F0]">
              <span className="text-[#4C63F5]">"</span>
              {q.quote}
              <span className="text-[#4C63F5]">"</span>
            </p>
            <footer className="mt-8">
              <p className="font-mono-accent text-sm text-[#F4F4F0]">{q.name}</p>
              <p className="font-mono-accent text-xs text-[#F4F4F0]/50 mt-1 tracking-[0.15em] uppercase">
                {q.detail}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};
