import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import Badge from "../components/Badge";
import { Breadcrumb } from "../components/Breadcumb";
import Skeleton from "react-loading-skeleton";
import dateFormat from "dateformat";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { replaceImagePaths } from "../utils/ReplaceImagePath";
import Aside from "../components/Aside";

function Business({ name }) {
  const query = useQuery({
    queryKey: ["business", name],
    queryFn: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}/businesses`, {
        params: { "filters[name][$eq]": name },
      });
    },
  });

  let contentToRender;

  if (query.isLoading) {
    contentToRender = <div>loading</div>;
  } else {
    console.log(query.data.data.data);
    const {
      attributes: { publishedAt, name, detail, description },
    } = query.data.data.data[0];

    contentToRender = (
      // 博客内容主体
      <div className="lg:col-span-2 md:pr-16 flex flex-col items-start mb-10">
        <h1 className="text-3xl font-semibold mb-4 cursor-pointer line-clamp-2">{description}</h1>
        {/* 类型、标签和发布日期的 wrapper */}
        <div className="flex flex-row space-x-5 items-center mb-6">
          {/* 类型/标签 的 wrapper */}
          <Badge name={name} />
          <div>Published at {dateFormat(publishedAt, "paddedShortDate")}</div>
        </div>
        <div className="prose prose-p:text-gray-600 max-w-none">
          <ReactMarkdown>{replaceImagePaths(detail)}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        className="mx-10 md:mx-20 mt-5 mb-10"
        items={[
          { name: "首页", url: "/" },
          { name: "主营业务", url: "/businesses" },
        ]}
      />
      <div className="m-10 md:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contentToRender}
        {/* 侧边栏 wrapper */}
        <div className="lg:col-span-1">
          <Aside />
        </div>
      </div>
    </>
  );
}

export default Business;
