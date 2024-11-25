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
      // nextArrow: <ReviewNextArrow />,
      // prevArrow: <ReviewPrevArrow />,
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
    <div className=' max-w-[100%] mx-auto bg-gradient-to-t from-[#FFFFFF] to-[#FFF1DB] py-12 rounded-[50px]'>
        <div className=' w-[80%] mx-auto overflow- mb-10'>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className=' font-semibold text-4xl font-[poppins] pt-10'>What our students say</h1>
                <p className=' text-neutral-700 pb-12'>Join EduDeme at upcoming industry events and exclusive hosted sessions.</p>
            </div>
            <div className=' grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1'>
                {/* left side  */}
                <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-[#7932FD] flex flex-col items-center rounded-2xl py-10 px-10'>
                     <div className="flex flex-col py-3 px-4 rounded-lg border" id="shadow">
                                    <p className=" font-[poppins] font-bold text-lg flex items-center"> <span className=" text-[#3686F7] font-[poppins]">G</span>  <span className=" text-[#FF302F] font-[poppins]">o</span>  <span className=" text-[#FFBA40] font-[poppins]">o</span>  <span className=" text-[#3686F7] font-[poppins]">g</span> <span className=" text-[#20B15A]">l</span> <span className=" text-[#FF302F]">e</span> <span className=" text-[#3686F7] font-[poppins] pl-1"> R</span>  <span className=" text-[#FF302F] font-[poppins]">e</span>  <span className=" text-[#FFBA40] font-[poppins]">v</span>  <span className=" text-[#3686F7] font-[poppins]">i</span>  <span className=" text-[#20B15A] font-[poppins]">e</span>  <span className=" text-[#FF302F] font-[poppins]">w</span> <span className=" text-[#FFBA40]">s</span></p>
                                    <div className=" flex items-center gap-2 pt-1">
                                          <p className=" font-[poppins]">4.8</p>
                                          <div className=" flex items-center gap-1">
                                             <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                             <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                             <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                             <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                             <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                          </div>
                                          <p className=" font-[poppins]">(246)</p>
                                    </div>
                     </div>
                     {/* <h1 className=' font-bold text-4xl font-[poppins] py-5'>4.9/5</h1> */}
                     <div className='flex items-center bg-[#04B77C] px-3 py-1 mt-5 w-fit rounded-full gap-2'>
                           <Star className=' stroke-white fill-white w-5'/>
                           <Star className=' stroke-white fill-white w-5'/>
                           <Star className=' stroke-white fill-white w-5'/>
                           <Star className=' stroke-white fill-white w-5'/>
                           <Star className=' stroke-white fill-white w-5'/>
                     </div>
                     <p className=' py-4 leading-relaxed text-center'>Rated 4.9 out of 5 from 9.614 <br /> customer review</p>
                     <div className=' flex items-center gap-2'>
                           <Star className=' fill-[#04B77C] w-12 h-12 stroke-[#04B77C]'/>
                           <p className=' font-bold text-4xl font-[poppins]'>TrustPilot</p>
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