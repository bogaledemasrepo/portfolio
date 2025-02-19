import React from "react";
interface PInputProbs {
  name: string;
  label: string;
}
function PInput({ name, label }: PInputProbs) {
  return (
    <div>
      <label className="flex-1 text-neutral-400">{label}</label>
      <input
        name={name}
        required
        type="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-[6px] px-[10px] dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
}

export default PInput;
