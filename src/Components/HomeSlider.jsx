import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./HomeSlider.css";
import BirthDay from "../assets/HomeSliderImg/birthdayimg.png";
import CorporateImg from "../assets/HomeSliderImg/corporateEvent.png";
import DanceImg from "../assets/HomeSliderImg/DanceImg.png";
import DecorationImg from "../assets/HomeSliderImg/DecorationImg.png";
import DecorationImg2 from "../assets/HomeSliderImg/DecorationImg2.png";
import DJImg from "../assets/HomeSliderImg/DJImg.png";
import weddingImg from "../assets/HomeSliderImg/weddingImg.png";

// making an array
const imageData = [
  {
    url: BirthDay,
    title: "Birthday Party",
    subtitle: "Celebrate your special day with us!",
  },
  {
    url: CorporateImg,
    title: "Corporate Event",
    subtitle: "Professional corporate event management.",
  },
  {
    url: DanceImg,
    title: "Dance Event",
    subtitle: "Let’s dance and celebrate!",
  },
  {
    url: DecorationImg,
    title: "Event Decoration",
    subtitle: "Beautiful decorations for your events.",
  },
  {
    url: DecorationImg2,
    title: "Floral Decoration",
    subtitle: "Gorgeous floral arrangements for every occasion.",
  },
  {
    url: DJImg,
    title: "DJ Party",
    subtitle: "Experience the best music with top DJs.",
  },
  {
    url: weddingImg,
    title: "Wedding Event",
    subtitle: "Make your wedding day unforgettable.",
  },
];

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-fit"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-16 bg-black bg-opacity-50">
              <h1 className="text-[#DBD3D3] text-4xl font-bold">{slide.title}</h1>
              <p className="text-[#DBD3D3] mt-2">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
