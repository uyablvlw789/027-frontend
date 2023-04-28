import erica from "../assets/erica.webp";

function TestimonialBox({ personName, personDetail, avatar, quote }) {
  if (!personName) {
    personName = "Erica";
  }
  if (!personDetail) {
    personDetail = "co-founder, the covid tracking project";
  }
  if (!avatar) {
    avatar = erica;
  }
  if (!quote) {
    quote =
      "There isn't any way we could have developed our site in the time we did without Netlify";
  }

  return (
    <div className="bg-gray-100 rounded-2xl shadow-sm flex flex-col space-y-2 px-6 py-4 md:px-8 md:py-6 md:w-4/5 my-8">
      {/* quote */}
      <p className="leading-normal md:leading-relaxed tracking-wide text-base text-gray-500">
        {quote}
      </p>
      {/* person info */}
      <div className="flex flex-row items-center space-x-3 text-base">
        {/* avatar wrapper */}

        <img className="rounded-full w-12 h-12" src={avatar} alt="" />

        {/* person details Wrapper*/}
        <div className="flex flex-col">
          <p className="font-semibold">{personName}</p>
          <p className="uppercase font-light">{personDetail}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
