import React from 'react'

const FormInput = ({label,type}:{label:string,type:string}) => {
  return (
    <div className="flex flex-col p-2 gap-2">
    <label className="text-md text-slate-400">
      {label}
    </label>
    <input
      className="px-4 py-1 outline-none bg-sky-50 border-b-2 border-gray-300 text-slate-400 text-sm"
      type={type}
    />
  </div>
  )
}

export default FormInput
