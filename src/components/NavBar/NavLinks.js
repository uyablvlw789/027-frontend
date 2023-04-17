import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function NavLinks({ classes, isMoble }) {
  if (isMoble) {
    const classNames = `z-10 opacity-90 backdrop-blur-md flex flex-col fixed top-20 bottom-0 w-screen bg-white space-y-4 md:flex-row items-center ${classes}`;
    return ReactDOM.createPortal(
      <ul className={classNames}>
        <li className="cursor-pointer">
          <Link className="px-3" to="/">
            Home
          </Link>
        </li>
        <li className="cursor-pointer px-3">Solutions</li>
        <li className="cursor-pointer px-3">
          <Link to="/announcements">Announcements</Link>
        </li>
        <li className="cursor-pointer px-3">Start building</li>
        <li className="cursor-pointer px-3">Docs</li>
        <li className="cursor-pointer px-3">Pricing</li>

        <button className="self-center w-4/5 px-4 py-2 font-semibold rounded bg-blue-600 text-white">
          联系我们
        </button>
      </ul>,
      document.querySelector(".modal-container")
    );
  } else {
    return (
      <ul className="flex flex-row space-x-1 lg:space-x-3 items-center ">
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          Solutions
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          <Link to="/announcements">Announcements</Link>
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          Start building
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          Docs
        </li>
        <li className="cursor-pointer px-2 lg:px-4 py-2 border-2 border-transparent rounded-md hover:border-blue-800">
          Pricing
        </li>
        <button className="self-center w-4/5 px-4 py-2 font-semibold rounded bg-blue-600 text-white hover:bg-blue-800">
          联系我们
        </button>
      </ul>
    );
  }
}

export default NavLinks;
