import React from "react"

const InputField = ({ id, label, type, name, value, onChange, isError }) => (
  <div className={`w-full ${type === "textarea" ? "md:w-full" : "md:w-1/2"} px-3 mb-6 md:mb-0`}>
    <label
      className={`block uppercase tracking-wide text-clr1 text-xs font-bold mb-2 ${
        isError && !value ? "text-red-500" : ""
      }`}
      htmlFor={id}
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        className={`no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none ${
          isError && !value ? "border-red-500" : ""
        }`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    ) : (
      <input
        className={`appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          type === "textarea" ? "" : "border-gray-500"
        } ${isError && !value ? "border-red-500" : ""}`}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    )}
    {isError && !value && (
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    )}
  </div>
)

export default InputField
