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
        <Link href={"/project/1"}>
          <div
            style={{ backgroundImage: "url('/big-shoe1.png')" }}
            className="group bg-left bg-no-repeat bg-contain rounded-md border border-spacing-1 border-gray-200 shadow-md w-full "
          >
            <div className="card-body max-w-[32rem] justify-self-end">
              <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
                Niky Landing page
              </h5>
              <p className="mb-4 p-4 text-justify text-lg text-[#342c3d76]">
                Creative web and mobile developer with a strong background in
                graphic design and latest javascript framework reactjs, react
                native ,and nextjs.
              </p>

              <div className="card-actions p-4 flex gap-4">
                <button className="btn text-sm md:text-lg  text-[#342c3d76] border flex-1 border-spacing-1 border-gray-400">
                  Source code
                </button>
                <button
                  className="btn  text-sm md:text-lg btn-gradient btn-primary flex-1"
                  type="submit"
                >
                  Live preview
                </button>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Projects;
