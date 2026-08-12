import { useState } from "react";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Manifesto } from "@/components/landing/Manifesto";
import { Programs } from "@/components/landing/Programs";
import { ProgramModal } from "@/components/landing/ProgramModal";
import { Coaches } from "@/components/landing/Coaches";
import { Facilities } from "@/components/landing/Facilities";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";

export default function Home({ ready }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <>
      <Hero ready={ready} />
      <Marquee />
      <Manifesto />
      <Programs onSelect={setSelectedProgram} />
      <Coaches />
      <Facilities />
      <Pricing />
      <Testimonials />
      <CTA />
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
    </>
  );
}
