import Link from "next/link";
import React from "react";
function Blocknav({
  links,
  isHidden,
}: {
  links: { name: string; link: string }[];
  isHidden: boolean;
}) {
  return (
    <div
      className={`${
        isHidden && "hidden"
      } duration-300 flex flex-col w-full sm:hidden`}
    >
      {links.map(({ name, link }) => (
        <div key={name}>
          <Link href={link}>
            <p className="py-3 text-center bg-slate-100  text-slate-500 border border-slate-200 hover:bg-slate-600 duration-300 hover:text-slate-100 font-semibold w-full">
              {name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blocknav;
