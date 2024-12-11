import { Quote } from 'lucide-react'
import React from 'react'
import { qutoes } from '../../../assets/Api/ImageApi'

const StudentReviewCard = ({head,domain,ctn,img,imgctn}) => {
  return (
    <div className='p-10 py-20 rounded-2xl mx-3 flex flex-col justify-center items-center'  id='shadow'>
      <div className=' flex items-center gap-2'>
         {/* <Quote className=' w-10 fill-[#7932fd] stroke-[#7932fd]' /> */}
         <img src={qutoes} alt="" className=' w-8'/>
         <div className=' flex flex-col items-start'>
            <h1 className=' font-[poppins] font-bold text-lg text-center'>{head}</h1>
            <p className=' text-neutral-800 text-xs font-medium font-[poppins] text-center'>{domain}</p>
         </div>
      </div>
      <p className=' text-neutral-800 font-medium font-[poppins] pt-5 text-center'>{ctn}</p>
    </div>
  )
}

export default StudentReviewCard