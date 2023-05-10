import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import AnnouncementCard from "../components/AnnouncementCard";
import { Breadcrumb } from "../components/Breadcumb";
import Skeleton from "react-loading-skeleton";

function Businesses() {
  const query = useQuery({
    queryKey: ["business"],
    queryFn: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}/businesses`, {
        params: {
          populate: "*",
        },
      });
    },
  });

  const { data, isLoading, isError, error } = query;

  let content;

  if (isError) content = <>isError</>;
  else if (isLoading)
    content = content = new Array(6).fill(0).map((_, index) => {
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
  else {
    const businesses = data.data.data;

    content = businesses.map((business) => {
      const { name, picture, description } = business.attributes;
      return (
        <AnnouncementCard
          key={business.id}
          type="businesses"
          id={business.id}
          category={name}
          title={description}
          coverImg={picture.data.attributes.formats.small.url}
        />
      );
    });
  }

  return (
    <>
      <Breadcrumb
        className="md:container mx-6 md:mx-auto mt-5 mb-10"
        items={[
          { name: "home", url: "/" },
          { name: "主营业务", url: "/businesses" },
        ]}
      />
      <div className="md:container mx-6 md:mx-auto">
        <h1 className="text-3xl font-bold mb-10">主营业务</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-3">
          {content}
        </div>
      </div>
    </>
  );
}

export default Businesses;
