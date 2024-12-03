import React from 'react'
import { instalogo } from '../../../assets/Api/ImageApi'

const InstagramSectionCard = (props) => {
  return (
    <div className='w-[100%] grid grid-cols-1 border border-[#D9D9D9] rounded-xl gap-3'>
      <div className='flex justify-between p-5'>
        <div className='flex flex-col gap-2'>
            <div>
                <p className='font-[Poppins] font-bold text-[18px]'>{props.posttitle}</p>
            </div>
            <div>
                <p className='font-[Poppins] text-[14px] text-[#7c7c7c]'>{props.instaid}</p>
            </div>
        </div>
        <div>
            <img src={instalogo} alt="" className='w-[80%]'/>
        </div>
      </div>
      <div className=''>
        <img src={props.imgurl} alt="" />
      </div>
      <div className='p-5'>
        <p className='font-[Poppins] text-[16px] '>{props.description}</p>
      </div>
    </div>
  )
}

export default InstagramSectionCard
