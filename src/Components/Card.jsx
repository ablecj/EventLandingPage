import React from "react";
import './Card.css';

const Card = ({ title, imgUrl }) => {
  return (
    <div className="card_container mt-16 w-[350px] ">
      <div className=" rounded overflow-hidden shadow-lg bg-[#bdbdbe] hover:shadow-[0px_5px_20px_20px_#878787] card_sub_container">
        <img
          className="w-full h-[250px] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          src={imgUrl}
          alt="Card Image"
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 py-4">
          <button className="bg-[#f46c24] border-none  text-white font-bold py-2 px-4  hover:bg-orange-300 hover:opacity-90 hover:rounded">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
