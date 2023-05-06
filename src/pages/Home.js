import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import HeadingCount from "../components/HeadingCount";
import ScrollStory from "../components/ScrollStory";
import Section from "../components/Section";
import LargeCard from "../components/LargeCard";

import tongcha from "../assets/tongcha.jpg";
import emoji from "../assets/emoji.png";
import emojiMaker from "../assets/emoji-maker.jpg";
import templateEcommerce from "../assets/template-ecommerce.webp";
import templateContent from "../assets/template-content.webp";
import LatestArticleCards from "../components/LatestArticleCards";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <HeadingCount />
      <ScrollStory />
      <h2 className="m-6 md:m-10 text-5xl">主营业务</h2>
      <Section>
        <div className="flex flex-col gap-6 md:flex-row ">
          <a target="_blank" href="https://ipshu.com" rel="noreferrer">
            <LargeCard
              backgroundImage={templateEcommerce}
              title="新工商-数据商店"
              titleTextTune="light"
              tags={["企业信息查询", "实时更新"]}
            />
          </a>
          <a target="_blank" href="https://ipshu.com" rel="noreferrer">
            <LargeCard
              backgroundImage={templateContent}
              title="IPSHU-路由器"
              titleTextTune="light"
              tags={["IP查询", "归属地"]}
            />
          </a>
          <a target="_blank" href="https://tongchaba.com" rel="noreferrer">
            <LargeCard
              backgroundImage={tongcha}
              title="通查-身份验证"
              tags={["企业信息查询", "个人身份验证"]}
            />
          </a>
          <Link to="/businesses/emoji-maker">
            <LargeCard
              backgroundImage={emojiMaker}
              title="emojiall-emoji maker"
              tags={["emoji maker", "自己制作emoji表情包"]}
            />
          </Link>
        </div>
      </Section>

      <h1 className="m-10 md:mt-20 text-5xl">最新博客</h1>
      <Section>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 mb-3">
          <LatestArticleCards />
        </div>
      </Section>
    </>
  );
}

export default Home;
