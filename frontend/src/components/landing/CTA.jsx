import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section id="join" data-testid="join-section" className="relative bg-[#4C63F5] px-6 md:px-12 py-32 md:py-40 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -bottom-10 left-0 font-display font-bold uppercase text-[28vw] leading-none text-[#F4F4F0]/10 select-none pointer-events-none whitespace-nowrap"
      >
        Synergy
      </span>
      <div className="relative max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold uppercase tracking-tighter leading-[0.9] text-[#F4F4F0] text-6xl md:text-8xl lg:text-9xl"
        >
          Your Free Week
          <br />
          Starts Today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-base md:text-lg text-[#F4F4F0]/85 leading-relaxed"
        >
          Seven days. Unlimited classes. One movement assessment with a coach
          at our Leith studio. No card required — just show up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          {done ? (
            <div data-testid="join-success-message" className="flex items-center gap-4 bg-[#121212] text-[#F4F4F0] px-8 py-6 w-fit">
              <Check className="w-6 h-6 text-[#4C63F5]" />
              <p className="font-display uppercase tracking-wide text-lg">
                You're in. Check your inbox.
              </p>
            </div>
          ) : (
            <form data-testid="join-form" onSubmit={submit} className="flex flex-col sm:flex-row gap-0 max-w-xl">
              <input
                data-testid="join-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="flex-1 bg-[#121212] text-[#F4F4F0] placeholder:text-[#F4F4F0]/40 font-mono-accent text-sm tracking-[0.15em] px-6 py-5 outline-none focus:ring-2 focus:ring-[#F4F4F0] focus:ring-offset-2 focus:ring-offset-[#4C63F5]"
              />
              <button
                data-testid="join-submit-button"
                type="submit"
                className="group flex items-center justify-center gap-2 bg-[#F4F4F0] text-[#121212] hover:bg-[#121212] hover:text-[#F4F4F0] font-display uppercase tracking-wide text-base px-10 py-5 transition-colors duration-300"
              >
                Claim Week
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
