import React from "react";
import { serviceList } from "@/constants/serviceList";
import Image from "next/image";

const Servicespage = () => {
  return (
    <section id="services" className="lg:px-40 md:px-10 sm:px-5 my-10">
      <h1 className="text-2xl font-bold text-slate-400 text-center my-10">
        Whate can I provide for you?
      </h1>
      <main className="flex flex-row flex-wrap p-5 items-center justify-center gap-2">
        {serviceList.map(({ title, discr}) => (
          <div key={title} className="h-[280px] w-[240px] bg-slate-300 shadow-lg rounded-lg flex-grow hover:opacity-80 transition-opacity duration-200 cursor-pointer">
            <div className="h-[100px] w-full flex items-center justify-center">
              <Image className="h-full rounded-full bg-red-300 w-[100px]" src="" alt="" />
            </div>
            <div className="w-full p-4">
              <h1 className="text-xl text-slate-400 text-center font-bold">{title}</h1>
              <p className="text-sm text-slate-400 p-4">{discr}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Servicespage;
