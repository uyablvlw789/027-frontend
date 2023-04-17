import axios from "axios";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";

import { useParams } from "react-router-dom";

function Announcement() {
  const param = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnnoucement = async () => {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:1337/api/announcements/${param.id}`);
      setIsLoading(false);
      setData(res.data);
    };
    getAnnoucement();
  }, []);

  console.log(data);

  if (isLoading) {
    return <div>is Loading!!!</div>;
  }

  const {
    data: {
      attributes: { title, publishedAt, type, content },
    },
  } = data;

  return (
    <div className="m-10 md:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <article className="lg:col-span-2 p-3 flex flex-col space-y-3 items-start">
        <p className=" rounded-lg bg-black text-white px-1">{type}</p>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p>{content}</p>
      </article>
      <aside className="lg:col-span-1 p-3">
        <p>
          Published at <span>{dateFormat(publishedAt, "paddedShortDate")}</span>{" "}
        </p>
      </aside>
    </div>
  );
}

export default Announcement;
