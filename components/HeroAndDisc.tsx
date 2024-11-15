import Image from "next/image";
import React from "react";
import aboutimg from "../assets/images/IMG_3069.png";
const HeroAndDisc = () => {
  return (
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
              style={{width:'100%'}}
            />
          </div>
        </div>
        <div className="card w-full justify-self-center items-center shadow-none">
          <div className="card-header">
            <h5 className="card-title text-center font-bold text-[#6c4242] text-xl">
              Wellcome hire!
            </h5>
          </div>
          <div className="card-body flex flex-col gap-4 p-10">
            <p className="max-w-[540px] text-lg text-[#342c3d76] text-justify p-2 md:p-5 align-middle md:px-10">
              My name is Bogale Demas, live and work in Bahir Dar Ethiopia. I
              enjoy coding and challenge of learning something new every day. I
              spent most of may day expermenting with html, css, javasript and
              js frameworks
            </p>
          </div>
          <div className="flex items-center justify-center w-full rounded-full m-4 p-5 lg:hidden">
            <Image src={aboutimg} alt="about bogale" className="rounded-lg p-4" />
          </div>
          <div className="card-header">
            <h5 className="card-title text-center font-bold text-[#6c4242] text-xl">
              Educational background
            </h5>
          </div>
          <div className="card-body flex flex-col gap-4">
            <p className="max-w-[540px]  text-lg text-[#342c3d76] text-justify p-5 align-middle px-10">
              I studies bachlor of Computer science at Bahir Dar Institute of
              Technology since September 2019 - Julay 2023. I spent alot of time
              to become Full-stack Js developer on Zero to mastery Udemy
              courses. Thanks to telegram I get alot Udemy courses!.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAndDisc;
