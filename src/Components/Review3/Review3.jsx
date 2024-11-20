import Slider from "react-slick";
import { Review1CardApi } from "../../assets/Api/Review1CardApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review3Card from "./Review3Card"
import SamplePrevArrow from "./SamplePrevArrow/SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow/SampleNextArrow";
const Review3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[100%] mx-auto py-20">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-5">
            <div className=" flex items-end justify-between">
              <div>
                <div className="flex gap-5">
                  <div className="">
                    <h5 class="flex gap-3">
                      <p className="font-[Poppins] text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-[#FF9F00] ">
                        Testimonial
                      </p>
                      <svg
                        class="arrow-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 55 13"
                        className="w-[60px] fill-[#F57104]"
                      >
                        <g clip-path="url(#clip0_324_36194)">
                          <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                          <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                          <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                          <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                        </g>
                      </svg>
                    </h5>
                  </div>
                </div>
                <div className="flex ">
                  <p className="font-[Poppins] text-[22px]  md:text-[32px] lg:text-[40px] font-semibold">
                    What Our Student <span className=" text-[#FF9F00] underline">Feedback</span> 
                  </p>
                </div>
              </div>
              <div>
                  <p className=' font-[poppins] font-semibold text-lg bg-[#FF9F00] text-white transition-colors py-2 px-5 rounded-lg mb-3'>Explore All Courses</p>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <Slider {...settings}>
                {Review1CardApi.map((student, index) => (
                  <Review3Card key={index} {...student} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review3;
