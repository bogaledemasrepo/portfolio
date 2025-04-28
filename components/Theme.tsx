"use client";
import React from "react";

function Theme() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
      }}
      className="font-semibold dark:text-slate-400 transition-all duration-300 text-[#342c3d76] border border-slate-300 dark:border-slate-700 hover:blur-[1px] py-1 px-2"
    >
      <div className="">
        <span
          className={`icon-[tabler--moon] dark:hidden flex self-center size-6 font-bold`}
        ></span>
      </div>
      <div className=" hover:text-slate-500 border border-transparent dark:text-slate-300">
        <span
          className={`icon-[tabler--sun] hidden dark:flex self-center size-6 font-bold`}
        ></span>
      </div>
    </button>
  );
}

export default Theme;
