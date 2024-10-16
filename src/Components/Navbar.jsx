import React from "react";
import logo from "../assets/EventPlanners.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-[#0b0e38] to-[#060d5a] text-[#DBD3D3] items-center flex pl-4 pr-4 sticky top-0 z-50">
      <div className="w-full h-16 flex justify-between items-center">
        <div className="logo_container w-14 h-12 ">
          <img src={logo} alt="logo" className="w-full h-full logo_navbar" />
        </div>
        <div className="w-[50%] h-8 items-center flex justify-end gap-3">
          <a href="/" className="text-[#fbf8f8] hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="text-[#fbf8f8] hover:text-gray-400">
            About
          </a>
          <a href="#myworks" className="text-[#fbf8f8] hover:text-gray-400">
            My Works
          </a>
          <a href="#services" className="text-[#fbf8f8] hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="text-[#fbf8f8] hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
