
import { Instagram, Linkedin, LucideYoutube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { footer_image } from '../../assets/Api/ImageApi'

const Footer = () => {
  return (
    <>
        <div className=' max-w-[100%] mx-auto bg-cover py-20' style={{ backgroundImage: 'url(https://ik.imagekit.io/jjyo3gsee/sk.png?updatedAt=1732105110400)' }}>
            <div className=' w-[80%] mx-auto'>
                <div  className=' flex items-start flex-wrap justify-between gap-5'>
                  <div>
                    <h1 className=' font-[poppins] text-2xl font-semibold py-5 text-white'>
                        Quick Link
                    </h1>
                    <ul className=' flex flex-col gap-6'>
                        <li className=' font-[poppins] font-medium text-white'>Home</li>
                        <li className=' font-[poppins] font-medium text-white'>Courses</li>
                        <li className=' font-[poppins] font-medium text-white'>About Us</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className=' font-[poppins] text-2xl font-semibold py-5 text-white'>
                        Courses
                    </h1>
                    <ul className=' flex flex-col gap-6'>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Mern Full Stack Devlopment</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> App Dvelopment</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Java and Springboot</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Flutter Development</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> UI/UX Mastering Figma</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h1 className=' font-[poppins] text-2xl font-semibold py-5 text-white'>
                        Support
                    </h1>
                    <ul className=' flex flex-col gap-6'>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Contact Us</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Terms and Condition</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Privacy Policy</Link></li>
                        <li className=' font-[poppins] font-medium text-white'><Link to={"/"}> Refund/Cancellation Policy</Link></li>
                    </ul>
                    <h1 className=' font-[poppins] text-2xl font-semibold py-5 text-white'>Address</h1>
                    <p className=' font-[poppins] font-medium text-white'>70 Kaliamman Kovil Street Palanganatham <br /> Pasumpon Nagar Madurai-625003</p>
                  </div>
                </div>
                <hr className=' my-10 h-[1.8px] bg-gray-800 '/>
                <div className=' flex items-center justify-between flex-wrap gap-2'>
                    <div>
                        <p className=' font-[poppins] font-medium text-white'>&copy; 2024 All Reserved by Revamp </p>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <Instagram  className=' stroke-white'/>
                        <Linkedin  className=' stroke-white'/>
                        <LucideYoutube  className=' stroke-white'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer