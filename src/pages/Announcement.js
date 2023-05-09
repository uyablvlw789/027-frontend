import axios from "axios";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";

import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Breadcrumb } from "../components/Breadcumb";
import Skeleton from "react-loading-skeleton";

import { useQuery } from "@tanstack/react-query";
import { replaceImagePaths } from "../utils/ReplaceImagePath";
import Badge from "../components/Badge";
import Aside from "../components/Aside";

function Announcement() {
  const param = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryString = `${process.env.REACT_APP_API_URL}/announcements`;

  const id = Number.parseInt(param.id);

  const query = useQuery({
    queryKey: ["announcements", id],
    queryFn: () => {
      return axios.get(`${queryString}/${id}`);
    },
    staleTime: 6 * 1000 * 50,
  });

  let contentToRender;

  if (query.isLoading) {
    contentToRender = (
      <div className="lg:col-span-2 pr-16">
        <Skeleton className="w-full h-full" />;
      </div>
    );
  } else {
    const {
      data: {
        attributes: { title, publishedAt, type, content },
      },
    } = query.data.data;

    contentToRender = (
      // 博客内容主体
      <div className="lg:col-span-2 md:pr-16 flex flex-col items-start mb-10">
        <h1 className="text-3xl font-semibold mb-4 cursor-pointer">{title}</h1>
        {/* 类型、标签和发布日期的 wrapper */}
        <div className="flex flex-row space-x-5 items-center mb-6">
          {/* 类型/标签 的 wrapper */}
          <Badge name={type} />
          <div>Published at {dateFormat(publishedAt, "paddedShortDate")}</div>
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{replaceImagePaths(content)}</ReactMarkdown>
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
          { name: "通知公告", url: "/announcements" },
          {
            name: query.data && query.data.data.data.attributes.title,
            url: query.data && `/announcements/${query.data.data.data.id}`,
          },
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

export default Announcement;
