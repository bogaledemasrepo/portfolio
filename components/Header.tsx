"use client"
import { navLink } from "@/constants/navlink";
import React, { useState } from "react";
import ILink from "./ILink";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [closed, setClosed] = useState(false);
  return (
    <header className="h-[60px] w-full flex justify-between shadow-sm items-center bg-slate-300 lg:px-40 md:px-10 sm:px-5 fixed top-0 left-0">
      <div>
        <h1 className="text-red-400 text-xl">
          <span className="text-2xl text-red-500 p-1 border-2 border-sky-500 rounded-full">
            B
          </span>
          ogi.
        </h1>
      </div>
      <nav className="">
        <div>
          <button
            className="text-2xl text-red-400 md:hidden"
            onClick={() => setClosed(!closed)}
          >
            <HiOutlineMenu />
          </button>
        </div>
        {closed && (
          <ul className="absolute right-0 top-[60px] flex flex-col items-end justify-end bg-slate-300 md:hidden">
            {navLink.map(({ name, link }) => (
              <ILink
                key={name}
                name={name}
                link={link}
                className="w-[160px] p-2 flex items-center justify-center"
              />
            ))}
          </ul>
        )}
        <ul className="hidden md:flex align-center justify-between">
          {navLink.map(({ name, link }) => (
            <ILink key={name} name={name} link={link} className="px-3 mx-1" />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
