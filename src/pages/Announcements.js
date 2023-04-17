import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Select from "react-select";

import AnnouncementCard from "../components/AnnouncementCard";

import Pagination from "../components/Pagination";

const options = [
  { value: "blog", label: "blogs & articles" },
  { value: "news", label: "news & announcements" },
  { value: "all", label: "all" },
];

function Announcements() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(options[2]);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setCurrentPage(1);
  };

  useEffect(() => {
    async function fetchData() {
      const start = (currentPage - 1) * postPerPage;
      const limit = postPerPage;

      let queryString = "http://localhost:1337/api/announcements";

      if (selectedOption.value === "all") {
        queryString = `${queryString}?pagination[start]=${start}&pagination[limit]=${limit}&populate=*`;
      } else {
        queryString = `${queryString}?filters[type][$eq]=${selectedOption.value}&pagination[start]=${start}&pagination[limit]=${limit}&populate=*`;
      }

      setIsLoading(true);

      const res = await axios.get(queryString);

      setIsLoading(false);

      setData(res.data.data);

      setPageCount(res.data.meta.pagination.total);
    }

    fetchData();
  }, [currentPage, postPerPage, selectedOption]);

  if (isLoading) {
    return <h1>Loading!</h1>;
  }

  const announcements = data;
  console.log(announcements);

  const filterType = (announcement) => {
    if (selectedOption.value === "all") {
      return announcement;
    }
    return announcement.attributes.type === selectedOption.value;
  };

  const AnnouncemenceList = announcements.filter(filterType).map((announcement) => {
    const {
      title,
      content,
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
        content={content}
        category={type}
        date={publishedAt}
        coverImg={url}
      />
    );
  });
  console.log(AnnouncemenceList.length);
  return (
    <div className="m-10 md:m-20">
      <h1 className="text-3xl font-bold mb-10">Blogs and Annoucements</h1>
      <p className="font-semibold text-xl mb-3">Please select category</p>
      <Select
        className="md:w-1/4 mb-10"
        defaultValue={selectedOption}
        onChange={handleSelectChange}
        options={options}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-3">
        {AnnouncemenceList}
      </div>
      <Pagination
        totalPosts={pageCount}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Announcements;
