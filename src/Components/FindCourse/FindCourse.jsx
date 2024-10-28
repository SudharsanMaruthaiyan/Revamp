import React from 'react'
import { FindCourseCardApi } from '../../assets/FindCourseCardApi'
import FindCourseCard from './FindCourseCard/FindCourseCard'

const FindCourse = () => {
  return (
    <>
        <div className=' max-w-[100%] mx-auto'>
            <div className=' w-[85%] mx-auto'>
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Find Courses</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Best Solutions For Life Coach Solutions</h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                    {
                        FindCourseCardApi.map((e,index)=>(
                            <>
                                <div key={index}>
                                    <FindCourseCard float={e.float} name={e.name} rating={e.rating} profile={e.profile} student={e.student} lesson={e.lesson} price={e.price} cart={e.cart} image={e.image} domain={e.domain} title={e.title} project={e.project} hourse={e.hourse} />
                                </div>
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