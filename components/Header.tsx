"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import Theme from "./Theme";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [dispBlockNav, setDispBlockNav] = useState(false);
  return (
    <div className="flex items-center justify-center relative dark:bg-slate-950">
      <nav className="max-w-[1080px] navbar flex w-full gap-2 shadow max-sm:flex-col sm:items-center dark:bg-slate-950 ">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-between max-sm:w-full">
            <Link href="/" aria-label="Homepage Link">
              <Image
                src="/images/logo.png"
                width={60}
                height={60}
                className="flex items-center justify-center"
                alt=""
              />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                onClick={() => setDispBlockNav(!dispBlockNav)}
              >
                {!dispBlockNav ? (
                  <Icon className="icon-[tabler--menu-2]" />
                ) : (
                  <Icon className="icon-[tabler--x]" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`${!dispBlockNav && "hidden"} sm:block`}>
          <ul className="flex flex-col sm:flex-row gap-2 p-0">
            {navLinks.map(({ link, name }) => (
              <Link key={link} href={link}>
                <li className="font-semibold dark:text-slate-400 transition-all duration-300 text-[#342c3d76] border border-slate-300 dark:border-slate-700 hover:blur-[1px] p-2">
                  {name}
                </li>
              </Link>
            ))}
            {<Theme />}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
