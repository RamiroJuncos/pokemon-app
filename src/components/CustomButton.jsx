import React from "react";

function CustomButton({ att, run, onClick, disabled, text }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full h-12 text-3xl disabled:bg-slate-500 text-center bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white"
    >
      {text}
    </button>
  );
}

export default CustomButton;
