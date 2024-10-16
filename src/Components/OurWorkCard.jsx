import React from 'react'


const OurWorkCard = ({URL}) => {
  return (
    <div className="card_container mt-16 w-[350px]">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#DBD3D3] hover:shadow-[0px_5px_20px_20px_#acacac]">
      <div className="overflow-hidden">
        <img
          className="w-full h-[250px] object-fill transition-transform duration-500 ease-in-out hover:scale-110"
          src={URL}
          alt="Card Image"
        />
      </div>
    </div>
  </div>
  
  )
}

export default OurWorkCard
