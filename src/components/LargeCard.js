import { BiLinkExternal } from "react-icons/bi";
function LargeCard({ backgroundImage, title, tags }) {
  return (
    <div
      className="w-full aspect-5/3 md:h-72 md:w-120 rounded-md p-4 flex-shrink-0 cursor-pointer"
      style={{
        display: "block",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-full justify-between">
        <div className="bottom-2 flex flex-col self-end">
          <p className="text-white mb-3 text-2xl md:text-4xl font-bold">{title}</p>
          <div className="flex">
            <div className="text-white border border-white px-1 py-0 mr-2 rounded-md">
              {tags[0]}
            </div>
            <div className="text-white border border-white px-1 py-0 mr-2 rounded-md">
              {tags[1]}
            </div>
          </div>
        </div>
        <div className="self-start">
          <BiLinkExternal className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
