import TestimonialBox from "./TestimonialBox";
import HomeFeature from "./HomeFeature";
import ericaAvatar from "../assets/peter.png";
import YasharAvatar from "../assets/YasharAvatar.webp";
import AliciaAvatar from "../assets/AliciaAvatar.webp";

import { useEffect, useRef, useState } from "react";
import scrollStoryImg1 from "../assets/scrollstoryImg1.png";
import scrollStoryImg2 from "../assets/hero-1.webp";
import scrollStoryImg3 from "../assets/scrollStoryImg3.png";
import scrollStoryImg4 from "../assets/scrollStoryImg4.png";

const testimonialData = [
  {
    personName: "Erin Kissane",
    personDetail: "CO-FOUNDER, THE COVID TRACKING PROJECT",
    avatar: ericaAvatar,
    quote:
      "There isn't any way we could have developed our site in the time we did without Netlify",
  },
  {
    personName: "Yashar Rassoulli",
    personDetail: "CTO, MYPLANET",
    avatar: YasharAvatar,
    quote:
      "Using Next.js with Netlify, our customer eased their web team's workflow and saw better overall performance.",
  },
  {
    personName: "Alicia Samuel",
    personDetail: "VICE PRESIDENT OF INFORMATION TECHNOLOGY, LONGO'S",
    avatar: AliciaAvatar,
    quote:
      "Our website is more flexible and reliable, and performs three times faster than before.",
  },
];

const homeFeatureData = [
  {
    title: "An exciting development for local development",
    subtitle: "Netlify’s full platform in your terminal.",
    description:
      "Spin up a project in seconds, configure your build, test edge and serverless functions, and deploy globally — all from your command line.",
    cfa: { isButton: true, content: "Launch Your Project now" },
  },
  {
    title: "Build with anything, connect to everything",
    subtitle: "All your tools. All your data. Together.",
    description:
      "With first-class support for every modern web framework and a broad ecosystem of API integrations, Netlify helps you build any kind of site or app you can imagine using the best tools for the job.",
    cfa: { isButton: false, content: "Explore our integrations" },
  },
  {
    title: "Time to deploy: Push to Git, and that's it",
    subtitle: "Fast, resilient network for web apps.",
    description:
      "Every deploy publishes your apps to be served across all of our global edge locations. Your own web servers and CDN are no longer required.",
    cfa: { isButton: true, content: "Get started for free" },
  },
];

function ScrollStory() {
  const [initialScrollY, setInitialScrollY] = useState(0);

  const [scrollValue, setScrollValue] = useState(0);

  const elementRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      if (initialScrollY !== 0) {
        setScrollValue(window.scrollY - initialScrollY);
      }
    };

    setInitialScrollY(elementRef.current.offsetTop);

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [initialScrollY]);

  let backgroundColor = "rgb(59, 130,246)";

  if (scrollValue > 0) {
    const r = 59 - 0.05 * scrollValue;
    const g = 130 - 0.05 * scrollValue;
    const b = 246 + 0.2 * scrollValue;
    backgroundColor = `rgb(${r}, ${g},${b})`;
  }

  let img1TransformY;

  let img1TransformYOffset = 50;

  if (img1TransformYOffset - 0.15 * scrollValue > -50) {
    img1TransformY = img1TransformYOffset - 0.15 * scrollValue;
  } else {
    img1TransformY = -50;
  }
  let img1scale = img1TransformY < -30 ? 1 + img1TransformY * 0.0003 : 1;

  let img2TransformY;
  let img2TransformYOffset = 180;
  if (img2TransformYOffset - 0.15 * scrollValue > -50) {
    img2TransformY = img2TransformYOffset - 0.15 * scrollValue;
  } else {
    img2TransformY = -50;
  }
  let img2scale = img2TransformY < -30 ? 1 + img2TransformY * 0.0003 : 1;

  let img3TransformY;
  let img3TransformYOffset = 300;
  if (img3TransformYOffset - 0.15 * scrollValue > -50) {
    img3TransformY = img3TransformYOffset - 0.15 * scrollValue;
  } else {
    img3TransformY = -50;
  }

  let img3scale = img3TransformY < -30 ? 1 + img3TransformY * 0.0003 : 1;

  let img4TransformY;
  let img4TransformYOffset = 450;
  if (img4TransformYOffset - 0.15 * scrollValue > -50) {
    img4TransformY = img4TransformYOffset - 0.15 * scrollValue;
  } else {
    img4TransformY = -50;
  }

  let img4scale = img4TransformY < -30 ? 1 + img4TransformY * 0.0003 : 1;

  return (
    <div ref={elementRef}>
      <div className="m-10 md:m-20 grid grid-cols-1 gap-10 mb-60 lg:grid-cols-2">
        {/* Left side */}

        <div className="min-h-screen flex flex-col space-y-20 mt-20 md:space-y-120 md:mt-120 md:pb-120">
          <HomeFeature {...homeFeatureData[0]} />
          {/* Testimonial */}
          <TestimonialBox {...testimonialData[0]} />
          <img className="md:hidden rounded-lg" src={scrollStoryImg1} alt="" />
          <HomeFeature {...homeFeatureData[1]} />
          <TestimonialBox {...testimonialData[1]} />
          <img className="md:hidden rounded-lg" src={scrollStoryImg2} alt="" />

          <HomeFeature {...homeFeatureData[2]} />
          <TestimonialBox {...testimonialData[2]} />
          <img className="md:hidden rounded-lg" src={scrollStoryImg3} alt="" />
        </div>
        {/* Right side */}
        <div
          style={{ background: backgroundColor }}
          className="hidden md:block rounded-3xl sticky top-32 mt-32 self-start h-128 overflow-hidden"
        >
          {/* scroll story image 1 */}
          <img
            style={{
              transform: `translate(-50%, ${img1TransformY}%) scale(${img1scale})`,
            }}
            className="absolute top-1/2 left-1/2 w-4/5"
            src={scrollStoryImg1}
            alt=""
          />
          {/* scroll story image 2 */}
          <img
            style={{ transform: `translate(-50%, ${img2TransformY}%) scale(${img2scale})` }}
            className="absolute top-1/2 left-1/2 w-4/5"
            src={scrollStoryImg2}
            alt=""
          />
          {/* scroll story image 3 */}
          <img
            style={{ transform: `translate(-50%, ${img3TransformY}%) scale(${img3scale})` }}
            className="absolute top-1/2 left-1/2 w-4/5"
            src={scrollStoryImg3}
            alt=""
          />
          {/* scroll story image 4 */}
          <img
            style={{ transform: `translate(-50%, ${img4TransformY}%) scale(${img4scale})` }}
            className="absolute top-1/2 left-1/2 w-4/5"
            src={scrollStoryImg4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollStory;
