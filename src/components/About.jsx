import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { FaCheckSquare } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import delivery from "../assets/delivery.jpg";
import fork from "../assets/fork.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#1d0803]">
      <div className=" md:flex md:flex-row flex flex-col items-center justify-center justify-around">
        <div className="flex items-center">
          <LocalShippingIcon className="text-yellow-500 text-2xl" />
          <div className="text-white mt-20 ml-1">
            <h3 className="text-yellow-500 text-xs">01</h3>
            <h3 className="text-sm">REPACKING SERVICE</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Architecto ullam rerum, eligendi laborum, ad possimus
              <br /> quam inventore quibusdam impedit quis nisi illum. Quas
              <br /> voluptate voluptatibus quibusdam nostrum atque velit.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaCheckSquare className="text-yellow-500" size={40} />
          <div className="text-white mt-20 ml-1">
            <h3 className="text-yellow-500 text-xs">02</h3>
            <h3 className="text-sm">INSURED SHIPMENTS</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Architecto ullam rerum, eligendi laborum, ad possimus
              <br /> quam inventore quibusdam impedit quis nisi illum. Quas
              <br /> voluptate voluptatibus quibusdam nostrum atque velit.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMobile className="text-yellow-500" size={40} />
          <div className="text-white mt-20 ml-1">
            <h3 className="text-yellow-500 text-xs">03</h3>
            <h3 className="text-sm">PAY APP</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Architecto ullam rerum, eligendi laborum, ad possimus
              <br /> quam inventore quibusdam impedit quis nisi illum. Quas
              <br /> voluptate voluptatibus quibusdam nostrum atque velit.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col-reverse justify-center items-center justify-around mt-20">
        <div className="text-white">
          <h3 className="text-sm text-yellow-500">ALWAYS WE PROVIDE</h3>
          <h2 className="text-7xl font-bold">
            A FAST
            <br /> DELIVERY{" "}
            <span className="text-yellow-500">
              <br />
              SERVICE
            </span>
          </h2>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            accusamus quaerat.
            <br /> Atque cumque nam delectus in sunt distinctio tenetur
            molestiae soluta ex
            <br /> id quasi ab fugiat adipisci quis, ipsa repellendus.
          </p>
          <div className="mt-5">
            <Link
              to="booking"
              className="bg-yellow-500 text-white font-bold p-3 px-5 py-2 rounded cursor-pointer"
            >
              Book
            </Link>
          </div>
        </div>
        <div>
          <img src={delivery} alt="delivery-man" className="w-[450px] mb-5 md:mb-0" />
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse flex flex-col-reverse justify-center justify-around mt-10 items-center">
        <div>
          <h3 className="text-sm text-yellow-500">WHATEVER YOU NEED</h3>
          <h2 className="text-7xl text-white">
            WE CAN <br /> <span className="text-yellow-500">TRANSPORT</span>
          </h2>
          <h3 className="text-sm mt-2 text-yellow-500">
            NO MATTER THE QUANTITY
          </h3>
          <div className="mt-5 mb-5 md:mb-0">
            <Link
              to="subscribe"
              className="bg-yellow-500 text-white font-bold p-3 px-5 py-2 rounded cursor-pointer"
            >
              Check our prices
            </Link>
          </div>
        </div>
        <div>
          <img src={fork} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
