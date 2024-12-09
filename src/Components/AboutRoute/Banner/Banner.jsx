import React from 'react'
import { appstore, iphone, lapPhone, macbook, playstore } from '../../../assets/Api/ImageApi'

const Banner = () => {
  return (
//     <div class="bg-image bg-cover h-screen" >
//   <!-- Your content here -->
// </div>
    <>
        <div className='max-w-[100%] mx-auto py-36 border- w-full bg-cover bg-[url("https://ik.imagekit.io/jjyo3gsee/RevampImg/bannerf3x.png?updatedAt=1733749914094")]' >
            <div className=' w-[80%] mx-auto'>
                <div className=' flex md:items-start lg:items-center gap-5 flex-wrap lg:flex-nowrap'>

                    {/* left side  */}
                    <div className='w-full lg:w-1/2 justify-center md:flex-col md:items-start'>
                        <h1 className=' font-[poppins] text-4xl font-bold text-center md:text-start text-white'>Grow your career with EduDeme top-notch  online <br /> courses</h1>
                        <p className=' font-[poppins] font-bold text-base text-white pt-4 text-center md:text-start'>With the EduDeme App, you can learn no matter where you are. Download now to learn anything, anytime for free.</p>
                        <div className='flex items-center justify-center md:flex-nowrap flex-wrap md:justify-start gap-8 pt-10'>
                            <div className=' bg-white rounded-2xl p-4' id=' shadow'>
                                <h1 className=' font-[poppins] md:text-3xl text-2xl font-bold md:text-nowrap text-nowrap'>56800 +</h1>
                                <p className=' font-[poppins] font-bold text-sm   pt-1'>Successfully Trained</p>
                            </div>
                            <div className=' bg-white rounded-2xl p-4' id=' shadow'>
                                <h1 className=' font-[poppins] text-2xl md:text-nowrap md:text-3xl font-bold'>800 +</h1>
                                <p className=' font-[poppins] font-bold text-sm  pt-1'>Certified Students</p>
                            </div>
                        </div>
                        <div className=' flex items-center pt-8'>
                            <p className=' font-[poppins] text-sm text-wrap md:w-[65%] text-white'>Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>
                        </div>

                        <div className='  flex items-center gap-5 pt-7 flex-wrap md:flex-nowrap justify-center md:justify-start'>
                            <button className=' bg-black text-white px-8 py-2 rounded-full font-[poppins] '>EXPLORE ALL</button>
                            <button className=' bg-black text-white px-8 py-2 rounded-full font-[poppins] '>EXPLORE ALL</button>
                        </div>
                    </div>

                    {/* right side  */}
                    <div className=' w-full lg:w-1/2 '>
                        <img src={lapPhone} alt="" />
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Banner