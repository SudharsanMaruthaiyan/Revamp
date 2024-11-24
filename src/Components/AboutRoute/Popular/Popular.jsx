import React from 'react'
import { PopularCardApi } from '../../../assets/Api/PopularCardApi'
import PopularCard from './PopularCard/PopularCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 665,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
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
    <div className=' max-w-[100%] mx-auto mb-56'>
      <div className=' w-[80%] mx-auto'>
         <div className=' py-20'>
            <h1 className=' font-[poppins] text-3xl font-bold text-black'>Our Popular online courses</h1>
         </div>
         <Slider {...settings} className=''>
            {
               PopularCardApi.map((item,index)=>(
                  <>
                     <div key={index}>
                        <PopularCard img={item.img} float={item.float} price ={item.price} review={item.review} head={item.head} lesson={item.lesson} student={item.student} pimag={item.pimg} name={item.name} enroll={item.enroll}/>
                     </div>
                  </>
               ))
            }
         </Slider>
      </div>
    </div>
  )
}

export default Popular