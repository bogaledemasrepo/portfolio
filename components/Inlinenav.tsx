import Link from "next/link";
import React from "react";
function Inlinenav({ links }: { links: { name: string; link: string }[] }) {
  return (
    <div className={`hidden duration-300 sm:flex gap-4 w-full `}>
      {links.map(({ name, link }) => (
        <div key={name}>
          <Link href={link}>
            <p className="py-3 px-4 text-center bg-slate-100  text-slate-500 border border-slate-200 hover:bg-slate-600 duration-300 hover:text-slate-100 font-semibold w-full">
              {name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Inlinenav;
