import React from "react";

function Badge({ name }) {
  return (
    <div className="rounded-lg bg-black text-white px-2 py-0.5 flex flex-row items-center space-x-2 group cursor-pointer">
      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 duration-500"></div>
      <div>{name}</div>
    </div>
  );
}

export default Badge;
