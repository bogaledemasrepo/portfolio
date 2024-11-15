import HeroAndDisc from "@/components/HeroAndDisc";
import Skills from "@/components/Skilles";
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen w-screen overflow-scroll relative">
      <HeroAndDisc />
      <Skills />
    </main>
  );
};

export default About;
