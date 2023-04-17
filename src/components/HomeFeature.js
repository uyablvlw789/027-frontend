import { BsArrowRightShort } from "react-icons/bs";

// cfa is expected to have two properties: isButton and content
// if isButton is true, then it will be rendered as button, otherwise it will be rendered as link with underscore
function HomeFeature({ title, subtitle, description, cfa }) {
  if (!title) {
    title = (
      <>
        An exciting <br /> development for local <br /> development title =
      </>
    );
  }

  if (!subtitle) {
    subtitle = <>Netlify's full platform in your terminal.</>;
  }

  if (!description) {
    description = (
      <>
        Spin up a project in seconds, configure your build, test edge and serverless functions, and
        deploy globally — all from your command line.
      </>
    );
  }

  let callForAction = <></>;

  if (!cfa.content) {
    cfa.content = "Launch your project now!";
  }

  if (cfa.isButton) {
    callForAction = (
      <button className="text-l px-6 py-3 text-white font-semibold rounded-md bg-blue-700 self-start hover:bg-blue-800">
        {cfa.content}
      </button>
    );
  } else {
    callForAction = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a className="underline text-2xl md:text-3xl" href="http://localhost:3000">
        {cfa.content}
        <BsArrowRightShort className="inline-block text-cyan-400" />
      </a>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl md:text-5xl leading-snug font-bold">{title}</h1>
      <h3 className="text-xl font-semibold md:text-2xl">{subtitle}</h3>
      <h4 className="text-xl md:text-2xl tracking-wide">{description}</h4>
      {callForAction}
    </div>
  );
}

export default HomeFeature;
