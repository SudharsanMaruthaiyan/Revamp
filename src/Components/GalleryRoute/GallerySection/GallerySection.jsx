import React from 'react'
import { blog1_1, blogimage1, blogimage2, course1, course3, course5, course6 } from '../../../assets/Api/ImageApi'

const GallerySection = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
            <img src={course5} alt="" className='w-full rounded-lg shadow-[0px_0px_20px_0px]'  />
        </div>
        <div>
            <img src={blogimage2} alt="" className='w-full rounded-lg shadow-[0px_0px_20px_0px]' />
        </div>
        <div>
            <img src={blog1_1} alt="" className='w-full rounded-lg shadow-[0px_0px_20px_0px]' />
        </div>
        <div> 
            <img src={course1} alt="" className='w-full rounded-lg shadow-[0px_0px_20px_0px]' />
        </div>
        <div>
            <img src={course3} alt="" className='w-full rounded-lg shadow-[0px_0px_20px_0px]' />
        </div>

      </div>
    </div>
  )
}

export default GallerySection
