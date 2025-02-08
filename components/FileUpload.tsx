import React from "react";

function FileUpload({
  value,
  label,
  setInputChange,
}: {
  value: string;
  label: string;
  setInputChange: (e: React.SyntheticEvent) => void;
}) {
  return (
    <div className="w-full flex flex-col my-1">
      <h2 className="flex-1 text-neutral-400">{label}</h2>
      <div className="flex items-center justify-center w-full py-2">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 pt-4"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-1 text-xs text-gray-500 dark:text-gray-400 flex gap-2">
              <svg
                className="w-4 h-4 mb-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input
            value={value}
            onChange={setInputChange}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

export default FileUpload;
