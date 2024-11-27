import React from 'react'
import { aboutcertifcate } from '../../../assets/Api/ImageApi'
import { Dot, Globe, GraduationCap, Users } from 'lucide-react'

const CertificateSection = () => {
  return (
    <>
    <div className='max-w-[100%]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[80%] mx-auto py-[40px] gap-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 bg-[url(https://ik.imagekit.io/HoneyJoe/Revamp%20web/h4-banner-path-1.png?updatedAt=1732691096816)] bg-[#7659FF] p-10 rounded-lg'>
                <div className='col-span-2 flex flex-col gap-5'>
                    <div className='flex justify-start'>
                        <p className='flex rounded-full font-[Poppins] px-3 py-1 bg-[#DFDEFF] text-[#7659ff] gap-3'><Dot></Dot> learn & get certificate</p>
                    </div>
                    <div>
                        <p className='font-[Poppins] text-white text-[24px] lg:text-[30px] font-bold '>Free Online Courses With Certificates & Diplomas</p>
                    </div>
                    <div>
                        <p className='font-[Poppins] text-white font-bold flex gap-5'><GraduationCap></GraduationCap> 8 Million +Graduates
</p>
                    </div>

                    <div>
                        <p className='font-[Poppins] text-white font-bold flex gap-5'><Users></Users> 40 Million +Learners</p>
                    </div>
                    <div>
                        <p className='font-[Poppins] text-white font-bold flex gap-5'><Globe></Globe> 193 Countries</p>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <img src={aboutcertifcate} alt="" className='h-full'/>
                </div>

            </div>
            <div className='p-10 flex flex-col gap-5 bg-[url(https://ik.imagekit.io/HoneyJoe/Revamp%20web/h4-banner-bg.png?updatedAt=1732691096797)] rounded-lg'>
                <div>
                    <p className='text-center font-[Poppins] text-white font-bold text-[18px] lg:text-[24px]' >Advance Your Career. Learn In demand Skills.</p>
                </div>
                <div className='w-[80%] mx-auto'>
                    <p className='text-white font-[Poppins] text-[14px] text-center'>
                    Upskill in business analytics, health care, graphic design, management and more.
                    </p>
                </div>

                <div className='flex flex-wrap gap-3 items-center justify-center'>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>Information System</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>Human Resources</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>Bussiness Management</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>Health Care</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>English Language</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>German Language</button>
                    <button className='font-[Poppins] text-white px-5 py-2 font-bold rounded-full hover:text-[#7659ff] hover:bg-white bg-[#7E3041] text-[14px] lg:text-[16px]'>Sales</button>
                    

                </div>

            </div>

        </div>
    </div>
      
    </>
  )
}

export default CertificateSection
