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
    <div className="w-[90%] lg:w-[100%] mx-auto">
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
