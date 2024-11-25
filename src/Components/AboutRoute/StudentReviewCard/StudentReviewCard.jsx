import { Quote } from 'lucide-react'
import React from 'react'

const StudentReviewCard = ({head,domain,ctn,img,imgctn}) => {
  return (
    <div className='p-10 rounded-2xl mx-3'  id='shadow'>
      <div className=' flex items-center gap-2'>
         <Quote className=' w-10 fill-[#7932fd] stroke-[#7932fd]' />
         <div className=' flex flex-col items-start'>
            <h1 className=' font-[poppins] font-bold text-lg'>{head}</h1>
            <p className=' text-neutral-800 text-xs font-medium font-[poppins]'>{domain}</p>
         </div>
      </div>
      <p className=' text-neutral-800 font-medium font-[poppins] pt-5 pb-10'>{ctn}</p>
      <hr className=' h-[1px] w-full bg-neutral-900'/>
      <div className=' flex items-center gap-2 py-5'>
         <img className=' rounded-lg' src={img} alt="" />
         <p className=' font-bold font-[poppins] text-wrap md:text-base text-sm'>{imgctn}</p>
      </div>
    </div>
  )
}

export default StudentReviewCard