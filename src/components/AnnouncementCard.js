import defaultImg from "../assets/background.jpg";
import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";

function AnnouncementCard({ id, title, category, date, coverImg }) {
  const backendBaseUrl = "http://localhost:1337";

  if (!coverImg) {
    coverImg = defaultImg;
  }

  return (
    <div>
      <img
        className="rounded-xl w-full hover:-translate-y-2 hover:shadow-xl duration-100 cursor-pointer"
        src={`${backendBaseUrl}${coverImg}`}
        alt="coverimage"
      />
      <div className="py-3 flex flex-col space-y-3 items-start">
        <div className="flex flex-row justify-between self-stretch">
          <p className="bg-black text-white rounded-full px-2 hover:underline cursor-pointer">
            {category}
          </p>
          <p>{dateFormat(date, "paddedShortDate")}</p>
        </div>
        <Link to={`/announcements/${id}`}>
          <h2 className="font-bold text-2xl cursor-pointer hover:underline">{title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default AnnouncementCard;
