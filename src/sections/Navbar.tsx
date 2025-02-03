import { useState } from "react";
import { navbarItems } from "../constants/navbar";
import { useScreenSize } from "../contexts/ScreenSizeContext";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { isMobile } = useScreenSize();

  return isMobile ? <MobileNavbar /> : <LargeScreenNavbar />;
};

const LargeScreenNavbar = () => {
  return (
    <div className="w-full">
      <div className="pt-6 md:px-24 lg:px-36 xl:px-50 2xl:px-64 flex items-center justify-between text-base lg:text-md 2xl:text-lg font-bold text-tertiary">
        <div className="">
          <a href="/">kavania2002</a>
        </div>
        <div className="flex md:gap-x-5 lg:gap-x-8">
          {navbarItems.map((item, index) => (
            <a
              target={item.name === "Resume" ? "_blank" : "_self"}
              className="hover:opacity-75"
              key={index}
              href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="absolute w-full flex justify-center pt-4 pb-4">
        <p className="text-tertiary text-3xl font-bold">
          <a href="/">kavania2002</a>
        </p>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-secondary opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}></div>
      )}

      <div className="absolute w-full z-40">
        <IoMdClose
          onClick={() => setIsMenuOpen(false)}
          className={`absolute right-4 top-4 text-4xl text-tertiary cursor-pointer transform transition-transform duration-300 ${
            isMenuOpen
              ? "-rotate-90 opacity-100"
              : "rotate-90 opacity-100 scale-0 transition-opacity"
          }`}
        />
        <BiMenuAltRight
          onClick={() => setIsMenuOpen(true)}
          className={`absolute right-4 top-4 text-4xl text-tertiary cursor-pointer transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-secondary z-30 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center shadow-lg`}>
        <div className="flex flex-col gap-y-5 text-xl font-bold text-tertiary">
          {navbarItems.map((item, index) => (
            <a className="hover:opacity-75" key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
