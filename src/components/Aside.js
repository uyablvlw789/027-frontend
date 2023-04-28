import React from "react";
import axios from "axios";
import AnnouncementCard from "./AnnouncementCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

function Aside() {
  const queryString = `${process.env.REACT_APP_API_URL}/announcements`;
  const start = 0;
  const limit = 4;
  const type = "all";

  const byLatest = "publishedAt:desc";

  const query = useQuery({
    queryKey: ["announcements", `${type}`, `${start}`, `${limit}`],
    queryFn: () => {
      return axios.get(queryString, {
        params: {
          "pagination[start]": start,
          "pagination[limit]": limit,
          "fields[0]": "title",
          "fields[1]": "publishedAt",
          "fields[2]": "type",
          "fields[3]": "coverimage",
          sort: byLatest,
          populate: "*",
        },
      });
    },
  });

  let contentToRender;
  if (query.isLoading) {
    contentToRender = new Array(limit).fill(0).map((_) => {
      return <Skeleton className="w-full aspect-2/1 mb-6" />;
    });

    return contentToRender;
  } else {
    const { data: announcements } = query.data.data;
    contentToRender = announcements.map((announcement) => {
      const {
        id,
        attributes: { coverimage, publishedAt, title, type },
      } = announcement;
      console.log(coverimage);
      return (
        <AnnouncementCard
          className="mb-6"
          id={id}
          title={title}
          category={type}
          date={publishedAt}
          coverImg={coverimage.data.attributes.url}
          compact={true}
        />
      );
    });

    return (
      <aside>
        <h1 className="text-3xl mb-4">Latest Posts</h1>
        {contentToRender}
      </aside>
    );
  }
}

export default Aside;
