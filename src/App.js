import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Header from "./components/Header";
import ArticleCard from "./components/ArticleCard";
import blogImage1 from "./assets/blog-image-1.jpeg";
import blogImage2 from "./assets/blog-image-2.webp";
import blogImage3 from "./assets/blog-image-3.webp";
function App() {
  return (
    <>
      <Header />
      {/* Main content goes here */}
      <Main />
      <Section backgroundColor="blue-200">
        <div className="flex">
          <ArticleCard backgroundImage={blogImage1} title="使用劲捷CLI从终端管理环境变量" />
          <ArticleCard
            backgroundImage={blogImage2}
            title="新命令面板可帮助您在劲捷UI中更快地工作"
          />
          <ArticleCard
            backgroundImage={blogImage2}
            title="新命令面板可帮助您在劲捷UI中更快地工作"
          />
          <ArticleCard
            backgroundImage={blogImage3}
            title="Quirrel 加入劲捷并在 Beta 版中推出预定功能"
          />
          <ArticleCard
            backgroundImage={blogImage3}
            title="Quirrel 加入劲捷并在 Beta 版中推出预定功能"
          />
          <ArticleCard
            backgroundImage={blogImage3}
            title="Quirrel 加入劲捷并在 Beta 版中推出预定功能"
          />
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default App;
