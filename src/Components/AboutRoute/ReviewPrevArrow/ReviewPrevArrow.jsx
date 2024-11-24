import { ArrowLeft } from 'lucide-react';
import React from 'react'

const ReviewPrevArrow = ({ onClick }) => {
  return (
    <>
        <button
            className="absolute md:bottom-[370px] md:left-[100px] left-[100px] bottom-[480px] lg:-left-[250px] lg:bottom-[10px] -translate-y-1/2 bg-gray-200 rounded-full p-3  z-10 border-gray-300 hover:bg-[#FF9F00] group transition-colors"
            onClick={onClick}
        >
            <ArrowLeft className="w-6 h-6 text-[#FF9F00] group-hover:stroke-white" />
        </button>
    </>
  )
}

export default ReviewPrevArrow