import { ArrowRight, BookOpen, Star, UsersRound } from 'lucide-react'
import React from 'react'

const PopularCard = ({img,float,price,review,head,lesson,student,pimg,name,enroll}) => {
  return (
    <div className=' bg-white rounded-2xl w-fit hover:drop-shadow-2xl overflow-hidden group mx-3 transition-all' id='shadow'>
        <div className=' rounded-2xl relative inline-block overflow-hidden'>
            <img className=' rounded-2xl hover:scale-105 transition-all duration-500 object-cover"' src={img} alt="" />
            <p className=' absolute top-5 left-5 text-white py-1 px-3 rounded-full bg-[#3E3A33]'>{float}</p>
            <p className=' absolute right-5 bottom-5 bg-red-800 text-white font-[poppins] text-base md:text-xl px-3 py-1 rounded-full'>{price}</p>
        </div>
        <div className=' p-5 transition-all overflow-hidden duration-500'>
            <div className=' flex items-center gap-2'>
                <div className=' flex items-center gap-1'> 
                    <Star className=' w-4 fill-[#3E3A33] stroke-[#3E3A33]'/>
                    <Star className=' w-4 fill-[#3E3A33] stroke-[#3E3A33]'/>
                    <Star className=' w-4 fill-[#3E3A33] stroke-[#3E3A33]'/>
                    <Star className=' w-4 fill-[#3E3A33] stroke-[#3E3A33]'/>
                    <Star className=' w-4 fill-[#3E3A33] stroke-[#3E3A33]'/>
                </div>
                <p className=' text-neutral-700 font-[poppins] '>{review}</p>
            </div>
            <h1 className=' font-black text-2xl font-[poppins] text-black py-3'>{head}</h1>
            <div className=' flex items-center gap-2'>
                <div className=' flex items-center gap-2 border px-3 py-1 rounded-full'>
                    <BookOpen className=' stroke-violet-700 w-5'/>
                    <p className=' text-neutral-700 text-sm font-[poppins]'>{lesson}</p>
                </div>
                <div className=' flex items-center gap-2 border px-3 py-1 rounded-full'>
                    <UsersRound className=' stroke-violet-700 w-5'/>
                    <p className=' text-neutral-700 text-sm font-[poppins]'>{student}</p>
                </div>
            </div>
            <div className=' flex gap-2 items-center pt-5'>
                <img className=' rounded-full w-12 h-12' src={img} alt="" />
                <p className=' font-bold text-black font-[poppins] text-sm'>{name}</p>
            </div>
            <div className=' hidden group-hover:block pt-5 transition-all duration-300 ease-in-out'>
                <button className=' flex justify-center items-center gap-2 bg-[#7F57F4] w-full text-center py-3 rounded-full font-[poppins] font-bold text-white'>{enroll}
                    <ArrowRight className=' w-5 '/>
                </button>
            </div>
        </div>
        
    </div>
  )

}

export default PopularCard