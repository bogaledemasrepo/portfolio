"use client";
import Loading from "@/components/Loading";
import { Models } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false); //
  type Project = {
    $id: string;
    title: string;
    description: string;
    thumbnail: string; // Fix typo
    sourceCodeLink?: string;
    previewLink?: string;
  };

  const [projects, setProjects] = useState<Project[]>([]);

  const getProjectList = async () => {
    type JsonData =
      | {
          success: boolean;
          data: Models.Document;
          error: null;
        }
      | {
          success: boolean;
          data: null;
          error: unknown;
        };
    try {
      setIsLoading(true);
      const resp = await fetch(`/api/projects`);
      const jsonData = (await resp.json()) as JsonData;

      if (!resp.ok) throw new Error("Failed to fetch projects");

      if (jsonData.success && jsonData.data) {
        setProjects(jsonData.data.documents);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]); // Handle errors gracefully
    } finally {
      setIsLoading(false);
    }
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
        <div className="w-full  grid md:grid-cols-2 gap-2 px-8">
          {isLoading && (
            <div className="mx-auto">
              <Loading />
            </div>
          )}

          {projects.map((Item) => {
            return (
              <div
                key={Item.$id}
                className="w-full md:max-w-[540px] flex relative flex-1"
              >
                <Image
                  src={Item.thumbnail || "/placeholder.jpg"} // Fallback image
                  fill
                  alt={Item.title || "Project image"}
                  className="absolute w-full h-full overflow-hidden"
                />
                <div className="bg-gray-200 rounded-md border border-gray-200 shadow-md w-full">
                  <div className="card-body w-full max-w-[42rem] bg-slate-200 opacity-40 hover:opacity-95 duration-200">
                    <h5 className="card-title mb-2.5 p-4 text-[#342c3d76]">
                      {Item.title || "Untitled Project"}
                    </h5>
                    <p className="mb-4 p-4 text-justify text-lg text-[#342c3d76]">
                      {Item.description || "No description available."}
                    </p>
                    <div className="card-actions py-4 flex gap-2">
                      {Item.sourceCodeLink && (
                        <Link
                          href={Item.sourceCodeLink}
                          className="btn text-sm md:text-lg text-[#342c3d76] border flex-1 border-gray-400"
                        >
                          Source code
                        </Link>
                      )}
                      {Item.previewLink && (
                        <Link
                          href={Item.previewLink}
                          className="btn text-sm md:text-lg btn-gradient btn-primary flex-1"
                        >
                          Live preview
                        </Link>
                      )}
                    </div>
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
