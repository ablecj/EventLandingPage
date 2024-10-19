import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import TesimonialImg1 from '../assets/TestimonialImages/Arun.png';
import TesimonialImg2 from '../assets/TestimonialImages/David.png';
import TesimonialImg3 from '../assets/TestimonialImages/Emily.png';
import TesimonialImg4 from '../assets/TestimonialImages/Mike.png';
import TesimonialImg5 from '../assets/TestimonialImages/Sarah.png';
import '../App.css'

// testimonial data
const TestimonialDatas = [
  {
    Name: "Arun c s",
    Position: "Engineer",
    ImageUrl: TesimonialImg1,
    Review:  "The event management team exceeded our expectations for our corporate event! From planning to execution, everything was flawless. The attention to detail and professionalism were remarkable. We will definitely use their services again.",
  },
  {
    Name: "Sarah K",
    Position: "CEO",
    ImageUrl: TesimonialImg5,
    Review:  "They made my wedding day perfect! The team took care of everything, and I didn’t have to worry about a thing. The decorations were beautiful, and the event went smoothly. Highly recommended!",
  },
  {
    Name: "Mike R",
    Position: "Managing Director",
    ImageUrl: TesimonialImg4,
    Review:  "We hired them for our charity event, and they delivered more than we could have hoped for. They managed all the logistics, and the event was a huge success. Their creativity and dedication really shone through.",
  },
  {
    Name: "Emily S",
    Position: "Marketing Manager",
    ImageUrl: TesimonialImg3,
    Review: "Amazing work on my daughter’s birthday party! The theme was perfectly executed, and the kids had a blast. Everything was handled with such care and professionalism. We’ll definitely book them for future events.",
  },
  {
    Name: "David L",
    Position: "Graphic Designer",
    ImageUrl: TesimonialImg2,
    Review:  "I was impressed by their ability to manage our large-scale concert. The event was organized seamlessly, and the team handled every challenge with ease. A fantastic experience overall!",
  },
];

const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Handle next and previous arrow clicks
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialDatas.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === TestimonialDatas.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 relative Testimonial_card_container">
      {/* Arrow buttons */}
      <button
        onClick={handlePrevClick}
        className="absolute left-9 z-50 top-1/2 transform -translate-y-1/2 p-2 rounded-full arrow_btn_left"
      >
        <FiArrowLeft size={24} />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-9 z-50 top-1/2 transform -translate-y-1/2 p-2 rounded-full arrow_btn_right"
      >
        <FiArrowRight size={24} />
      </button>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {TestimonialDatas.map((TestimonialData, index) => (
            <div key={index} className="flex-shrink-0 w-full p-4 testimonial_Inner_container">
              <div className="border border-[#091057] rounded-lg p-6 text-center testimonial_wrapper">
                <img
                  src={TestimonialData.ImageUrl}
                  alt={TestimonialData.Name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-[#091057]">
                  {TestimonialData.Name}
                </h3>
                <p className="text-sm text-[#636367]">
                  {TestimonialData.Position}
                </p>
                <p className="text-[#0a0d27] mt-2">{TestimonialData.Review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicators (Dots) */}
      <div className="flex justify-center space-x-2 mt-4">
        {TestimonialDatas.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
