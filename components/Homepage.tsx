'use client';
import React from "react";
import Herophoto from "./Herophoto";
const Homepage = () => {
  function fileDownloader() {
    const a = document.createElement('a')
          a.download = '../assets/IMG_3069.png';
          a.href = `data:application/pdf,charset=utf-8,${encodeURIComponent('text')}`;
          document.body.appendChild(a)
          a.click()
          a.remove()
  }
  return (
    <section
      id="home"
      className="grid md:grid-cols-1 lg:grid-cols-2 pt-[100px] lg:px-40 md:px-10 sm:px-5s gap-5"
    >
      <div className="flex items-center justify-center flex-col sm:w-full">
        <div className="max-w-[540px] sm:p-2">
          <h1 className="text-2xl text-sky-500 pt-5 text-center">
            Hi! I&apos;m Bogale Demas
          </h1>
          <h2 className="text-xl text-sky-500 py-2 text-center">Web & mobile developer</h2>
          <p className="text-sm text-slate-400 text-justify p-5 align-middle px-10">
            Creative web and mobile developer with a strong background in
            graphic design and latest javascript framework reactjs, react native
            ,and nextjs. Commited to delivering visualy stunning and user
            friendly web and mobile applications by lavraging my expertise in
            coding and design principles. If you want to such like developer, I
            am exited to work with you!
          </p>
        </div>
        <div className="w-full my-3 flex flex-col items-center justify-center lg:hidden">
          <Herophoto />
        </div>
        <div className="w-full my-3 flex flex-col items-center justify-center">
          <div className="flex flex-col">
            {[
              { name: "Email", val: "bogidemas@gmail.com" },
              { name: "Tel", val: "+251923872187" },
            ].map(({ name, val }) => (
              <div key={name}>
                <h1 className="text-xl text-sky-500">
                  {name}:{" "}
                  <span className="text-sm text-slate-500 ml-2">{val}</span>
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-2 items-center justify-evenly">
            <button onClick={fileDownloader}
            className="p-2 h-10 bg-red-300 text-sm md:text-lg border-none rounded-lg text-neutral-50 my-4 mx-2">
              Download cv
            </button>
            <button className="p-2 h-10  text-slate-500 border-l-rose-700 bg-amber-300 rounded-md text-sm md:text-xl">
              Hire me know!
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Herophoto />
      </div>
    </section>
  );
};

export default Homepage;
