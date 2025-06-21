import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="w-full dark:bg-slate-950 bg-blend-saturation">
      <div className="flex items-center justify-center relative  shadow-sm">
        <footer className="max-w-[1080px] footer px-6 py-4">
          <div className="flex w-full flex-wrap items-center justify-between">
            <aside className="grid-flow-col text-xs items-center sm:text-base text-[#342c3d76]">
              <p className="dark:text-slate-400 text-slate-500">
                ©2025 All right reserved.
              </p>
            </aside>

            <div className="flex gap-4 items-center flex-row text-[#342c3da1]">
              <Link href="https://www.linkedin.com/in/bogale-demas?trk=contact-info">
                <Icon className="icon-[tabler--brand-linkedin]" />
              </Link>
              <Link href="https://t.me/bogaledemas">
                <Icon className="icon-[tabler--brand-telegram]" />
              </Link>
              <Link href="https://github.com/bogaledemasrepo/">
                <Icon className="icon-[tabler--brand-github]" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
