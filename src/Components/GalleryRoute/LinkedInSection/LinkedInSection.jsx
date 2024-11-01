import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkedInData } from "../../../assets/Api/LinkedInData";
import { linked_in } from "../../../assets/Api/ImageApi";

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
      <div className="max-[100%]">
        <div className="w-[100%] lg:w-[100%] grid grid-cols-1 py-[60px]">
          <div className="flex flex-col items-center gap-5">
            <div>
              <p className="bg-[#FF9F00] text-white font-[poppins] px-3 py-2 rounded-full">How We Start Our Journey</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p className="font-[poppins] font-bold text-[22px] lg:text-[40px]">Start your Learning Journey Today!</p>
              </div>
              <div>
                <p className="font-[poppins] lg:text-[20px] text-[14px] text-center">
                  Groove’s intuitive shared inbox makesteam members together
                  organize, prioritize and.In this episode.
                </p>
              </div>
            </div>
          </div>
          <div>
          <Slider {...settings}>
        {LinkedInData.map((e) => {
          return (
            <>
            <div className="mx-2 py-20">
                <img src={e.imgurl} alt="" />
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
