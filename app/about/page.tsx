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
    <>
      <div className="flex items-center justify-center relative">
        <main className="w-full max-w-[1080px] relative">
          <section className="w-full flex flex-col items-center mt-14">
            <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit py-10 uppercase">
              <span className="underline">About</span> Me!
            </p>
            <div className="w-full md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="flex-col rounded-sm w-full justify-self-center hidden lg:flex">
                <div className="card-body flex flex-col p-10">
                  <Image
                    src={aboutimg}
                    alt="bogale about photo"
                    className="rounded-lg"
                    objectFit="contain"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="card w-full justify-self-center items-center shadow-none">
                <div className="card-header">
                  <h5 className="card-title text-center font-bold  text-[#342c3d76] text-xl">
                    Wellcome hire!
                  </h5>
                </div>
                <div className="card-body flex flex-col gap-4 p-10">
                  <p className="max-w-[540px] text-lg text-[#342c3d76] text-justify p-2 md:p-5 align-middle md:px-10">
                    My name is Bogale Demas, live and work in Bahir Dar
                    Ethiopia. I enjoy coding and challenge of learning something
                    new every day. I spent most of may day expermenting with
                    html, css, javasript and js frameworks
                  </p>
                </div>
                <div className="flex items-center justify-center w-full rounded-full m-4 p-5 lg:hidden">
                  <Image
                    src={aboutimg}
                    alt="about bogale"
                    className="rounded-lg p-4"
                  />
                </div>
                <div className="card-header">
                  <h5 className="card-title text-center font-bold  text-[#342c3d76] text-xl">
                    Educational background
                  </h5>
                </div>
                <div className="card-body flex flex-col gap-4">
                  <p className="max-w-[540px]  text-lg text-[#342c3d76] text-justify p-5 align-middle px-10">
                    I studies bachlor of Computer science at Bahir Dar Institute
                    of Technology since September 2019 - Julay 2023. I spent
                    alot of time to become Full-stack Js developer on Zero to
                    mastery Udemy courses. Thanks to telegram I get alot Udemy
                    courses!.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit mt-10 uppercase p-4">
              <span className="underline">My</span> Skills
            </p>
            <div className="w-full px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="card w-full justify-self-center p-4">
                <div className="card-header">
                  <h5 className="card-title text-center font-bold text-[#6c4242] text-xl">
                    Technical Skills
                  </h5>
                </div>
                <div className="card-body flex flex-col gap-4 p-10">
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
                          className={"progress-bar bg-[#6c4242] h-3"}
                          style={{ width: perform }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card w-full justify-self-center">
                <div className="card-header">
                  <h5 className="card-title text-center font-bold text-[#6c4242] text-xl">
                    General Skills
                  </h5>
                </div>
                <div className="w-full card-body grid grid-cols-2 gap-4 p-10">
                  {technicalSkills.map(({ title, value }) => (
                    <div
                      className="card items-center justify-center gap-2"
                      key={title}
                    >
                      <div
                        className="radial-progress text-[#6c4242] border-4 border-transparent"
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
          </section>
        </main>
      </div>
      <div className="w-full h-16 bg-transparent"></div>
    </>
  );
}

export default page;
