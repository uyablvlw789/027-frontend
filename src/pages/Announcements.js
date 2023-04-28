import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";

import AnnouncementCard from "../components/AnnouncementCard";

import Pagination from "../components/Pagination";
import { useSearchParams, useLocation } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Breadcrumb } from "../components/Breadcumb";

const options = [
  { value: "blog", label: "blogs & articles" },
  { value: "news", label: "news & announcements" },
  { value: "all", label: "all" },
];

function Announcements() {
  let location = useLocation();
  useEffect(() => {
    setCurrentPage(Number.parseInt(searchParams.get("page") || 1));
    setSelectedOption(
      options.find((option) => option.value === searchParams.get("type")) || options[2]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === searchParams.get("type")) || options[2]
  );

  // States for pagination
  const [currentPage, setCurrentPage] = useState(Number.parseInt(searchParams.get("page")) || 1);

  // 每页显示多少篇文章，当前六页
  const [postPerPage, setpostPerPage] = useState(6);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ type: selectedOption.value, page: newPage });
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1);
    setSearchParams({ type: option.value, page: 1 });
  };

  // base query string
  let queryString = `${process.env.REACT_APP_API_URL}/announcements`;

  const start = (currentPage - 1) * postPerPage;
  const limit = postPerPage;

  const query = useQuery({
    queryKey: ["announcements", `${selectedOption.value}`, `${start}`, `${limit}`],
    queryFn: () => {
      if (selectedOption.value === "all") {
        return axios.get(queryString, {
          params: {
            "pagination[start]": start,
            "pagination[limit]": limit,
            "fields[0]": "title",
            "fields[1]": "publishedAt",
            "fields[2]": "type",
            "fields[3]": "coverimage",
            populate: "*",
          },
        });
      } else {
        return axios.get(queryString, {
          params: {
            "pagination[start]": start,
            "pagination[limit]": limit,
            "fields[0]": "title",
            "fields[1]": "publishedAt",
            "fields[2]": "type",
            "fields[3]": "coverimage",
            populate: "*",
            "filters[type][$eq]": selectedOption.value,
          },
        });
      }
    },
    staleTime: 6 * 1000 * 50,
  });

  //将要被渲染在主区域的内容
  let content;

  // 一共有多少页
  let pageCount;

  const { isLoading } = query;

  // 如果正在加载，则只显示骨架loader
  if (isLoading) {
    content = new Array(postPerPage).fill(0).map((_, index) => {
      return (
        <div key={index}>
          <Skeleton className="w-full aspect-[2/1] rounded-xl" />
          <div className="w-full py-3 flex flex-col space-y-3">
            <Skeleton className="w-full aspect-[12/1]" />
            <Skeleton className="w-full aspect-[8/1]" />
          </div>
        </div>
      );
    });
  } else {
    const announcements = query.data.data.data;
    pageCount = query.data.data.meta.pagination.total;

    const filterType = (announcement) => {
      if (selectedOption.value === "all") {
        return announcement;
      }
      return announcement.attributes.type === selectedOption.value;
    };
    const AnnouncemenceList = announcements.filter(filterType).map((announcement) => {
      const {
        title,
        publishedAt,
        type,
        coverimage: {
          data: {
            attributes: { url },
          },
        },
      } = announcement.attributes;
      return (
        <AnnouncementCard
          id={announcement.id}
          key={announcement.id}
          title={title}
          category={type}
          date={publishedAt}
          coverImg={url}
          compact={false} // 不是紧凑模式
        />
      );
    });
    content = AnnouncemenceList;
  }

  return (
    <>
      <Breadcrumb
        className="mx-10 md:mx-20 mt-5 mb-10"
        items={[
          { name: "home", url: "/" },
          { name: "announcements", url: "/announcements" },
        ]}
      />
      <div className="mx-10 md:mx-20">
        <h1 className="text-3xl font-bold mb-10">Blogs and Annoucements</h1>
        <p className="font-semibold text-xl mb-3">Please select category</p>
        <Select
          className="md:w-1/2 lg:w-1/3 mb-10"
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              borderColor: isFocused ? "#fff" : "gray",
            }),
            option: (baseStyles, { isDisabled, isSelected, isFocused }) => ({
              ...baseStyles,
              backgroundColor: isDisabled
                ? undefined
                : isSelected
                ? "#ddd"
                : isFocused
                ? "#eee"
                : undefined,
              color: "#000",
            }),
          }}
          defaultValue={selectedOption}
          onChange={handleSelectChange}
          options={options}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-3">{content}</div>
        <Pagination
          selectedOption={selectedOption}
          totalPosts={pageCount}
          postPerPage={postPerPage}
          setCurrentPage={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Announcements;
