import { useEffect, useRef } from "react";

const HeadingCount = () => {
  const numberRef = useRef(null);

  useEffect(() => {
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log("[HeadingCount] entry is Intersecting");
        animateValue(numberRef.current, 0, 1500000000, 3000);
        observer.unobserve(numberRef.current);
      }
    }, options);

    observer.observe(numberRef.current);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row space-x-5 mb-16  -mt-10">
      <span
        ref={numberRef}
        className="text-4xl font-semibold md:text-6xl"
        style={{
          background: "linear-gradient(90.05deg,#149cab -43.75%,#1b205b 45.9%,#783afa 123.14%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        0
      </span>
      <span className="type-a type-a-2 text-xl font-semibold">
        累计
        <br className="hidden md:block " />
        浏览人次
      </span>
    </div>
  );
};

export default HeadingCount;
