"use client";
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false); //
  const [projects, setProjects] = useState([]);
  const getProjectList = async () => {
    setIsLoading(true);
    const resp = await fetch("http://localhost:3000/api/projects");
    const projects = await resp.json();
    setIsLoading(false);
    if (projects.success) return setProjects(projects.data);
    return setProjects([]);
  };

  useEffect(() => {
    getProjectList();
  }, []);
  return (
    <main className="min-h-[90vh] w-full relative mt-[80px] flex justify-center">
      <section className="w-full max-w-[1080px] my-10 relative">
        <div className="w-full flex items-center justify-center">
          <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit py-10 uppercase">
            <span className="underline">My projects</span> list!
          </p>
          <div className="absolute right-8">
            <Link href="/projects/new">
              <p className="text-[#342c3d76]">Add project</p>
            </Link>
          </div>
        </div>
        <div className="w-full  flex flex-wrap gap-2 px-8">
          {isLoading && (
            <div className="mx-auto">
              <Loading />
            </div>
          )}

          {projects.map(
            ({ _id, title, tubnail, discription, sourceCode, previewlink }) => (
              <Link
                href={`/projects/${_id}`}
                key={title}
                className="min-w-[360px] flex relative flex-1"
              >
                <Image
                  src={tubnail}
                  fill
                  alt=""
                  className="absolute w-full h-full overflow-hidden"
                />
                <div className="bg-gray-200 rounded-md border order-spacing-1 border-gray-200 shadow-md w-full ">
                  <div className="card-body w-full max-w-[42rem] justify-self-end bg-slate-200 opacity-90 z-50">
                    <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
                      {title}
                    </h5>
                    <p className="mb-4 p-4 text-justify text-lg text-[#342c3d76]">
                      {discription}
                    </p>

                    <div className="card-actions p-4 flex gap-4">
                      <Link href={sourceCode}>
                        <button className="btn text-sm md:text-lg  text-[#342c3d76] border flex-1 border-spacing-1 border-gray-400">
                          Source code
                        </button>
                      </Link>
                      <Link href={previewlink} className="flex-1">
                        <button className="btn  text-sm md:text-lg btn-gradient btn-primary flex-1">
                          Live preview
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
