import React from "react";
import FooterLogo from "../assets/EventPlanners.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../App.css';

const Footer = () => {
  return (
    <footer className="w-full p-6 flex bg-[#232323] ">
      <div className="flex w-full footer_container ">
        <div className="flex-1 w-full flex justify-start items-center ">
          <div className="w-[160px] h-[160px] flex justify-center items-center rounded-full border border-l-white ">
            <img
              src={FooterLogo}
              alt="footer-logo"
              className="w-[120px] h-[120px] rounded-full hover:scale-125  "
            />
          </div>
        </div>
        <div className="flex-1 w-full ">
          {/* 1st section */}
          <div className="w-full flex items-center">
            <h3 className="uppercase p-2 rounded-lg w-fit bg-[#0a0a0a] text-[#ffff] font-normal text-md">
              Address
            </h3>
            <div className="w-[120px] h-[1px] bg-white ml-3"></div>
          </div>
          {/* 2nd section */}
          <div className="w-full mt-6">
            <p className="w-[60%] text-lg text-[#ffff] ">
              xyz Event & Wedding Planners kerala
            </p>
            <p className="w-[60%] text-lg text-[#ffff] mt-2">
              xyz Event & Wedding Planners kerala
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          {/* 1st section */}
          <div className="w-full flex items-center">
            <h3 className="uppercase p-2 rounded-lg w-fit bg-[#0a0a0a] text-[#ffff] font-normal text-md">
              Navigation
            </h3>
            <div className="w-[120px] h-[1px] bg-white ml-3"></div>
          </div>
          {/* 2nd section */}
          <div className="w-full mt-6 flex flex-col gap-2 p-1">
            <a href="" className="uppercase text-white text-sm font-medium">
              HOME
            </a>
            <a href="" className="uppercase text-white text-sm font-medium">
              About
            </a>
            <a href="" className="uppercase text-white text-sm font-medium">
              Our Works
            </a>
            <a href="" className="uppercase text-white text-sm font-medium">
              contact us
            </a>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="w-full flex justify-center items-center gap-4">
            <a href="">
              <FaFacebook className="w-10 h-10 text-white" />
            </a>
            <a href="">
            <FaTwitter className="w-10 h-10 text-white" />
            </a>
            <a href="">
            <FaInstagram className="w-10 h-10 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
