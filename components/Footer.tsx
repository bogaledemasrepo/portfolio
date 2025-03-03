import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 bg-blend-saturation">
      <div className="flex items-center justify-center relative bg-neutral-200 shadow-sm">
        <footer className="max-w-[1080px] footer bg-base-200/60 px-6 py-4">
          <div className="flex w-full flex-wrap items-center justify-between">
            <aside className="grid-flow-col items-center text-lg text-[#342c3d76]">
              <p>©2024 Copy right reserved.</p>
            </aside>
            <div className="flex h-5 gap-4 text-lg text-[#342c3d76]">
              <Link
                href="https://github.com/Boagale"
                className="link"
                aria-label="Github Link"
              >
                <span className="icon-[tabler--brand-github] size-5"></span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bogale-demas-4b897325b?trk=contact-info"
                className="link"
                aria-label="Linkdin Link"
              >
                <span className="icon-[tabler--brand-linkedin] size-5"></span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
