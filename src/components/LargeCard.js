import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
function LargeCard({
  backgroundImage,
  title,
  tags,
  titleTextTune,
  detailLink,
  hyperLink,
}) {
  return (
    <div
      className="group w-full aspect-5/3 md:h-72 md:w-120 rounded-md p-4 flex-shrink-0 cursor-pointer bg-opacity-60 relative "
      style={{
        display: "block",
        backgroundImage: `url(${backgroundImage})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="absolute inset-0 w-full h-full bg-white bg-opacity-20 pointer-events-none group-hover:bg-opacity-10"></div>
      <div className="flex h-full w-full justify-between">
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={detailLink}
          className="flex flex-1"
        >
          <div className="bottom-2 flex flex-col self-end">
            <p
              className={`border-2 border-transparent rounded-md ${
                titleTextTune === "light"
                  ? "text-white  group-hover:border-white"
                  : "text-gray-700 group-hover:border-gray-700"
              } p-1 mb-3 text-2xl md:text-4xl font-bold filter-none z-10`}
            >
              {title}
            </p>
            <div className="flex">
              <div
                className={`border ${
                  titleTextTune === "light"
                    ? "text-white border-gray-50"
                    : "text-gray-700 border-gray-700"
                } px-1 py-0 mr-2 rounded-md z-10`}
              >
                {tags[0]}
              </div>
              <div
                className={`border ${
                  titleTextTune === "light"
                    ? "text-white border-gray-50"
                    : "text-gray-700 border-gray-700"
                }  px-1 py-0 mr-2 rounded-md z-10`}
              >
                {tags[1]}
              </div>
            </div>
          </div>
        </Link>

        <div className="self-start">
          <a href={hyperLink} target="_blank">
            <BiLinkExternal
              className={`${
                titleTextTune === "light"
                  ? "text-gray-50 hover:text-white"
                  : "text-gray-800 hover:text-gray-900"
              } text-3xl`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
