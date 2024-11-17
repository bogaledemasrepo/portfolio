import { projects } from "@/constants/projectsList";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <main className="min-h-screen w-full relative mt-[100px] flex items-center justify-center">
      <section className="w-full max-w-[1080px] my-10">
        <div className="w-full flex items-center justify-center">
          <p className="bg-gradient-to-r from-primary to-error bg-clip-text text-transparent font-black text-2xl w-fit py-10 uppercase">
            <span className="underline">My projects</span> list!
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
        {projects.map(
          ({ title, discription, tubnail, sourceCode, previewLink }) => (
            <div key={title}>
              <div
                style={{ backgroundImage: tubnail }}
                className="group bg-left bg-no-repeat bg-contain bg-gray-200 rounded-md border border-spacing-1 border-gray-200 shadow-md w-full "
              >
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
                    <Link href={previewLink}>
                      <button
                        className="btn  text-sm md:text-lg btn-gradient btn-primary flex-1"
                        type="submit"
                      >
                        Live preview
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          )
        )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
