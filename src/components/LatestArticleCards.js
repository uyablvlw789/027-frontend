import React from "react";
import ArticleCard from "./ArticleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function LatestArticleCards() {
  const type = "all";
  const start = 0;
  const limit = 4;
  const byLatest = "updatedAt:desc";

  const query = useQuery({
    queryKey: ["announcements", `${type}`, `${start}`, `${limit}`],
    queryFn: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}/announcements`, {
        params: {
          "pagination[start]": start,
          "pagination[limit]": limit,
          // "fields[0]": "title",
          // "fields[1]": "publishedAt",
          // "fields[2]": "type",
          // "fields[3]": "coverimage",
          sort: byLatest,
          populate: "*",
        },
      });
    },
  });

  const { isLoading } = query;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { data: announcements } = query.data.data;

  console.log(announcements);

  return (
    <>
      {announcements.map((announcement) => {
        return (
          <ArticleCard
            key={announcement.id}
            id={announcement.id}
            title={announcement.attributes.title}
            backgroundImage={announcement.attributes.coverimage}
          />
        );
      })}
    </>
  );
}

export default LatestArticleCards;
