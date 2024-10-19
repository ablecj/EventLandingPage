import React from "react";
import HomeSlider from "../Components/HomeSlider";
import CoupleImg from "../assets/CoupleImg.png";
import StageDecore from "../assets/StageDecore.png";
import { AiFillCaretDown } from "react-icons/ai";
import Card from "../Components/Card";
import BirthdayParty from "../assets/CardPhotos/BirthDayParty.png";
import CateringServices from "../assets/CardPhotos/CateringServices.png";
import Charity from "../assets/CardPhotos/Charity.png";
import Concert from "../assets/CardPhotos/Concert.png";
import CorporateEvent from "../assets/CardPhotos/CorporateEvent.png";
import Photography from "../assets/CardPhotos/Photography.png";
import PrivateParty from "../assets/CardPhotos/PrivateParty.png";
import Wedding from "../assets/CardPhotos/Wedding.png";
import OurWorkCard from "../Components/OurWorkCard";
import TestimonialCard from "../Components/TestimonialCard";
import EventEnquiryImg from "../assets/EventEnquiryImg.png";
import { FaMobile } from "react-icons/fa";
import Footer from "../Components/Footer";
import '../App.css'

const Home = () => {
  // CardContent Data array
  const CardContent = [
    {
      id: 1,
      title: "Birthday Photography",
      imgUrl: BirthdayParty,
    },
    {
      id: 2,
      title: "Wedding Event",
      imgUrl: Wedding,
    },
    {
      id: 3,
      title: "Corporate Event",
      imgUrl: CorporateEvent,
    },
    {
      id: 4,
      title: "Private Party",
      imgUrl: PrivateParty,
    },
    {
      id: 5,
      title: "Concert",
      imgUrl: Concert,
    },
    {
      id: 6,
      title: "Charity Gala",
      imgUrl: Charity,
    },
    {
      id: 7,
      title: "Catering Services",
      imgUrl: CateringServices,
    },
    {
      id: 8,
      title: "photography",
      imgUrl: Photography,
    },
  ];

  // Our work card data
  const OurWorkData = [
    {
      url: BirthdayParty,
    },
    {
      url: Wedding,
    },
    {
      url: CorporateEvent,
    },
    {
      url: PrivateParty,
    },
    {
      url: Concert,
    },
    {
      url: Charity,
    },
    {
      url: CateringServices,
    },
    {
      url: Photography,
    },
  ];

  return (
    <div className="home_container w-full">
      {/* Homeslider */}
      <section className="Home_slider_container w-full h-[100vh]">
        <HomeSlider />
      </section>
      {/* About page */}
     <section className="About_section w-full bg-gradient-to-r from-[#DBD3D3] via-[#EAE7E7] to-[#B3ACAC]">
  <div className="About_container w-full p-6 md:p-8 lg:p-[24px]">
    <div className="md:pl-[200px]">
      <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl text-[#091057] font-semibold About_title">
        About Event
      </h2>
      <div className="w-[30%] md:w-[14%] h-[1px] bg-[#091057] mt-2  About_Underline"></div>

      {/* Image for Couple */}
      <div className="relative mt-6 md:mt-0">
        <img
          src={CoupleImg}
          alt="CoupleImg"
          className= "couple_img  w-[150px] h-[200px] md:w-[200px] md:h-[300px] md:absolute md:left-[750px]"
        />
      </div>

      <h3 className="mt-4 text-2xl md: text-3xl lg: text-4xl font-bold text-[#091057] leading-[1.5] text-start md:text-left">
        Welcome! We are Events <br /> Wedding Planner
      </h3>
      <p className="mt-5 w-full md:w-[450px] text-[#091057] leading-[1.5] font-medium  md: text-left">
        I am Shyam, the owner of Royal Events & Wedding, based in Thiruvananthapuram.
        I have been working since 2015 and have covered 150 weddings till now. We are 
        an event management & wedding planning company dedicated to providing customers 
        with a wide assortment of event management services for all sorts of corporate 
        and personal events. Every client and bespoke wedding service that we provide 
        is unique, therefore wedding design & management prices vary. We provide the 
        best for precious memories.
      </p>
    </div>

    {/* Service Section */}
    <div className="w-full lg:mt-10 md: mt-[460px] relative">
        <img
          src={StageDecore}
          alt="StageDecore"
          className="w-[150px] h-[200px] md:w-[200px] md:h-[300px] md:absolute md:left-[1050px] mt-6 stage_decor_img "
        />
      <div className="ml-0 md:ml-[200px] h-12 w-fit p-5 flex items-center relative justify-center md:justify-start bg-[#070927] rounded-lg gap-4">
        <span className="text-[#DBD3D3] font-semibold">WEDDING DESIGN -</span>
        <span className="text-[#DBD3D3] font-semibold">PERSONAL EVENT -</span>
        <span className="text-[#DBD3D3] font-semibold">WEDDING PLANNING -</span>
      </div>

      {/* Service List */}
      <div className="p-0">
        <ul className="ml-0 md:ml-[200px] mt-5 md:mt-[20px]">
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Trousseau Preparations
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> DJ/Music
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Venue Booking
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2  w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Decor
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Photography Services
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Coordination
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Service Staff
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> Invitations
          </li>
          <li className="text-[#091057] font-medium flex items-center p-2 w-fit">
            <AiFillCaretDown className="mr-3 text-[#EC8305]" /> PR and Media Coverage
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* our services */}
      <section className="services_section w-full bg-gradient-to-r from-lightCream to-gray-100 pb-3">
        <div className="service_container w-full pt-[44px] p-[24px] ">
          <div className="w-full ">
            <h2 className="w-fit ml-[200px] font-bold text-3xl text-[#091057]  Our_service_Title ">
              OUR SERVICES
            </h2>
            <div className="w-52 h-[1px] bg-[#091057] ml-[200px] mt-2 Our_Title_Underline"></div>
            <h4 className="font-semibold text-3xl text-[#091057] mt-4 ml-[200px] Our_services_subtitle">
              IN <span className="font-bold ml-2">HOUSE SERVICES</span>
            </h4>
          </div>
          <div className="w-full  flex flex-wrap justify-center gap-8 Our_services_card">
            {CardContent.map((event, index) => (
              <Card key={index} title={event.title} imgUrl={event.imgUrl} />
            ))}
          </div>
        </div>
      </section>
      {/* my work section */}
      <section className="my_work_section w-full bg-gradient-to-r from-[#DBD3D3] via-[#EAE7E7] to-[#B3ACAC] mb-4  ">
        <div className="my_work_container p-[24px] w-full">
          <div className="w-fit pl-[200px] my_work_section ">
            <h2 className="font-semibold text-2xl text-[#091057]">
              Our Creativity{" "}
            </h2>
            <div className="w-[150px] h-[1px] bg-[#091057] mt-2"></div>
            <h3 className="mt-1 font-bold text-[#091057] text-4xl">
              <span className="font-normal">AWESOME</span> WORKS
            </h3>
          </div>
          <div className="w-full  flex flex-wrap justify-center gap-8">
            {OurWorkData.map((data, index) => (
              <OurWorkCard key={index} URL={data.url} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-14 mb-2 ">
            <button className="p-2 pl-3 pr-3 bg-[#f46c24] text-[#ffffff] hover:rounded-lg hover:opacity-60 my_work_btn">
              View All
            </button>
          </div>
          <div className="mt-6 w-full flex client_and_testimonial_section ">
            <div className="pl-[124px] client_title_container">
              <h2 className="font-semibold text-[#091057] text-xl ">
                Awesome partner
              </h2>
              <div className="OrClient_HorizontalLine w-[155px] h-[1px] bg-[#091057] mt-2"></div>
              <h4 className="font-bold text-4xl mt-3 text-[#091057]">
                OUR CLIENTS
              </h4>
              <p className="w-[340px] mt-4 leading-relaxed font-medium text-[#091057] client_para">
                They live in different universes. Engaging in politics or IT,
                making cheese or baking the most delicious cookies in the world.
              </p>
            </div>
            {/* testimonial */}
            <div className="w-full mt-[8%]  ">
              <TestimonialCard />
            </div>
          </div>
          {/* Send Enquirey Request */}
          <div className="w-full flex send_Enquirey_container">
            <div className="w-[50%] flex justify-center items-center pt-28 pb-28 Enquirey_first_section">
              <div className="mt-6 w-[50%] border border-black p-3 rounded-lg  Enquirey_img_container">
                <img
                  src={EventEnquiryImg}
                  alt="EventEnquiryImg"
                  className="rounded-lg hover:scale-105 hover:transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col justify-center pl-3 Enquiry_content_container">
              <h2 className="uppercase font-bold text-2xl leading-relaxed text-[#091057]">
                Let's talk about <br />
                your project
              </h2>
              <p className="w-[50%] mt-4 leading-relaxed text-[#091057] font-medium Enquiry_content_para">
                Do you have create events or do you want to know more about
                events costs? Let's get acquainted!
              </p>
              <button className="uppercase mt-4 w-56 p-2 font-normal text-[#ffffff] bg-[#f46c24] cursor-pointer hover:opacity-80 hover:rounded-lg">
                send request whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* contact us section */}
      <section className="contact_us_section w-full ">
        <div className="w-full p-[24px] pl-[155px] contact_us_section ">
          <div className="w-full pb-6 contact_us_inner">
            <h2 className="uppercase w-fit font-bold text-[#091057] text-xl leading-relaxed p-1">
              Contact Us
            </h2>
            <div className="w-[130px] h-[1px] bg-[#091057]"></div>
            <h3 className="uppercase w-fit mt-3  text-4xl font-bold text-[#091057]">
              Royal Events
            </h3>
            <p className="w-[70%] mt-3 text-[#091057] font-medium contact_us_para">
              We are always interested in looking at the possibilities together.
              If you have any questions or would like general information,
              please do not hesitate to contact us. We are happy to talk to you.
            </p>
            <div className="w-[90%] h-[1px] mt-10 bg-[#091057] contactus_horizontal_line "></div>
          </div>
          <div className="w-full flex  ">
            {/* 1st section */}
            <div className="flex-1 ">
              <div className="w-full p-3 flex items-center location_container">
                <h3 className="uppercase w-fit flex items-center font-medium text-[#ffffff] bg-[#EC8305] p-2">
                  Location
                </h3>
                <div className="w-[25%] h-[1px] ml-2 bg-[#091057]"></div>
              </div>
              <div className="w-[90%] mt-2 p-3 flex items-center address_container">
                <p className="text-[#091057] font-normal text-md address_container_para">
                  Royal Events & Wedding Planner Shasthamangalam Trivandrum
                </p>
              </div>
            </div>
            {/* 2nd section */}
            <div className="flex-1 ">
              <div className="w-full p-3 flex items-center  mobile_container">
                <h3 className="uppercase w-fit flex items-center justify-center font-medium text-[#ffffff] bg-[#EC8305] p-2">
                  Mobile
                </h3>
                <div className="w-[25%] h-[1px] ml-2 bg-[#091057]"></div>
              </div>
              <div className="flex w-full mt-2 p-3 items-center mobileNumber_container">
                <FaMobile className="text-[#EC8305] mt-2" />
                <a href="" className="p-2 text-lg font-semibold text-[#EC8305] mobile_number">
                  +91 7025783110
                </a>
              </div>
            </div>
            {/* 3rd section */}
            <div className="flex-1 ">
            <div className="w-full p-3 flex items-center email_container">
                <h3 className="uppercase w-fit flex items-center font-medium text-[#ffffff] bg-[#EC8305] p-2">
                  Email id
                </h3>
                <div className="w-[25%] h-[1px] ml-2 bg-[#091057]"></div>
              </div>
              <div className="w-full  mt-2 p-3 justify-center flex flex-col email_container ">
                <a href="" className="p-1 text-[16px] font-normal text-[#838383] email_one">xyz@gmail.com</a>
                <a href="" className="p-1 text-[16px]  font-normal text-[#838383] email_two" >abc@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
