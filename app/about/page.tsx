import Image from "next/image";
import aboutimg from "./../../public/images/hero2.png";
import React from "react";

const technicalSkills = [
  {
    title: "Communication skill",
    value: "80",
  },
  {
    title: "Problem solveing skill",
    value: "85",
  },
  {
    title: "Decition making skill",
    value: "81",
  },
  {
    title: "Time management skill",
    value: "79",
  },
];
function page() {
  return (
    <main className="flex items-center py-8 flex-col justify-center relative min-h-screen">
      <div className="max-w-[1080px]  grid lg:grid-cols-2">
        <div className="flex-1 flex flex-col px-4 container mx-auto">
          <div className="w-full flex items-start">
            <p className="title">About Me!</p>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h5 className="font-bold text-center text-xl subtitle">
              Wellcome hir
            </h5>
            <p className="py-4">
              My name is Bogale Demas, live and work in Bahir Dar Ethiopia. I
              enjoy coding and challenge of learning something new every day. I
              spent most of may day expermenting with html, css, javasript and
              js frameworks.
            </p>
            <div className="flex-1 flex lg:hidden items-center mx-auto justify-center w-full rounded-full p-4 max-w-[540px]">
              <Image src={aboutimg} alt="hero" className="rounded-lg" />
            </div>
            <p className="py-4">
              I studies bachlor of Computer science at Bahir Dar Institute of
              Technology since September 2019 - Julay 2023. I spent alot of time
              to become Full-stack Js developer on Zero to mastery Udemy
              courses. Thanks to telegram I get alot Udemy courses!.
            </p>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex items-center mx-auto justify-center w-full rounded-full p-10 max-w-[540px]">
          <Image src={aboutimg} alt="hero" className="rounded-lg" />
        </div>
      </div>
      <div className="w-full max-w-[1080px] container">
        <h5 className="underline font-bold text-center my-8 text-xl subtitle">
          Skills
        </h5>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full justify-self-center p-2">
            <div className="">
              <h5 className=" text-center font-bold text-[#d6be5d] text-xl">
                Technical Skills
              </h5>
            </div>
            <div className=" flex flex-col gap-4 p-4">
              {[
                { title: "NextJs", perform: "75%" },
                { title: "ReactJs", perform: "90%" },
                { title: "React Native", perform: "70%" },
                { title: "NodeJs", perform: "78%" },
                { title: "Javascript", perform: "95%" },
                { title: "Tailwindcss", perform: "80%" },
              ].map(({ title, perform }) => (
                <div className="flex flex-col" key={title}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{title}</p>
                    <p className="font-semibold">{perform}</p>
                  </div>
                  <div className="progress border border-spacing-1 border-gray-400 flex items-center h-3 w-[100%]">
                    <div
                      className={"progress-bar bg-[#d6be5d] h-3"}
                      style={{ width: perform }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-4">
            <div className="w-full  justify-self-center">
              <div className="">
                <h5 className="text-center font-bold text-[#d6be5d] text-xl">
                  General Skills
                </h5>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                {technicalSkills.map(({ title, value }) => (
                  <div
                    className="border border-slate-300 rounded-md p-4 flex flex-col items-center justify-center gap-2"
                    key={title}
                  >
                    <div
                      className="radial-progress text-[#d6be5d] border-4 border-transparent"
                      style={
                        {
                          "--value": parseInt(value),
                        } as React.CSSProperties
                      }
                    >
                      {value}%
                    </div>
                    <p className="font-semibold">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
