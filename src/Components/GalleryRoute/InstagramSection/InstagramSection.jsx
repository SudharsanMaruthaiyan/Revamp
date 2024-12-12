import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InstagramSectionData } from "../../../assets/Api/InstagramSectionData";
import InstagramSectionCard from "./InstagramSectionCard";

const InstagramSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className="flex flex-col items-center gap-5 py-10">
        <div>
          <p className="bg-[#FF9F00] text-white font-[poppins] px-3 py-2 rounded-full">
            How We Start Our Journey
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <p className="font-[poppins] font-bold text-[22px] text-center lg:text-[40px]">
              Start your Learning Journey Today!
            </p>
          </div>
          <div>
            <p className="font-[poppins] lg:text-[20px] text-[14px] text-center">
              Groove’s intuitive shared inbox makesteam members together
              organize, prioritize and.In this episode.
            </p>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {InstagramSectionData.map((e) => {
          return (
            <>
              <div className="mx-2 py-20">
                <InstagramSectionCard
                  imgurl={e.imgurl}
                  posttitle={e.posttitle}
                  instaid={e.instaid}
                  description={e.description}
                ></InstagramSectionCard>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default InstagramSection;
