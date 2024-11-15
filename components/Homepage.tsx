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
    <section
      id="home"
      className="grid md:grid-cols-1 lg:grid-cols-2 lg:px-10 pt-[100px] md:px-10 sm:px-5s gap-5 justify-self-center"
    >
      <div className="card sm:max-w-[32rem]">
        <div className="w-full flex items-center justify-center">
          <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-4xl w-fit">
            Hi! I&apos;m Bogale Demas
          </p>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
            Web & mobile developer
          </h5>
          <p className="mb-4 p-4 text-justify text-lg text-[#342c3d76]">
            Creative web and mobile developer with a strong background in
            graphic design and latest javascript framework reactjs, react native
            ,and nextjs. Commited to delivering visualy stunning and user
            friendly web and mobile applications by lavraging my expertise in
            coding and design principles. If you want to such like developer, I
            am exited to work with you!
          </p>
          <div className="p-4 text-lg text-[#342c3d76]">
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
    </section>
  );
};

export default Homepage;
