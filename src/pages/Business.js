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

import { useLocation } from "react-router-dom";

function Business({ name = "emoji-maker" }) {
  const location = useLocation();

  const path = location.pathname;
  const parts = path.split("/");
  name = parts[parts.length - 1];

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
    contentToRender = (
      <div className="lg:col-span-2 pr-16">
        <Skeleton className="w-full h-full" />
      </div>
    );
  } else {
    console.log(query.data.data.data);
    const {
      attributes: { publishedAt, name, detail, description },
    } = query.data.data.data[0];

    contentToRender = (
      // 主营业务详情页主体
      <div className="lg:col-span-2 md:pr-16 flex flex-col items-start mb-10">
        <h1 className="text-3xl font-semibold mb-4 cursor-pointer line-clamp-2">
          {description}
        </h1>
        {/* 类型、标签和发布日期的 wrapper */}
        <div className="flex flex-col space-y-3 items-start md:flex-row md:space-y-0 md:space-x-5 md:items-center mb-6">
          {/* 类型/标签 的 wrapper */}
          <Badge name={name} />
          <div>发布于 {dateFormat(publishedAt, "paddedShortDate")}</div>
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
        className="md:container mx-6 md:mx-auto mt-5 mb-10"
        items={[
          { name: "首页", url: "/" },
          { name: "主营业务", url: "/businesses" },
        ]}
      />
      <div className="md:container mx-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
