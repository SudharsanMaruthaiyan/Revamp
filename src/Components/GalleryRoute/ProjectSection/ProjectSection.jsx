import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectSectionData } from "../../../assets/Api/ProjectSectionData";
import ProjectSectionCard from "./ProjectSectionCard";

function ProjectSection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        {ProjectSectionData.map((e) => {
          return (
            <>
              <div className="mx-2 py-20">
                <ProjectSectionCard
                  img={e.img}
                  tag={e.tag}
                  projecttitle={e.projecttitle}
                  projectdesc={e.projectdesc}
                  doneby={e.doneby}
                  college={e.college}
                ></ProjectSectionCard>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSection;
