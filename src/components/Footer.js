import logo from "../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-6 dark:bg-slate-800 dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          {/* 左边 */}
          <div className="pb-6 col-span-full md:pb-0 md:col-span-8">
            <a href="./" className="flex justify-center space-x-3 md:justify-start mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <img src={logo} alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">027.net</span>
            </a>
            <div className="flex">
              <BsFacebook className="text-2xl mr-3" />
              <BsTwitter className="text-2xl mr-3" />
              <FaInstagram className="text-2xl mr-3" />
              <BsLinkedin className="text-2xl mr-3" />
              <AiOutlineMail className="text-2xl mr-3" />
            </div>
          </div>
          {/* 右边 */}
          <div className="col-span-6 text-center md:text-left md:col-span-2">
            <ul className="flex flex-col gap-3">
              <li>
                <a rel="noopener noreferrer" href="./" className="hover:dark:text-violet-400">
                  关于我们
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  编辑政策
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  隐私政策
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  不要出售我的个人信息
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-2">
            <ul className="flex flex-col gap-3">
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  使用条款
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  广告
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  公告
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  联系我们
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">
                  诚招贤士
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2023 All rights reserved</span>
            <a rel="noopener noreferrer" href="./">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="./">
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
