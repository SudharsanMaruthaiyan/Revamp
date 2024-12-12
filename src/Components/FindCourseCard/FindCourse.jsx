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
            <div className='w-[100%] lg:w-[100%] mx-auto py-[40px]'>
               
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
        </div>
    </>
  )
}

export default FindCourse