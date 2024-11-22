import React from "react";
import { technicalSkills } from "@/constants/technicalSkill";
const Skills = () => {
  return (
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
            {technicalSkills.map(({title,value})=>(

            <div className="card items-center justify-center gap-2" key={title}>
              <div
                className="radial-progress text-[#6c4242] border-4 border-transparent"
                style={{ "--value": parseInt(value) }}

              >{value}%</div>
              <p className="font-semibold">{title}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
