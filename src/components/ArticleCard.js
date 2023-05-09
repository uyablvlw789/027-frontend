import { Link } from "react-router-dom";

function ArticleCard({ backgroundImage, title, id }) {
  const {
    data: {
      attributes: { url },
    },
  } = backgroundImage;

  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={`/announcements/${id}`}
      className="w-full md:w-96 aspect-2/1 rounded-md p-4 flex-shrink-0 relative
      cursor-pointer overflow-hidden"
      style={{
        display: "block",
        backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL}${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(45deg, rgb(20 49 130 / 50%) 0%, rgba(37, 38, 43, 0) 100%)",
          backdropFilter: "blur(13px) saturate(160%)",
          color: "white",
        }}
        className="absolute left-0 right-0 bottom-0 p-3 flex flex-row justify-between items-center"
      >
        <h4 className="text-xl line-clamp-1 w-full text-left font-bold">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export default ArticleCard;
