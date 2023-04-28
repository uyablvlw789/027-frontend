import React from "react";

function ContactCard({ title, description, icon, buttonContent }) {
  return (
    <div className="p-10 rounded-md shadow-[0_0_6px_3px_rgba(0,0,0,0.05)] cursor-pointer hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-xl flex flex-col items-start">
      {/* icon 和标题的 wrapper */}
      <div className="flex flex-row space-x-4 items-center mb-3 w-full">
        {icon}
        <div className="text-3xl font-semibold">{title}</div>
      </div>
      <div className="text-2xl mb-3">{description}</div>
      <button className="text-white text-xl px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-800 duration-75">
        {buttonContent}
      </button>
    </div>
  );
}

export default ContactCard;
