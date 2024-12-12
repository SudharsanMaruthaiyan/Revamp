import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import LinkedInSection from "../LinkedInSection/LinkedInSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import InstagramSection from "../InstagramSection/InstagramSection";
import GallerySection from "../GallerySection/GallerySection";



function Navtab() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
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
        <div className="w-[80%] mx-auto flex flex-col gap-5 justify-between">
          <div className="px-3 py-5 shadow-[0px_0px_5px_0px] rounded-lg">
            <div className="flex justify-start gap-20">
              <button ><a href="#linkedin" className="px-10 py-2 rounded-lg text-[20px] focus:bg-[#FF9F00] focus:text-white font-[Poppins] font-medium">LinkedIn</a></button>
              <button ><a href="#instagram" className="px-10 py-2 rounded-lg text-[20px] focus:bg-[#FF9F00] focus:text-white font-[Poppins] font-medium">Instagram</a></button>
              <button ><a href="#project" className="px-10 py-2 rounded-lg text-[20px] focus:bg-[#FF9F00] focus:text-white font-[Poppins] font-medium">Project</a></button>
              <button ><a href="#gallery" className="px-10 py-2 rounded-lg text-[20px] focus:bg-[#FF9F00] focus:text-white font-[Poppins] font-medium" >Gallery</a></button>
            </div>
          </div>
          <div id="linkedin">
            <LinkedInSection></LinkedInSection>
          </div>
          <div id="instagram">
            <InstagramSection></InstagramSection>
          </div>
          <div id="project">
            <ProjectSection></ProjectSection>
          </div>
          <div id="gallery">
            <GallerySection></GallerySection>
          </div>
          
        </div> 
      </div>
    </>
  );
}

export default Navtab;
