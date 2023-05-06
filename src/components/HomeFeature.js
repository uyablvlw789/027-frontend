import { BsArrowRightShort } from "react-icons/bs";

// cfa期望具备两个属性：isButton 和 content。如果 isButton 为 true，那么它将被渲染为按钮，否则将被渲染为带下划线的链接。
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
      <a
        className="text-l px-6 py-3 text-white font-semibold rounded-md bg-blue-700 self-start hover:bg-blue-800"
        target="_blank"
        rel="noreferrer"
        href={cfa.address}
      >
        {cfa.content}
      </a>
    );
  } else {
    callForAction = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        className="underline text-2xl md:text-3xl"
        target="_blank"
        rel="noreferrer"
        href={cfa.address}
      >
        {cfa.content}
        <BsArrowRightShort className="inline-block text-cyan-400" />
      </a>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-3xl md:text-5xl leading-snug font-bold cursor-pointer">{title}</h2>
      <h3 className="text-l font-semibold md:text-xl">{subtitle}</h3>
      <h4 className="text-l md:text-xl tracking-wide text-gray-500">{description}</h4>
      {callForAction}
    </div>
  );
}

export default HomeFeature;
