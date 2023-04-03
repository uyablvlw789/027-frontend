import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header className="sticky top-0 p-4 dark:bg-slate-800 dark:text-gray-100 z-10">
      <div className="container flex justify-between h-16 mx-auto">
        {/* Logo + 品牌名字 */}
        <div className="flex items-center">
          <a href="./" className="flex items-center p-2 h-16 w-16">
            <img src={logo} alt="" />
          </a>
          <div className="text-2xl font-semibold">027.net</div>
        </div>

        {/* 中间菜单 */}
        <div className="flex">
          <ul className=" items-stretch hidden space-x-3 lg:flex mr-5">
            <li className="flex">
              <a
                href="./"
                className="flex items-center px-4 -mb-1 border-t-2 border-blue-200  dark:text-blue-400 dark:border-blue-400"
              >
                关于我们
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="./"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                品牌
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="./"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                广告
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="./"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                公告
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="./"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                博客
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="./"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                招纳贤士
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-900">
              联系我们
            </button>
          </div>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
