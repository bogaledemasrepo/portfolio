import React from "react";

function TextArea({
  value,
  label,
  setInputChange,
}: {
  value: string;
  label: string;
  setInputChange: (e: React.SyntheticEvent) => void;
}) {
  return (
    <div className="">
      <label className="block mb-2 text-neutral-400 dark:text-white">
        {label}
      </label>
      <textarea
        id="message"
        value={value}
        onChange={setInputChange}
        rows={2}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write projects discription..."
      ></textarea>
    </div>
  );
}

export default TextArea;
