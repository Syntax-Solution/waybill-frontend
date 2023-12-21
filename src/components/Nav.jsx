import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logoo.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="top-0 z-30 w-full px-2 py-4 sm:px-4 absolute">
      <div className="flex md:justify-around justify-between items-center text-white">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-20 cursor-pointer" src={Logo} alt="logo" />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            ElseWhere
          </h1>
        </div>
        {/* bg-#5C4033 */}
        <ul className="hidden md:flex md:items-center">
          <li className="p-4 cursor-pointer hover:text-[#FFB800] text-xl">
            <Link to="/">Shipping</Link>
          </li>
          <li className="p-4 hover:text-[#FFB800] cursor-pointer text-xl">
            <Link
              to="tracking"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Tracking
            </Link>
          </li>
          <li className="p-4 hover:text-[#FFB800] cursor-pointer text-xl">
            <Link
              to="locations"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Locations
            </Link>
          </li>
          <li className="p-4 hover:text-[#FFB800] cursor-pointer text-xl">
            <Link to="/">Support</Link>
          </li>
          <div className="w-40 ml-32">
            <Link
              to="subscribe"
              className="text-white font-bold p-2 rounded cursor-pointer"
            >
              <FaUserCircle className="text-white" size={32} />
            </Link>
          </div>
        </ul>
        <div className="flex items-center">
          <div className="w-12 md:hidden">
            <Link
              to="subscribe"
              className="text-white font-bold p-2 rounded cursor-pointer"
            >
              <FaUserCircle className="text-white" size={32} />
            </Link>
          </div>
          <div onClick={handleNav} className="md:hidden z-10">
            {nav ? (
              <AiOutlineClose className="text-black" size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </div>
        </div>
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute text-black right-2 top-20 w-96 bg-white px-4 py-7 flex-col"
              : "absolute left-[-100%] bg-gray-100/90"
          }
        >
          <ul>
            <li className="p-4 cursor-pointer">
              <Link to="home">Shipping</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link
                to="tracking"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Tracking
              </Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="locations"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>Locations</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="/">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
