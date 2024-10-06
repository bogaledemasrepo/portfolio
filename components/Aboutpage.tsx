import Image from "next/image";
import React from "react";
import aboutimg from "../assets/images/IMG_3069.png";
const Aboutpage = () => {
  return (
    <section id="about" className="w-full border-l-orange-800 py-10 lg:px-40 md:px-10 sm:px-5">
          <h1 className="text-2xl font-bold text-slate-500 text-center my-10">About Me!</h1>
      <main className="grid md:grid-cols-2">
        <div className="hidden md:flex items-center justify-center w-full rounded-full m-4 p-5">
          <Image
            src={aboutimg}
            alt="bogale about photo"
            className="rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-xl text-sky-500 py-2">Wellcome hire!</h2>
          <p className="max-w-[540px] text-sm text-slate-400 text-justify p-5 align-middle px-10">
            My name is Bogale Demas, live and work in Bahir Dar Ethiopia. I
            enjoy coding and challenge of learning something new every day. I
            spent most of may day expermenting with html, css, javasript and js
            frameworks
          </p>
          <div className="flex items-center justify-center w-full rounded-full m-4 p-5 md:hidden">
            <Image
              src={aboutimg}
              alt="bogale about photo"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-xl text-sky-500 py-2">Educational background</h2>
          <p className="max-w-[540px]  text-sm text-slate-400 text-justify p-5 align-middle px-10">
            I studies bachlor of Computer science at Bahir Dar Institute of
            Technology since September 2019 - Julay 2023. I spent alot of time
            to become Full-stack Js developer on Zero to mastery Udemy courses.
            Thanks to telegram I get alot Udemy courses!.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Aboutpage;
