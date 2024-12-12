import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";

import FindCourse from "../FindCourse";

function Navtab() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="4xl:container mx-auto py-10">
        <div className="w-[80%] mx-auto ">
          <Tabs defaultValue={1} className="">
            <TabsList className="">
              <div className="slider-container shadow-[0px_0px_5px_0px] py-5 px-5 rounded-lg">
                <Slider {...settings}>
                  <div>
                    <Tab
                      value={1}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">MERN </button>
                    </Tab>
                  </div>
                  <div>
                    <Tab
                      value={2}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg  "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">APP</button>
                    </Tab>
                  </div>

                  <div>
                    <Tab
                      value={3}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">AI/ML</button>
                    </Tab>
                  </div>
                  <div>
                    <Tab
                      value={4}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg  "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">JAVA/DSA</button>
                    </Tab>
                  </div>
                </Slider>
              </div>
            </TabsList>
            <TabPanel value={1}>
              <FindCourse></FindCourse>
            </TabPanel>
            <TabPanel value={2}>
              <FindCourse></FindCourse>
            </TabPanel>
            <TabPanel value={3}>
              <FindCourse></FindCourse>
            </TabPanel>
            <TabPanel value={4}>
              <FindCourse></FindCourse>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Navtab;
