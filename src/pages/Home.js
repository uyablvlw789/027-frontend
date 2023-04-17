import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import HeadingCount from "../components/HeadingCount";
import ScrollStory from "../components/ScrollStory";
import Section from "../components/Section";
import LargeCard from "../components/LargeCard";

import tongcha from "../assets/tongcha.jpg";
import emoji from "../assets/emoji.png";

import templateEcommerce from "../assets/template-ecommerce.webp";
import templateContent from "../assets/template-content.webp";
import ArticleCard from "../components/ArticleCard";

function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <HeadingCount />
      <ScrollStory />
      <h1 className="m-10 text-5xl">我们的项目</h1>
      <Section>
        <div className="flex flex-col gap-6 md:flex-row">
          <a target="_blank" href="https://ipshu.com" rel="noreferrer">
            <LargeCard
              backgroundImage={templateEcommerce}
              title="Build a global commerce site"
              tags={["Nuxt", "Shopify"]}
            />
          </a>
          <a target="_blank" href="https://ipshu.com" rel="noreferrer">
            <LargeCard
              backgroundImage={templateContent}
              title="Build a content site"
              tags={["Next.js", "Contentful"]}
            />
          </a>
          <a target="_blank" href="https://tongchaba.com" rel="noreferrer">
            <LargeCard backgroundImage={tongcha} title="通查" tags={["查询", "信息服务"]} />
          </a>
          <a target="_blank" href="https://emojiall.com" rel="noreferrer">
            <LargeCard
              backgroundImage={emoji}
              title="emojiall.com"
              tags={["emoji辞典", "emoji资讯"]}
            />
          </a>
        </div>
      </Section>
      <h1 className="m-10 text-5xl">最新博客</h1>
      <Section>
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 mb-3">
          <ArticleCard backgroundImage={templateEcommerce} title="lorem" />
          <ArticleCard backgroundImage={templateContent} title="lorem" />
          <ArticleCard backgroundImage={templateEcommerce} title="lorem" />
          <ArticleCard backgroundImage={templateContent} title="lorem" />
        </div>
      </Section>
    </>
  );
}

export default Home;
