import React from 'react'
import '../App.css'


const OurWorkCard = ({URL}) => {
  return (
    <div className="card_container mt-16 w-[350px] our_work_card_container">
    <div className=" rounded overflow-hidden shadow-lg bg-[#DBD3D3] hover:shadow-[0px_5px_20px_20px_#acacac]">
      <div className="overflow-hidden ">
        <img
          className="w-full h-[250px] object-fill transition-transform duration-500 ease-in-out hover:scale-110 our_work_card_img"
          src={URL}
          alt="Card Image"
        />
      </div>
    </div>
  </div>
  
  )
}

export default OurWorkCard
