import defaultImg from "../assets/background.jpg";
import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames";
import Badge from "./Badge";

function AnnouncementCard({ id, title, category, date, coverImg, className, compact }) {
  // 是否为紧凑模式？ 默认不是
  if (!compact) {
    compact = false;
  }

  const backendBaseUrl = "http://localhost:1337";

  if (!coverImg) {
    coverImg = defaultImg;
  }

  const classnames = classNames(className);

  let info;

  if (compact === false) {
    // 如果不是紧凑模式
    info = (
      <div className="py-3 flex flex-col space-y-3 items-start">
        <div className="flex flex-row justify-between self-stretch">
          <Badge name={category} />
          <p>{dateFormat(date, "paddedShortDate")}</p>
        </div>

        <h2 className="font-bold text-2xl cursor-pointer hover:underline line-clamp-2">{title}</h2>
      </div>
    );
  }
  // 如果是紧凑模式
  else {
    info = (
      <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0 md:space-x-2">
        <div className="flex flex-row space-x-2">
          <Badge name={category} />

          <h2 className="font-bold text-xl cursor-pointer hover:underline line-clamp-1">{title}</h2>
        </div>
        <p>{dateFormat(date, "paddedShortDate")}</p>
      </div>
    );
  }

  return (
    <div className={classnames}>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/announcements/${id}`}
      >
        <img
          className="w-full aspect-[2/1] rounded-xl hover:-translate-y-2 hover:shadow-xl duration-100 cursor-pointer object-cover mb-3"
          src={`${backendBaseUrl}${coverImg}`}
          alt="coverimage"
        />

        {info}
      </Link>
    </div>
  );
}

export default AnnouncementCard;
