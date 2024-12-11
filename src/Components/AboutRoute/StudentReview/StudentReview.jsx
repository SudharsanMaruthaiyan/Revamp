import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { studentReviewCard } from '../../../assets/Api/StudentReviewCard';
import StudentReviewCard from '../StudentReviewCard/StudentReviewCard';
// import ReviewNextArrow from '../ReviewNextArrow/ReviewNextArrow';
// import ReviewPrevArrow from '../ReviewPrevArrow/ReviewPrevArrow';

const StudentReview = () => {
   let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1276,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className=' max-w-[100%] mx-auto pt-12 rounded-[50px]'>
        <div className=' w-[80%] mx-auto overflow-'>
            {/* <div className=' flex flex-col justify-center items-center'>
                <h1 className=' font-semibold text-4xl font-[poppins] pt-10'>What our students say</h1>
                <p className=' text-neutral-700 pb-12'>Join EduDeme at upcoming industry events and exclusive hosted sessions.</p>
            </div> */}

            <div className='grid grid-cols-1 lg:grid-cols-2 items-end'>
                <div className=' flex flex-col items-start justify-center pt-10 mb-10 gap-3'>
                    <div className=' flex gap-2'>
                        <h1 className=' text-[#FF9F00] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>What our students say</h1>
                    </div>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>One Platform Many <span className=' underline text-[#FF9F00] leading-none'><br className=' md:block lg:hidden'/>Course</span></h1>
                </div>
                <div className='flex justify-end items-center'>
                    <p className=' font-[poppins] font-semibold text-lg bg-[#FF9F00] text-white transition-colors py-2 px-5 rounded-lg mb-10'>Explore All Courses</p>
                </div>
            </div>
            <div className=' grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1'>
                {/* left side  */}
                <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-[url("https://ik.imagekit.io/jjyo3gsee/RevampImg/sliderbg.png?updatedAt=1733124826400")] flex flex-col items-center justify-center rounded-2xl py-16 px-10 bg-cover '>
                     <div className="flex flex-col py-5 px-4 rounded-lg border bg-white" id="shadow">
                        <p className=" font-[poppins] font-bold text-lg flex items-center text-center justify-center"> <span className=" text-[#3686F7] font-[poppins]">G</span>  <span className=" text-[#FF302F] font-[poppins]">o</span>  <span className=" text-[#FFBA40] font-[poppins]">o</span>  <span className=" text-[#3686F7] font-[poppins]">g</span> <span className=" text-[#20B15A]">l</span> <span className=" text-[#FF302F]">e</span> <span className=" text-[#3686F7] font-[poppins] pl-1"> R</span>  <span className=" text-[#FF302F] font-[poppins]">e</span>  <span className=" text-[#FFBA40] font-[poppins]">v</span>  <span className=" text-[#3686F7] font-[poppins]">i</span>  <span className=" text-[#20B15A] font-[poppins]">e</span>  <span className=" text-[#FF302F] font-[poppins]">w</span> <span className=" text-[#FFBA40]">s</span></p>
                        <div className=" flex items-center justify-center gap-2 pt-1">
                          <p className=" font-[poppins] font-bold">4.8</p>
                          <p className=" font-[poppins] font-bold">(457)</p>
                        </div>
                        <div className=" flex items-center justify-center gap-1 pt-1">
                            <Star className=" w-10 h-10 stroke-white fill-[#ED9700]"/>
                            <Star className=" w-10 h-10 stroke-white fill-[#ED9700]"/>
                            <Star className=" w-10 h-10 stroke-white fill-[#ED9700]"/>
                            <Star className=" w-10 h-10 stroke-white fill-[#ED9700]"/>
                            <Star className=" w-10 h-10 stroke-white fill-[#ED9700]"/>
                        </div>
                     </div>
                     <div className="flex gap-3 pt-6">
                        <button className="button bg-white p-3 rounded-full" onClick={previous}>
                           <ArrowLeft className=' stroke-neutral-800'/>
                        </button>
                        <button className="button bg-white p-3 rounded-full" onClick={next}>
                           <ArrowRight className=' stroke-neutral-800'/>
                        </button>
                     </div>
                </div>
                {/* right side  */}
                <div className=" col-span-4 lg:col-span-3 xl:col-span-4 w-full overflow- slider-container">
                    <Slider ref={slider => {
                        sliderRef = slider;
                     }} {...settings}>
                        {
                            studentReviewCard.map((item,index)=>(
                                <div key={index} className=''>
                                    <StudentReviewCard head={item.head} domain={item.domain} ctn={item.ctn} img={item.img} imgctn={item.imgctn}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentReview