import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import classNames from "classnames";

export function Breadcrumb({ items, className }) {
  console.log(items);
  const wrapperClassName = classNames("bg-gray-50", "py-2", "px-4", "rounded-md", className);
  return (
    <nav className={wrapperClassName}>
      {" "}
      <ol className="list-none p-0 flex flex-row flex-wrap md:inline-flex">
        {" "}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className={`flex items-center ${isLast ? "" : "mr-2"}`}>
              {" "}
              <Link
                to={item.url}
                className={
                  isLast ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-700"
                }
              >
                {item.name === "home" ? <AiFillHome /> : item.name}
              </Link>{" "}
              {!isLast && <span class="mx-4 h-auto text-gray-400 font-medium">/</span>}{" "}
            </li>
          );
        })}{" "}
      </ol>{" "}
    </nav>
  );
}
