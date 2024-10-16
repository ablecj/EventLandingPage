import React from "react";
import FooterLogo from '../assets/EventPlanners.png' 

const Footer = () => {
  return (
    <footer className="w-full p-3 flex">
      <div className="flex w-full ">
        <div className="flex-1 w-full flex justify-center items-center ">
            <div className="w-[170px] h-[170px] flex justify-center items-center rounded-full border border-black ">
                <img src={FooterLogo} alt="footer-logo" className="w-[150px] h-[150px] rounded-full hover:scale-110  " />
            </div>
        </div>
        <div className="flex-1 bg-gray-300"></div>
        <div className="flex-1 bg-gray-400"></div>
        <div className="flex-1 bg-gray-500"></div>
      </div>
    </footer>
  );
};

export default Footer;
