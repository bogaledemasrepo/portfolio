import React from "react";

function Icon({ className }: { className: string }) {
  return (
    <div className="hover:blur-[1px] hover:text-slate-500 border border-transparent hover:border-slate-500 transition-all duration-300 dark:text-slate-300">
      <span
        className={`${className} icon-[tabler--brand-github] flex self-center size-8 font-bold`}
      ></span>
    </div>
  );
}

export default Icon;
