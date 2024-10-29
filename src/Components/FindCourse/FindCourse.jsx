import React from 'react'
import FindCourseCard from './FindCourseCard/FindCourseCard'
import { FindCourseCardApi } from '../../assets/Api/FindCourseCardApi'
import { Link } from 'react-router-dom'

const FindCourse = () => {
  return (
    <>
        <div className=' max-w-[100%] mx-auto'>
            <div className=' w-[80%] mx-auto'>
                <div className=' flex flex-col items-start justify-center pt-20 pb-10'>
                    <div className=' flex'>
                        <h1 className=' text-[#FF9F00] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Find Courses</h1>
                    </div>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Best Solutions For Life <span className=' underline text-[#FF9F00] leading-none'><br className=' md:block lg:hidden'/> Coach Solutions</span></h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-x-5 gap-y-12'>
                    {
                        FindCourseCardApi.map((e,index)=>(
                            <>
                                <Link to={"/course"}> 
                                    <div key={index}>
                                        <FindCourseCard float={e.float} name={e.name} rating={e.rating} profile={e.profile} student={e.student} lesson={e.lesson} price={e.price} cart={e.cart} image={e.image} domain={e.domain} title={e.title} project={e.project} hourse={e.hourse} mark={e.mark}/>
                                    </div>
                                </Link>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default FindCourse