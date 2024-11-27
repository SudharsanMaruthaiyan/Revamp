import React from 'react'
import { appstore, iphone, macbook, playstore } from '../../../assets/Api/ImageApi'

const Banner = () => {
  return (
    <>
        <div className='max-w-[100%] mx-auto bg-[#2f045a] py-20'>
            <div className=' w-[80%] mx-auto'>
                <div className=' flex md:items-start lg:items-center gap-5 flex-wrap md:flex-nowrap '>

                    {/* left side  */}
                    <div className='w-full md:w-1/2 justify-center md:flex-col md:items-start'>
                        <h1 className=' font-[poppins] text-4xl font-bold text-center md:text-start text-white'>Grow your career with EduDeme top-notch  online <br /> courses</h1>
                        <p className=' font-[poppins] font-bold text-base text-white pt-4 text-center md:text-start'>With the EduDeme App, you can learn no matter where you are. Download now to learn anything, anytime for free.</p>
                        <div className='flex items-center justify-center md:justify-start gap-5 pt-10'>
                            <div >
                                <h1 className=' font-[poppins] md:text-4xl text-2xl font-bold text-white md:text-nowrap text-nowrap'>568,000 +</h1>
                                <p className=' font-[poppins] text-neutral-400 font-bold text-sm '>Successfully Trained</p>
                            </div>
                            <div>
                                <h1 className=' font-[poppins] text-2xl md:text-nowrap md:text-4xl font-bold text-white'>129,000 +</h1>
                                <p className=' font-[poppins] text-neutral-400 font-bold text-sm'>Certification Students</p>
                            </div>
                        </div>
                        <div className=' flex items-center pt-8'>
                            <img src="" alt="" />
                            <div className=' bg-gray-800 w-[100px] h-[100px] rounded-lg flex justify-center items-center text-white mr-7'>
                                Qr Code
                            </div>
                            <p className=' font-[poppins] text-sm text-wrap md:w-1/2 text-white'>Scan to download our App on the Play store and App <br /> store</p>
                        </div>
                        
                        {/* <div className='flex flex-wrap md:flex-nowrap justify-center md:items-center text-center md:justify-start gap-4 pt-10'>
                            <div className=' flex items-center gap-2 gb px-5 py-2 rounded-full bg-[#000000] w-fit md:text-nowrap'>
                                <img src="" alt="" />
                                <div className=' flex flex-col items-start'>
                                    <p className=' text-xs font-bold font-[poppins] text-white'>GET IN ON</p>
                                    <p className=' md:text-xl text-base font-[poppins] font-bold text-white'>Google Play</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-2 gb px-5 py-2 rounded-full bg-[#000000] w-fit md:text-nowrap'>
                                <img src="" alt="" />
                                <div className=' flex flex-col items-start'>
                                    <p className=' text-xs font-bold font-[poppins] text-white'>GET IN ON</p>
                                    <p className=' md:text-xl text-base font-[poppins] font-bold text-white'>Google Play</p>
                                </div>
                            </div>
                        </div> */}

                        <div className=' flex flex-wrap md:flex-nowrap justify-center md:items-center text-center md:justify-start gap-4 pt-10'>
                            <img src={playstore} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>

                    {/* right side  */}
                    <div className=' w-full md:w-1/2 '>
                        <div className=' relative'>
                            <img src={macbook} alt="" />
                            <img src={iphone} alt="" className=' h-[200px] md:h-[300px] absolute md:top-28 md:left-20 top-8 left-10' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Banner