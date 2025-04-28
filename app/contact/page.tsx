"use client";
import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
const page = () => {
  const submitHandler = () => {};
  return (
    <main className="container mx-auto flex items-center py-8 flex-col justify-center relative min-h-screen">
      <div className="max-w-[1080px]  grid md:grid-cols-2">
        <div className="flex-1 flex flex-col px-4 container mx-auto">
          <div className="w-full flex items-start">
            <p className="title">Contact Me!</p>
          </div>
          <div className="flex justify-evenly items-center text-base-content/50 mt-4 border border-spacing-1 border-gray-200 rounded-md p-4">
            <div className="flex-1 flex flex-col justify-end">
              <h5 className="font-bold text-center text-xl subtitle">
                Thank you to reach out me!
              </h5>
              <p className="py-4">
                And ready to take you digital presence to next level using
                latest js technology and us we can build an amaizing web and
                mobile application to achive your goals.
              </p>
              <div className="flex-1 flex gap-4 my-8">
                <Link href="https://www.linkedin.com/in/bogale-demas?trk=contact-info">
                  <Icon className="icon-[tabler--brand-linkedin]" />
                </Link>
                <Link href="https://github.com/bogaledemasrepo/">
                  <Icon className="icon-[tabler--brand-telegram]" />
                </Link>
                <Link href="https://github.com/bogaledemasrepo/">
                  <Icon className="icon-[tabler--brand-github]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              <div className="w-full">
                <p className="font-semibold">Full Name</p>
                <input
                  name="fullname"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="border-b-2 border-b-neutral-400 bg-neutral-200 p-2 w-full transition-all duration-300 focus:border-blue-500 placeholder:hidden placeholder:focus:hidden"
                />
              </div>
              <div className="w-full">
                <p className=" font-semibold">Email</p>
                <input
                  name="email"
                  required
                  type="text"
                  placeholder="jhon@gmail.com"
                  className="border-b-2 border-b-neutral-400 bg-neutral-200 p-2 w-full transition-all duration-300 focus:border-blue-500 placeholder:hidden placeholder:focus:hidden"
                />
              </div>
              <div className="w-full">
                <p className="font-semibold">Message</p>
                <textarea
                  name="msg"
                  required
                  placeholder="Hallo..."
                  className="border-b-2 border-b-neutral-400 bg-neutral-200 p-2 w-full transition-all duration-300 focus:border-blue-500 placeholder:hidden placeholder:focus:hidden"
                />
              </div>
              <div className="flex gap-2">
                <button
                  className="w-full font-semibold border p-2 border-1 border-gray-300  rounded-md"
                  type="reset"
                >
                  Clear
                </button>
                <button
                  className="w-full border p-2 border-1 border-blue-300 bg-blue-200 rounded-md font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
