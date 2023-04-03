import { useEffect, useRef, useState } from "react";

export default function Section({ backgroundColor, children }) {
  useEffect(() => {}, []);
  const sliderRef = useRef();

  // const classes = `bg-${backgroundColor}`;

  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    console.log("mouse down!");
    setMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - sliderRef.current.offsetLeft;
    console.log("x", x);
    const scroll = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
    // setScrollLeft(scrollLeft - scroll);
    console.log("sliderRef.current.scrollLeft", sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setMouseDown(false);
  };
  return (
    <div
      className="overflow-scroll scrollbar-hide"
      ref={sliderRef}
      // scrollLeft={scrollLeft}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // className={classes}
    >
      {children}
    </div>
  );
}
