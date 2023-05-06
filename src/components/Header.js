import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import Navigation from "./NavBar/Navigation";
import MobileNavigation from "./NavBar/MobileNavigation";
import { Link } from "react-router-dom";

export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.remove("shadow-md");

      if (window.scrollY >= 64) {
        headerRef.current.classList.add("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: "rgb(255 255 255 / 65%)" }}
      className="sticky top-0 p-4 z-10 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between mx-auto">
        {/* 品牌名字和logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              className="w-12 h-12 md:w-16 md:h-16 mr-2 hover:cursor-pointer"
              src={logo}
              alt="logo"
            />
            <div className="text-3xl mr-8 font-bold hover:cursor-pointer">027.net</div>
          </div>
        </Link>
        {/* 导航菜单 */}
        {/* 桌面模式和移动模式只会渲染其中之一 */}
        <MobileNavigation />
        <Navigation />
      </div>
    </header>
  );
}
