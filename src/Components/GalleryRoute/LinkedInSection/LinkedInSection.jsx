import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkedInData } from "../../../assets/Api/LinkedInData";
import { linked_in } from "../../../assets/Api/ImageApi";
import LinkedinCard from "../LinkedinCard/LinkedinCard";

const LinkedInSection = () => {
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
    <>
      <div className="max-w-[100%]">
        <div className="w-[90%] lg:w-[100%] mx-auto grid grid-cols-1 py-[60px]">
          <div className="flex flex-col items-center gap-5">
            <div>
              <p className="bg-[#FF9F00] text-white font-[poppins] px-3 py-2 rounded-full">How We Start Our Journey</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="font-[poppins] font-bold text-[22px] text-center lg:text-[40px]">Start your Learning Journey Today!</p>
              </div>
              <div>
                <p className="font-[poppins] lg:text-[20px] text-[14px] text-center">
                  Groove’s intuitive shared inbox makesteam members together
                  organize, prioritize and.In this episode.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Slider {...settings}>
              {LinkedInData.map((item,index) => {
                return (
                  <>
                  <div key={index} className="mx-3 py-20">
                    <LinkedinCard name={item.name} desc={item.desc} domain={item.domain} cdimage={item.cdimage} image={item.image}/>
                  </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkedInSection;
