import { useQuery } from "@tanstack/react-query";
import { replaceImagePaths } from "../utils/ReplaceImagePath";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import { Breadcrumb } from "../components/Breadcumb";
import Aside from "../components/Aside";

import axios from "axios";
import React from "react";

function About() {
  const query = useQuery({
    queryKey: ["about"],
    queryFn: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}/about`, {
        params: {
          populate: "*",
        },
      });
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
    console.log(query.data.data);
    const {
      data: {
        attributes: { content },
      },
    } = query.data.data;

    contentToRender = (
      // 博客内容主体
      <div className="lg:col-span-2 md:pr-16 flex flex-col items-start mb-10">
        <div className="prose max-w-none">
          <ReactMarkdown>{replaceImagePaths(content)}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        className="mx-10 md:mx-20 mt-5 mb-10"
        items={[
          { name: "home", url: "/" },
          { name: "关于", url: "/about" },
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

export default About;
