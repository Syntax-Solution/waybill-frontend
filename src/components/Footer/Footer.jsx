import React from "react";
import "./Footer.css";
import Logo from "../../assets/logoo.png";
import { Link } from "react-scroll";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer bg-[#1d0803]">
      <div className="flex justify-center mt-32">
        <hr className="border-dotted md:w-[700px] mt-20 w-[300px] bg-yellow-500" />
      </div>
      <div className="md:flex grid grid-cols-3 gap-3 justify-center justify-around items-center mt-10 text-white ml-7 md:ml-0" id="locations">
        <div>
          <h3 className="text-yellow-500 md:text-sm text-xs mb-5">ENUGU</h3>
          <p className="md:text-sm text-xs">
            120 Upper Chime
            <br /> avenue New Haven
          </p>
          <p className="md:text-sm text-xs">
            <span className="text-yellow-500">Phone:</span> 0810050040
          </p>
          <p className="md:text-sm text-xs">info@elsewhere.com</p>
        </div>
        <div>
          <h3 className="text-yellow-500 md:text-sm text-xs mb-5">ONITSHA</h3>
          <p className="md:text-sm text-xs">
            120 Upper Chime
            <br /> avenue New Haven
          </p>
          <p className="md:text-sm text-xs">
            <span className="text-yellow-500">Phone:</span> 0810050040
          </p>
          <p className="md:text-sm text-xs">info@elsewhere.com</p>
        </div>
        <div>
          <h3 className="text-yellow-500 md:text-sm text-xs mb-5">IMO</h3>
          <p className="md:text-sm text-xs">
            120 Upper Chime <br /> avenue New Haven
          </p>
          <p className="md:text-sm text-xs">
            <span className="text-yellow-500">Phone:</span> 0810050040
          </p>
          <p className="md:text-sm text-xs">info@elsewhere.com</p>
        </div>
        <div>
          <h3 className="text-yellow-500 md:text-sm text-xs mb-5">ABIA</h3>
          <p className="md:text-sm text-xs">
            120 Upper Chime
            <br /> avenue New Haven
          </p>
          <p className="md:text-sm text-xs">
            <span className="text-yellow-500">Phone:</span> 0810050040
          </p>
          <p className="md:text-sm text-xs">info@elsewhere.com</p>
        </div>
        <div>
          <h3 className="text-yellow-500 md:text-sm text-xs mb-5">DELTA</h3>
          <p className="md:text-sm text-xs">
            120 Upper Chime
            <br /> avenue New Haven
          </p>
          <p className="md:text-sm text-xs">
            <span className="text-yellow-500">Phone:</span> 0810050040
          </p>
          <p className="md:text-sm text-xs">info@elsewhere.com</p>
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <hr className="border-dotted md:w-[700px] w-[300px] bg-yellow-500" />
      </div>
      <div className="md:flex grid grid-cols-2 gap-3 md:items-center justify-around justify-center text-white">
        <div>
          <div className="flex items-center mt-20 md:mt-0 mb-10">
            <Link to="">
              <img className="w-10 cursor-pointer" src={Logo} alt="logo" />
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              ElseWhere
            </h1>
          </div>
          <p className="text-xs mb-4">
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Nobis porro at eius dicta
            <br /> excepturi neque rem quidem blanditiis <br />
            rerum molestias sed eligendi dolores esse,
            <br /> repudiandae facilis deserunt est iste. Consequatur?
          </p>
          <p className="text-xs">All Rights Reserved &copy; Copywright 2023</p>
        </div>
        <div>
          <h2 className="text-sm text-yellow-500 mt-20">Menu</h2>
          <div className="md:grid md:grid-cols-3 md:gap-4 grid grid-cols-2 gap-4 mt-5">
            <div className="md:w-72 w-[100px]">
              <h3 className="text-xs">ABOUT US</h3>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
                Velit, libero recusandae
                <br /> veniam vitae vel itaque qui similique
                <br />
                necessitatibus quasi aspernatur
                <br /> voluptates ea quam nisi molestiae,
                <br /> odit minus, provident nostrum quibusdam.
              </p>
            </div>
            <div className="md:w-72 w-[100px]">
              <h3 className="text-xs">SERVICES</h3>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur
                <br /> adipisicing elit. Velit, libero recusandae
                <br /> veniam vitae vel itaque qui similique
                <br />
                necessitatibus quasi aspernatur <br /> voluptates ea quam nisi
                molestiae,
                <br /> odit minus, provident nostrum quibusdam.
              </p>
            </div>
            <div className="md:w-72 w-[100px]">
              <h3 className="text-xs">SUPPORT</h3>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur
                <br /> adipisicing elit. Velit, libero recusandae
                <br /> veniam vitae vel itaque qui similique
                <br />
                necessitatibus quasi aspernatur
                <br /> voluptates ea quam nisi molestiae,
                <br /> odit minus, provident nostrum quibusdam.
              </p>
            </div>
            <div className="md:w-72 w-[100px]">
              <h3 className="text-xs">CONTACT</h3>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur
                <br /> adipisicing elit. Velit, libero recusandae
                <br /> veniam vitae vel itaque qui similique
                <br />
                necessitatibus quasi aspernatur
                <br /> voluptates ea quam nisi molestiae,
                <br /> odit minus, provident nostrum quibusdam.
              </p>
            </div>
          </div>
          <div>
            <p className="mt-7 text-xs text-yellow-500">
              <span className="mr-2">Privacy Policy</span> |
              <span className="ml-2">Cookie Policy</span>
            </p>
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-sm text-yellow-500 mb-5 ml-5 md:ml-5">SOCIAL MEDIA</h2>
          <div className="flex items-center justify-around">
            <Link to="/"><FaFacebook size={28}/></Link>
            <Link to="/"><FaInstagramSquare size={28}/></Link>
            <Link to="/"><FaTwitterSquare size={28}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
