import Link from "next/link";
import React from "react";

function ServiceCard({
  title,
  discription,
  icon,
  link,
}: {
  title: string;
  discription: string;
  icon: string;
  link: string;
}) {
  return (
    <Link href={link || "/"}>
      <div className="relative">
        <div className="w-full border border-slate-300 rounded-md relative">
          <div className="absolute w-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center font-bold text-white">
              {icon || "ICON"}
            </div>
          </div>
          <h1 className="font-bold mt-28 my-4 text-center text-lg subtitle">
            {title || "Mobile development"}
          </h1>
          <p className="p-4 text-[#342c3d76]">
            {discription ||
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolore
            sed aspernatur veniam quas similique, Ipsum iste aspernatur repellat
            dolores accusantium eos!`}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
