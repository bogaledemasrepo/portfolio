"use client";
import { navLinks } from "@/constants/navlink";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [dispBlockNav, setDispBlockNav] = useState(true);
  return (
    <div className="flex items-center justify-center relative">
      <nav className="max-w-[1080px] fixed top-0 z-50 navbar flex w-full gap-2 shadow max-sm:flex-col sm:items-center">
        <div className="flex w-full items-center justify-between">
          <div className="navbar-start items-center justify-between max-sm:w-full">
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
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                onClick={() => setDispBlockNav(!dispBlockNav)}
              >
                {dispBlockNav ? (
                  <span className="icon-[tabler--menu-2] size-4"></span>
                ) : (
                  <span className="icon-[tabler--x] size-4"></span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className={`sm:navbar-end collapse ${
            dispBlockNav && "hidden"
          }  grow basis-full overflow-hidden transition-[height] duration-300 max-sm:w-full`}
        >
          <ul className="menu sm:menu-horizontal gap-2 p-0">
            {navLinks.map(({ link, name }) => (
              <li
                key={link}
                className="font-semibold text-[#342c3d76] border border-spacing-1 hover:border-gray-300"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
