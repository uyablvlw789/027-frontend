import { BiLinkExternal } from "react-icons/bi";
function ArticleCard({ backgroundImage, title }) {
  return (
    <div
      className="mr-3 h-36 w-80 rounded-md p-4 flex-shrink-0"
      style={{
        display: "block",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full">
        <div className="bottom-2 flex flex-row justify-between items-center w-full self-end">
          <p className=" text-white">{title}</p>
          <div>
            <BiLinkExternal className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
