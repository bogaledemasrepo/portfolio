import HeroAndDisc from "@/components/HeroAndDisc";
import Skills from "@/components/Skilles";
import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center relative">
      <main className="w-full max-w-[1080px] relative">
        <HeroAndDisc />
        <Skills />
      </main>
    </div>
  );
};

export default About;
