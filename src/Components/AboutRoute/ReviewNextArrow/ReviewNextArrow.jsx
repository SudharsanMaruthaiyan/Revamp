import { ArrowRight } from 'lucide-react';
import React from 'react'

const ReviewNextArrow = ({onClick}) => {
  return (
    <button
        className="absolute lg:-left-[190px] lg:bottom-[10px] md:bottom-[370px] md:left-[170px] left-[160px] bottom-[480px]   -translate-y-1/2 bg-gray-200 rounded-full p-3  z-10 border-gray-300 hover:bg-[#FF9F00] group transition-colors"
        onClick={onClick}
      >
        <ArrowRight className="w-6 h-6 text-[#FF9F00] group-hover:stroke-white" />
    </button>
  )
}

export default ReviewNextArrow