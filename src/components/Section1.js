import section1img from "../assets/section1img.jpeg";
import section1img2 from "../assets/section1img2.webp";

import logoAlgolia from "../assets/logo-algolia.svg";
import logoContentful from "../assets/logo-contentful.svg";
import logoShopify from "../assets/logo-shopify.svg";

import { useEffect, useRef } from "react";

function Section1() {
  const imgLeftRef = useRef();
  const imgRightRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const translateLeft = 0.05 * scroll;
      const translateRight = -10 + 0.03 * scroll;

      const scale = 0.2 + 0.001 * scroll;

      if (scale <= 1 && translateLeft < 35) {
        imgRightRef.current.style = `transform: scale(${scale}) translate(${translateRight}%)`;
        imgLeftRef.current.style = `transform: translate(-${translateLeft}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Image container
    <div style={{ height: "60vh" }} className="relative md:mb-40">
      <img
        ref={imgLeftRef}
        className="w-1/3 absolute top-1/3 left-1/3 object-contain"
        src={section1img2}
        alt=""
      />
      <img
        ref={imgRightRef}
        className="w-2/3 md:w-1/2 object-contain absolute top-1/4 left-1/4 shadow-lg"
        style={{ transform: "scale(0.5)" }}
        data-src={section1img}
        src={section1img}
        alt=""
      />
      {/* Image container */}
      <div className="p-2 shadow-md absolute top-1/4 left-3/4 bg-white rounded-md">
        <img className="w-12 h-12" src={logoAlgolia} alt="" />
      </div>
      <div className="p-2 shadow-md absolute top-1/2 left-1/4 bg-white rounded-md">
        <img className="w-12 h-12" src={logoContentful} alt="" />
      </div>
      <div className="p-2 shadow-md absolute right-1/3 bottom-1/4 bg-white rounded-md">
        <img className="w-12 h-12" src={logoShopify} alt="" />
      </div>
    </div>
  );
}

export default Section1;
