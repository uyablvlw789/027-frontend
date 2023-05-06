import TestimonialBox from "./TestimonialBox";
import HomeFeature from "./HomeFeature";
import rabbit from "../assets/rabbit.jpg";
import YasharAvatar from "../assets/beautiful-flowers.jpg";
import AliciaAvatar from "../assets/lighthouse.jpg";
import flowersAvatar from "../assets/flowers.jpg";

import { useEffect, useRef, useState } from "react";
import scrollStoryImg1 from "../assets/mingluji.jpg";
import scrollStoryImg2 from "../assets/emoji-animate.svg";
import scrollStoryImg3 from "../assets/ipshu.jpg";
import scrollStoryImg4 from "../assets/tongcha.jpg";

// testimonial 数据
const testimonialData = [
  {
    personName: "小兔",
    personDetail: "北京市海淀区",
    avatar: rabbit,
    quote:
      "这个网站真的很好用，我可以找到很多国内外的企业信息，购买过一些行业数据和分析报告，对我做市场调研很有帮助。网站的界面也很清晰，操作也很简单，推荐给大家",
  },
  {
    personName: "秋刀鱼的滋味",
    personDetail: "广东",
    avatar: YasharAvatar,
    quote:
      "我是一个emoji的超级粉丝，我喜欢在网络社交时使用很多emoji，排行榜让我知道了很多emoji流行梗的玩法。emojiall非常棒，搜索和复制、查意思都很方便，还可以玩一些有趣的emoji游戏，和其他emoji爱好者交流评论，感觉很有趣",
  },
  {
    personName: "大江大海",
    personDetail: "江苏",
    avatar: AliciaAvatar,
    quote:
      "ipshu是我经常使用的一个网站。可以查询IP地址的相关信息，比如位置、归属、运营商、黑名单等。它还提供了一些路由和IP相关文章，让我了解了很多互联网知识。它是一个专业的IP地址查询工具网站，值得推荐",
  },
  {
    personName: "夏のひまわり",
    personDetail: "湖北",
    avatar: flowersAvatar,
    quote:
      "通查是一个非常实用和有价值的信息查询平台。我经常用它来做背景调查和信用评估。查询企业的工商信息、法人信息、法院判决书、信贷风险等，很方便快捷，值得信赖",
  },
];
// home feature 数据
const homeFeatureData = [
  {
    title: "名录集",
    subtitle: "Business directory and yellow pages platform",
    description:
      "名录集是一个企业黄页及名录网站，提供上亿条企业名录、供求信息，涵盖几十个大行业分类、数千个小领域分类，覆盖到200多个国家和地区。它还提供实时数据查询平台、企业风险调查报告、企业行业数据商店等增值服务，帮助你更好地了解企业的背景、信誉、风险和发展状况。",
    cfa: { isButton: true, content: "浏览网站", address: "https://gongshang.mingluji.com/" },
  },
  {
    title: "EMOJIALL",
    subtitle: "Emoji dictionary and interactive platform",
    description:
      "EMOJIALL是一个多语言的Emoji表情词典网站，提供了每个Emoji表情符号的含义、用法、图片、排行榜、情绪分析等功能。可以轻松的复制和粘贴Emoji表情，或者下载不同平台上的Emoji图片。还有一些有趣和创新的特色，比如Emoji的游戏、制作表情包、翻译器、表情融合、关系图、标签云等，让你更深入的了解和玩转Emoji表情符号。",
    cfa: { isButton: false, content: "浏览网站", address: "https://emojiall.com" },
  },
  {
    title: "IPSHU",
    subtitle: "Fast, resilient network for web apps.",
    description:
      "IPSHU是一个专业的IP地址查询工具网站，提供最新的IP地址数据库、我的IP地址查询、许多IP工具和技术知识。你可以在ipshu.com查询任何IP地址的位置、归属、运营商、黑名单等信息，或者测试你的网络速度、路由器地址、DNS服务器等。它还提供WHOIS信息查询、IP、路由器相关文章等增值服务，帮助你更好地保护你的在线隐私和安全。",
    cfa: { isButton: true, content: "浏览网站", address: "https://ipshu.com" },
  },
  {
    title: "通查",
    subtitle: "Comprehensive business information query platform",
    description:
      "通查是一个提供企业信息查询和信息验证的综合信息查询平台。可以在tongchaba.com查询企业的工商信息、法人信息、法院判决书、被执行人信息等，或者查询手机号使用时长、信贷风险等。通查的数据来源于权威机构和实时更新，保证了数据的准确性和时效性，帮助你更好地了解企业和个人的背景和信用状况。",
    cfa: { isButton: true, content: "浏览网站", address: "https://tongchaba.com" },
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

  let backgroundColor = "rgb(54, 120,246)";

  if (scrollValue > 0) {
    const r = 59 - 0.004 * scrollValue;
    const g = 130 - 0.004 * scrollValue;
    const b = 246 + 0.006 * scrollValue;
    backgroundColor = `rgb(${r}, ${g},${b})`;
  }

  let img1TransformY;

  let img1TransformYOffset = 0;

  if (img1TransformYOffset - 0.15 * scrollValue > -50) {
    img1TransformY = img1TransformYOffset - 0.15 * scrollValue;
  } else {
    img1TransformY = -50;
  }
  let img1scale = img1TransformY < -30 ? 1 + img1TransformY * 0.0003 : 1;

  let img2TransformY;
  let img2TransformYOffset = 150;
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
      <div className="m-6 md:m-10 grid grid-cols-1 gap-10 mb-60 lg:grid-cols-2">
        {/* Left side */}

        <div className="min-h-screen flex flex-col space-y-60 mt-20 md:space-y-30 md:mt-80 md:pb-120">
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

          <HomeFeature {...homeFeatureData[3]} />
          <TestimonialBox {...testimonialData[3]} />
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
