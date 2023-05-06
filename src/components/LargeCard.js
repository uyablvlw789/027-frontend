import { BiLinkExternal } from "react-icons/bi";
function LargeCard({ backgroundImage, title, tags, titleTextTune }) {
  return (
    <div
      className="w-full aspect-5/3 md:h-72 md:w-120 rounded-md p-4 flex-shrink-0 cursor-pointer bg-opacity-60 relative"
      style={{
        display: "block",
        backgroundImage: `url(${backgroundImage})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="absolute inset-0 w-full h-full bg-white bg-opacity-30"></div>
      <div className="flex h-full w-full justify-between">
        <div className="bottom-2 flex flex-col self-end">
          <p
            className={`${
              titleTextTune === "light" ? "text-gray-50" : "text-gray-700"
            } mb-3 text-2xl md:text-4xl font-bold filter-none z-10`}
          >
            {title}
          </p>
          <div className="flex">
            <div
              className={`border ${
                titleTextTune === "light"
                  ? "text-gray-50 border-gray-50"
                  : "text-gray-700 border-gray-700"
              } px-1 py-0 mr-2 rounded-md z-10`}
            >
              {tags[0]}
            </div>
            <div
              className={`border ${
                titleTextTune === "light"
                  ? "text-gray-50 border-gray-50"
                  : "text-gray-700 border-gray-700"
              }  px-1 py-0 mr-2 rounded-md z-10`}
            >
              {tags[1]}
            </div>
          </div>
        </div>
        <div className="self-start">
          <BiLinkExternal
            className={`${titleTextTune === "light" ? "text-white" : "text-gray-600"} text-3xl`}
          />
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
