import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Parallax from "parallax-js";
import { useQuery } from "@tanstack/react-query";

function Hero() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const isMounted = useRef(false);

  const query = useQuery({
    queryKey: ["hero"],
    queryFn: () => {
      // TODO: 从后端获取数据
      return axios.get(`${process.env.REACT_APP_API_URL}/hero`, {
        params: {
          populate: "*",
        },
      });
    },
  });

  const { data, isLoading, isError, error } = query;

  useEffect(() => {
    if (isMounted.current) {
      new Parallax(ref1.current, {
        hoverOnly: true,
        invertX: false,
        invertY: false,
      });
      new Parallax(ref2.current, {
        hoverOnly: true,
        invertX: false,
        invertY: false,
      });
      new Parallax(ref3.current, {
        hoverOnly: true,
        invertX: false,
        invertY: false,
      });
    }
  }, [data]);

  if (isLoading) {
    return <>isLoading</>;
  } else {
    // Hero 1 2 3图片
    const [hero1, hero2, hero3] = data.data.data.attributes.coverimages.data;
    isMounted.current = true;

    const { title, description, primaryButton, secondaryButton } = data.data.data.attributes;

    return (
      <div className="md:mb-28 -mt-16 md:-mt-24">
        <div id="scene" className="absolute h-screen inset-0">
          <div ref={ref1} className="absolute w-1/2 md:w-1/3 top-36 -left-12 md:-left-24">
            <img
              src={`${process.env.REACT_APP_STRAPI_URL}${hero1.attributes.url}`} // 替换图片路径
              data-depth="0.4"
              alt=""
            />
          </div>
          <div ref={ref2} className="absolute w-1/2 md:w-1/3  top-1/3 right-0">
            <img
              data-depth="0.4"
              src={`${process.env.REACT_APP_STRAPI_URL}${hero2.attributes.url}`}
              alt=""
            />
          </div>
          <div ref={ref3} className="absolute w-1/2 md:w-1/3 top-3/4 -left-12 md:-left-32">
            <img
              className="absolute top-2/3 left-1/2"
              src={`${process.env.REACT_APP_STRAPI_URL}${hero3.attributes.url}`}
              data-depth="0.4"
              alt=""
            />
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center cursor-pointer">
            {title}
          </h1>
          <h2 className=" tracking-tight leading-tight md:leading-normal md:tracking-normal text-2xl w-1/2 text-center mb-6 cursor-pointer">
            {description}
          </h2>
          <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-y-0 md:space-x-3 ">
            <Link
              to={primaryButton.url}
              className="px-6 py-2 bg-blue-600 text-white text-center rounded-md text-lg hover:bg-blue-800 transition duration-75 w-full md:w-auto"
            >
              {primaryButton.title}
            </Link>
            <Link
              to={secondaryButton.url}
              className="px-6 py-2 text-blue-600 border border-blue-600 text-center rounded-md text-lg hover:text-blue-950 hover:border-blue-950 w-full md:w-auto"
            >
              {secondaryButton.title}
            </Link>
          </div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-2/3 left-1/3"></div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-2/3 left-2/3"></div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-2/3 -left-1/3"></div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-1/4 left-3/4"></div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-1/4 left-1/4"></div>

          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-0 right-1/2"></div>
          <div className="-z-10 w-24 h-24 bg-gray-100 absolute top-0 left-2/3"></div>
        </div>
      </div>
    );
  }
}

export default Hero;
