import React from "react";

function ContactCard({ title, description, icon, buttonContent }) {
  return (
    <div className="py-4 px-8 rounded-md shadow-md cursor-pointer hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-xl flex flex-col space-y-6">
      <div className="flex flex-row space-x-2">
        {icon}
        <div>{title}</div>
      </div>
      <div>{description}</div>
      <button className=" text-white px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-800 duration-75 ">
        {buttonContent}
      </button>
    </div>
  );
}

export default ContactCard;
