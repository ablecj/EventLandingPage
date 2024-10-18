import React, {useState} from "react";
import logo from "../assets/EventPlanners.svg";
import "./Navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-16 bg-gradient-to-r from-[#191818] to-[#212121] text-[#DBD3D3] items-center flex pl-4 pr-4 sticky top-0 z-50">
    <div className="w-full h-16 flex justify-between items-center">
      {/* Logo Section */}
      <div className="logo_container w-14 h-12">
        <img src={logo} alt="logo" className="w-full h-full logo_navbar" />
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex w-[50%] h-8 items-center justify-end gap-3">
        <a href="/" className="text-[#fbf8f8] hover:text-gray-400">Home</a>
        <a href="#about" className="text-[#fbf8f8] hover:text-gray-400">About</a>
        <a href="#myworks" className="text-[#fbf8f8] hover:text-gray-400">My Works</a>
        <a href="#services" className="text-[#fbf8f8] hover:text-gray-400">Services</a>
        <a href="#contact" className="text-[#fbf8f8] hover:text-gray-400">Contact Us</a>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-[#fbf8f8] hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Links inside Hamburger Menu for Mobile */}
    {isOpen && (
      <div className="md:hidden flex flex-col bg-gradient-to-r from-[#191818] to-[#212121] text-[#fbf8f8] w-full items-end pr-3 absolute top-16 left-0 z-40">
        <a href="/" className="py-2 px-4 hover:bg-[#212121] hover:text-gray-400" onClick={toggleMenu}>Home</a>
        <a href="#about" className="py-2 px-4 hover:bg-[#212121] hover:text-gray-400" onClick={toggleMenu}>About</a>
        <a href="#myworks" className="py-2 px-4 hover:bg-[#212121] hover:text-gray-400" onClick={toggleMenu}>My Works</a>
        <a href="#services" className="py-2 px-4 hover:bg-[#212121] hover:text-gray-400" onClick={toggleMenu}>Services</a>
        <a href="#contact" className="py-2 px-4 hover:bg-[#212121] hover:text-gray-400" onClick={toggleMenu}>Contact Us</a>
      </div>
    )}
  </nav>
  );
};

export default Navbar;
