import React from "react";
import Image from "next/image";
import iiii from "../assets/images/IMG_8886 (2).png";
const Herophoto = () => {
  return (
    <div className="flex items-center justify-center w-full rounded-full p-10 max-w-[540px]">
      <Image
        src={iiii}
        alt="IMAGES"
        className="rounded-lg"
      />
    </div>
  );
};

export default Herophoto;
