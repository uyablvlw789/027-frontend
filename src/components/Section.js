import { useEffect, useRef, useState } from "react";

export default function Section({ backgroundColor, children }) {
  const sliderRef = useRef();
  const [mouseDown, setMouseDown] = useState(false, { name: "mouseDown" });
  const [startX, setStartX] = useState(0, { name: "startX" });
  const [scrollLeft, setScrollLeft] = useState(0, { name: "scrollLeft" });

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      if (sliderRef.current) {
        sliderRef.current.classList.remove("is-dragging");
      }
    });
  }, [sliderRef]);

  const handleMouseDown = (e) => {
    setMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setMouseDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }

    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
    sliderRef.current.classList.add("is-dragging");
  };
  const handleMouseLeave = () => {
    setMouseDown(false);
  };
  return (
    <div
      className="mx-10 md:overflow-scroll md:scrollbar-hide"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
