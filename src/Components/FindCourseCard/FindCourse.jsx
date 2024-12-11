import React from 'react'
import { FindCourseCardApi } from '../../assets/Api/FindCourseCardApi'
import { Link } from 'react-router-dom'
import FindCourseCard from './FindCourseCard'
import Header from './Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const FindCourse = () => {
  return (
    <>
        <div className=' max-w-[100%] mx-auto'>
            <Navbar></Navbar>
            <Header></Header>
            <div className='w-[90%] lg:w-[80%] mx-auto py-[40px]'>
<<<<<<< HEAD
                
=======
                <div className='grid grid-cols-1 lg:grid-cols-2 items-end'>
                    <div className=' flex flex-col items-start justify-center pt-20 mb-10 gap-3'>
                        <div className=' flex gap-2'>
                            <h1 className=' text-[#FF9F00] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Find Courses</h1>
                        </div>
                        <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Best Solutions For Life <span className=' underline text-[#FF9F00] leading-none'><br className=' md:block lg:hidden'/> Coach Solutions</span></h1>
                    </div>
                    <div className='flex justify-end items-center'>
                        <p className=' font-[poppins] font-semibold text-lg bg-[#FF9F00] text-white transition-colors py-2 px-5 rounded-lg mb-10'>Explore All Courses</p>
                    </div>
                </div>
>>>>>>> 6385380ff81b6111b9428b0f9d6b93193d511110
                <div className=' grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-x-5 gap-y-12'>
                    {
                        FindCourseCardApi.map((e,index)=>(
                            <>
                                <Link to={"/coursedetails"}> 
                                    <div key={index}>
                                        <FindCourseCard float={e.float} name={e.name} rating={e.rating} profile={e.profile} student={e.student} lesson={e.lesson} price={e.price} cart={e.cart} image={e.image} domain={e.domain} title={e.title} project={e.project} hourse={e.hourse} mark={e.mark}/>
                                    </div>
                                </Link>
                            </>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>
  )
}

export default FindCourse