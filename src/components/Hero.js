import { useEffect, useRef } from "react";
import hero1 from "../assets/hero-1.webp";
import hero2 from "../assets/section1img.webp";
import hero31 from "../assets/hero-3-1.webp";

import Parallax from "parallax-js";

function Hero() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useEffect(() => {
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
  }, [ref1, ref2, ref3]);

  return (
    <div className="-mt-16 md:-mt-24">
      <div id="scene" className="absolute h-screen inset-0">
        <div ref={ref1} className="absolute w-1/3 top-36 -left-24">
          <img src={hero1} data-depth="0.4" alt="" />
        </div>
        <div ref={ref2} className="absolute w-1/3  top-1/3 right-0">
          <img data-depth="0.4" src={hero2} alt="" />
        </div>
        <div ref={ref3} className="absolute w-1/2 top-3/4 -left-32">
          <img className="absolute top-2/3 left-1/2" src={hero31} data-depth="0.4" alt="" />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Bring it all together</h1>
        <h2 className=" tracking-tight leading-tight md:leading-normal md:tracking-normal text-2xl w-1/2 text-center mb-6">
          The fastest way to combine your favorite tools and APIs to build the fastest sites,
          stores, and apps for the web.
        </h2>
        <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-y-0 md:space-x-3 ">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-800 transition duration-75">
            Get started for free
          </button>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md text-lg">
            Request demo
          </button>
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

export default Hero;
