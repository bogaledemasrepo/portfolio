import React from "react";
function CustomInput({
  errmsg,
  value,
  type,
  label,
  setInputChange,
}: {
  errmsg: string;
  value: string;
  type: string;
  label: string;
  setInputChange: (e: React.SyntheticEvent) => void;
}) {
  return (
    <div className="w-full flex flex-col my-1">
      <h2 className="flex-1 text-neutral-400">{label}</h2>
      <input
        required
        value={value}
        onChange={setInputChange}
        type={type}
        className={`flex-2 w-full h-10 px-4 border border-1 ${
          errmsg === "" ? "border-neutral-300" : "border-red-300"
        } bg-white rounded-md text-neutral-500`}
      />
      {errmsg === "" ? (
        ""
      ) : (
        <text className="font-[6px] text-red-400 text-center">{errmsg}</text>
      )}
    </div>
  );
}

export default CustomInput;
