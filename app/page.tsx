"use client";
import Link from "next/link";
import Image from "next/image";
import heroPhoto from "./../public/images/hero.png";
import ServiceCard from "@/components/ServiceCard";
export default function Home() {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/bogicv.pdf";
    link.download = "bogicv.pdf";
    link.click();
  };
  return (
    <main className="flex dark:bg-slate-950/90 items-center py-8 flex-col justify-center relative min-h-screen">
      <div className="max-w-[1080px]  grid lg:grid-cols-2">
        <div className="flex-1 flex flex-col px-4 container mx-auto">
          <div className="w-full flex items-start">
            <p className="title">Hi! I&apos;m Bogale</p>
          </div>
          <div className="flex-1 py-4 flex flex-col justify-end">
            <h5 className="subtitle">Software developer</h5>
            <p className="py-4 ">
              Highly skilled software developer with extensive experience in
              building robust web and mobile applications.
            </p>
            <p className="py-4 ">
              {" "}
              A collaborative team player with excelent problem-solviing
              capablity and a passion for continous learning and adapting to
              emerging technologies.
            </p>
            <div className="text-sm text-[#342c3d76]">
              <p className="text-blue-500 font-semibold">
                Email:{" "}
                <Link href={"bogidemas@gmail.com"}>bogidemas@gmail.com</Link>
              </p>
              <p className="font-semibold ">Tel: +251923872187</p>
            </div>
            <div className="py-4 flex gap-4">
              <button
                className="w-full border p-2 border-1 border-blue-300 bg-blue-200 rounded-md font-semibold"
                onClick={handleCvDownload}
              >
                Download cv
              </button>
              <button
                className="w-full font-semibold border p-2 border-1 border-gray-300  rounded-md"
                type="submit"
              >
                Hire me know!
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center mx-auto justify-center w-full rounded-full p-10 max-w-[540px]">
          <Image src={heroPhoto} alt="hero" className="rounded-lg" />
        </div>
      </div>
      <div className="w-full container">
        <h5 className="underline font-bold text-center text-xl my-8 text-[#342c3d76]">
          Services
        </h5>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-2">
          {[
            {
              title: "Backend development",
              discription:
                "Develop backend applications using nodejs, express with sql and non sql",
              icon: "",
              link: "/projects/?filter=backend",
            },
            {
              title: "Frontend development",
              discription:
                "Develop frontend applications using reactjs,tailwindcss, styled components.",
              icon: "",
              link: "/projects/?filter=frontend",
            },
            {
              title: "Mobile app development",
              discription:
                "Develop amaizing crose plateform mobile application using React netive",
              icon: "",
              link: "/projects/?filter=mobile",
            },
          ].map((Item, index) => (
            <ServiceCard key={index} {...Item} />
          ))}
        </div>
      </div>
    </main>
  );
}
