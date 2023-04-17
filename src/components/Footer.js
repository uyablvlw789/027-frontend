import logo from "../assets/logo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="m-10">
      {/* Links */}
      <div className="border-t border-b border-gray-100 p-3 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* column 1 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Why netlify</strong>
            </a>
            <a href="/">Customers</a>
            <a href="/">Enterprise</a>
            <a href="/">Resourses</a>
            <a href="/">Agency partner program</a>
            <a href="/">Technology partner program</a>
          </div>
          {/* column 2 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Products</strong>
            </a>
            <a href="/">Platform</a>
            <a href="/">Netlify Build</a>
            <a href="/">Netlify Edge</a>
            <a href="/">Netlify CLI</a>
            <a href="/">Pricing</a>
            <a href="/">Addons</a>
          </div>
          {/* column 3 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Docs</strong>
            </a>
            <a href="/">Jamstack book</a>
            <a href="/">Community</a>
            <a href="/">Security</a>
            <a href="/">Site speed test</a>
            <a href="/">Remotely Interesting</a>
            <a className="flex flex-row items-center space-x-1" href="/">
              <span>Technologies</span> <BiChevronDown />
            </a>
          </div>
          {/* column 4 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Contact us</strong>
            </a>
            <a href="/">Sales</a>
            <a href="/">Support</a>
            <a href="/">Status</a>
            <a href="/">Forums</a>
            <a href="/">Hire an agency</a>
          </div>
          {/* column 5 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Company</strong>
            </a>
            <a href="/">Blog</a>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
            <a href="/">Jamstack Fund</a>
            <a href="/">Netlify Store</a>
            <a href="/">Sustainability</a>
          </div>
          {/* column 6 */}
          <div className="flex flex-col space-y-3">
            <a href="/">
              <strong>Trust</strong>
            </a>
            <a href="/">Trust Center</a>
            <a href="/">Privacy</a>
            <a href="/">Security</a>
            <a href="/">GDPR/CCPA</a>
            <a href="/">Abuse</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        {/* trade marks */}
        <h3 className="font-semibold">&copy; 2023 027.net</h3>
        {/* Socials */}
        <div className="flex flex-row space-x-3">
          <BsFacebook className="text-2xl text-blue-600" />
          <BsTwitter className="text-2xl text-blue-300" />
          <BsLinkedin className="text-2xl text-sky-600" />
          <BsInstagram className="text-2xl text-red-300" />
          <BsPinterest className="text-2xl text-red-500" />
        </div>
        {/* Additional menu */}
        <ul className="flex flex-col items-center space-y-3 bg-gray-50 p-3 w-full rounded-md md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
          <li className="flex flex-row items-center">
            <span>Jamstack</span> <BiChevronDown className=" text-gray-600" />
          </li>
          <li className="flex flex-row items-center">
            <span>Deployment</span> <BiChevronDown className=" text-gray-600" />
          </li>
          <li className="flex flex-row items-center">
            <span>Serverless</span> <BiChevronDown className=" text-gray-600" />
          </li>
          <li className="flex flex-row items-center">
            <span>Development</span> <BiChevronDown className=" text-gray-600" />
          </li>
          <li className="flex flex-row items-center">
            <span>Performance</span> <BiChevronDown className=" text-gray-600" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
