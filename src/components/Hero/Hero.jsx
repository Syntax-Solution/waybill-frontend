import React from "react";
import "./Hero.css";
import truckss from "../../assets/truckss.jpg";
import { Link } from 'react-scroll'
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="Home w-full h-screen relative" id="hero">
      <img
        className="w-full h-full object-cover overflow-hidden"
        src={truckss}
        alt=""
      />
      <div className="absolute  top-0 left-0"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center md:ml-8 ml-3 text-white p-4 mt-24">
        <h1 className="md:text-7xl text-5xl font-bold">
          Else<span className="">Where</span>
        </h1>
        <h2 className="md:text-3xl text-xl font-semibold">
          Efficient logistics for modern businesses
        </h2>
        <p className="md:text-xl text-sm">
          Elsewhere Logistics provides a comprehensive range
          <br /> of services for customers shipping goods locally and
          <br /> soon overseas. Utilizing our newest technologies, we
          <br /> can reduce costs and increase efficiency for hassle-free,
          <br /> timely logistics and shipping.
        </p>
        <div className="flex flex-col mt-10">
          <div className="">
            <a href="/booking"
              className="bg-yellow-500 text-white font-bold px-24 py-2 rounded cursor-pointer md:text-xl"
            >
              Book
            </a>
          </div>
          <div className="mt-10">
            <Link
              to="tracking" spy={true} smooth={true} offset={50} duration={500}
              className="bg-yellow-500 text-white md:text-xl font-bold p-3 px-16 py-2 ml-4 rounded cursor-pointer"
            >
              Track
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <FaChevronDown className="text-white" size={28} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
