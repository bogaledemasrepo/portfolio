"use client";
import Link from "next/link";
import React from "react";
import Herophoto from "./Herophoto";
const Homepage = () => {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/bogicv.pdf";
    link.download = "bogicv.pdf";
    link.click();
  };
  return (
    <section className="flex items-center justify-center relative">
      <div className="max-w-[1080px] grid md:grid-cols-1 lg:grid-cols-2 lg:px-10 pt-[100px] md:px-10 sm:px-5 gap-5 justify-self-center">
        <div className="card sm:max-w-[32rem]">
          <div className="w-full flex items-center justify-center">
            <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-4xl w-fit">
              Hi! I&apos;m Bogale Demas
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
              Senior Software developer
            </h5>
            <p className="p-4 text-justify text-[#342c3da1]">
              Highly skilled software developer with extensive experience in
              building robust web and mobile applications. Proficient in
              utilizing modern thechologies such as Next.js, React.js,
              TypeScript, Express.js, tailwindcss for developing responsive and
              scalable web applications and react-native for mobile applications
              by lavraging the capablity of expo to deliver high-quality cross
              platform applications.
            </p>
            <p className="p-4 text-justify text-[#342c3da1]">
              {" "}
              A collaborative team player with excelent problem-solviing
              capablity and a passion for continous learning and adapting to
              emerging technologies.
            </p>
            <div className="px-4 text-sm text-[#342c3d76]">
              <p>
                Email:{" "}
                <Link href={"bogidemas@gmail.com"}>bogidemas@gmail.com</Link>
              </p>
              <p>Tel: +251923872187</p>
            </div>
            <div className="card-actions p-4 flex gap-4">
              <button
                className="btn text-lg text-[#342c3d76] border flex-1 border-spacing-1 border-gray-400"
                onClick={handleCvDownload}
              >
                Download cv
              </button>
              <button
                className="btn text-lg btn-gradient btn-primary flex-1"
                type="submit"
              >
                Hire me know!
              </button>
            </div>
          </div>
        </div>
        <div className="card group hover:shadow sm:max-w-[32rem]">
          <Herophoto />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
