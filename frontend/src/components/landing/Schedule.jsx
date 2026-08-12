import { motion } from "framer-motion";

const days = [
  {
    day: "Mon",
    classes: [
      { time: "06:00", name: "Forge" },
      { time: "12:15", name: "Pulse" },
      { time: "18:00", name: "Perform" },
      { time: "19:30", name: "Restore" },
    ],
  },
  {
    day: "Tue",
    classes: [
      { time: "06:00", name: "Pulse" },
      { time: "07:30", name: "Perform" },
      { time: "17:30", name: "Forge" },
      { time: "19:00", name: "Pulse" },
    ],
  },
  {
    day: "Wed",
    classes: [
      { time: "06:00", name: "Forge" },
      { time: "12:15", name: "Restore" },
      { time: "18:00", name: "Pulse" },
      { time: "19:30", name: "Perform" },
    ],
  },
  {
    day: "Thu",
    classes: [
      { time: "06:00", name: "Perform" },
      { time: "12:15", name: "Forge" },
      { time: "17:30", name: "Pulse" },
      { time: "19:00", name: "Restore" },
    ],
  },
  {
    day: "Fri",
    classes: [
      { time: "06:00", name: "Forge" },
      { time: "12:15", name: "Pulse" },
      { time: "17:30", name: "Perform" },
      { time: "19:00", name: "Forge" },
    ],
  },
  {
    day: "Sat",
    classes: [
      { time: "08:00", name: "Pulse" },
      { time: "09:30", name: "Forge" },
      { time: "11:00", name: "Perform" },
      { time: "12:30", name: "Restore" },
    ],
  },
  {
    day: "Sun",
    classes: [
      { time: "09:00", name: "Perform" },
      { time: "10:30", name: "Restore" },
      { time: "12:00", name: "Forge" },
    ],
  },
];

export const Schedule = () => {
  return (
    <section id="schedule" data-testid="schedule-section" className="bg-[#EDE8DF] text-[#121212] py-32 md:py-40">
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono-accent text-xs tracking-[0.3em] uppercase text-[#4C63F5] mb-4">
            Weekly Timetable
          </p>
          <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-[#121212]">
            Every Day.
            <br />
            Every Discipline.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-[#121212]/60">
          120+ classes across seven days. Book up to seven days ahead through
          the member app — Performance and Elite members get priority windows.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 md:mx-12 border border-[#121212]/15 overflow-x-auto"
      >
        <div className="grid grid-cols-7 min-w-[980px]">
          {days.map((d, i) => (
            <div
              key={d.day}
              data-testid={`schedule-day-${d.day.toLowerCase()}`}
              className={`${i > 0 ? "border-l border-[#121212]/15" : ""}`}
            >
              <div className="border-b border-[#121212]/15 px-4 py-5 flex items-baseline justify-between">
                <span className="font-display font-bold uppercase tracking-tight text-2xl text-[#121212]">
                  {d.day}
                </span>
                <span className="font-mono-accent text-[10px] text-[#121212]/40">
                  {String(d.classes.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                {d.classes.map((c, j) => (
                  <div
                    key={`${d.day}-${j}`}
                    data-testid={`schedule-class-${d.day.toLowerCase()}-${j}`}
                    className="group px-4 py-4 border-b border-[#121212]/10 last:border-b-0 hover:bg-[#121212] transition-colors duration-300 cursor-default"
                  >
                    <p className="font-mono-accent text-[11px] tracking-[0.15em] text-[#121212]/50 group-hover:text-[#F4F4F0]/60 transition-colors duration-300">
                      {c.time}
                    </p>
                    <p
                      className={`font-display font-semibold uppercase tracking-wide text-lg mt-1 transition-colors duration-300 ${
                        c.name === "Forge"
                          ? "text-[#4C63F5]"
                          : "text-[#121212] group-hover:text-[#F4F4F0]"}`}
                    >
                      {c.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="px-6 md:px-12 mt-8 font-mono-accent text-[11px] tracking-[0.2em] uppercase text-[#121212]/40">
        All levels welcome — coaches scale every session
      </p>
    </section>
  );
};
