"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProject, setFilteredProject] = useState(projects);
  const filterProjects = (filter: string) => {
    switch (filter) {
      case "Frontend":
        setFilter("Frontend");
        setFilteredProject(() =>
          projects.filter((item) => item.catagory == "Frontend")
        );
        break;
      case "Backend":
        setFilter("Backend");
        setFilteredProject(() =>
          projects.filter((item) => item.catagory == "Backend")
        );
        break;
      case "Mobile":
        setFilter("Mobile");
        setFilteredProject(() =>
          projects.filter((item) => item.catagory == "Mobile")
        );
        break;
      default:
        setFilter("All");
        setFilteredProject(projects);
        break;
    }
  };
  return (
    <main className="min-h-[90vh] w-full relative mt-[80px] flex justify-center">
      <section className="w-full max-w-[1080px] my-10 relative">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-row gap-1 my-8 border-b border-gray-300 p-2">
            {["All", "Backend", "Frontend", "Mobile"].map((Item, index) => (
              <button
                className={`${
                  filter == Item ? "dark:bg-gray-200 bg-gray-900" : ""
                } p-3 text-center text-slate-500 border border-slate-200 font-semibold`}
                key={index}
                onClick={() => filterProjects(Item)}
              >
                {Item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full  grid md:grid-cols-2 gap-2 px-8">
          {filteredProject &&
            filteredProject.map((Item, index) => {
              return (
                <div
                  key={index}
                  className="w-full bg-black h-[24rem] md:max-w-[540px] flex relative flex-1 bg-img"
                >
                  <div className=" h-[18rem]  rounded-md border border-gray-200 shadow-md w-full">
                    <div className=" relative h-full w-full bg-slate-200 opacity-40 hover:opacity-95 duration-200">
                      <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
                        {Item.title || "Untitled Project"}
                      </h5>
                      <p className="mb-4 p-4 text-justify text-lg text-[#342c3d76]">
                        {Item.description || "No description available."}
                      </p>
                    </div>
                    <div className="bg-gray-800/90 w-full  left-0 buttom-0 z-50  p-4 flex gap-2">
                      {Item.sourceCodeLink && (
                        <Link
                          href={Item.sourceCodeLink}
                          className="p-2 border border-gray-500 bg-gray-300 text-gray-900 rounded-md flex-1"
                        >
                          Source code
                        </Link>
                      )}
                      {Item.previewLink && (
                        <Link
                          href={Item.previewLink}
                          className="p-2 border border-gray-300 rounded-md flex-1 bg-blue-600 text-semibold text-lg"
                        >
                          Live preview
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
