import React from 'react'
import { gallery_header, gallery_header420, gallery_header720 } from '../../../assets/Api/ImageApi'

const Header = () => {
  return (
    <>
    <div className="max-w-[100%] pt-32">
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1">
          <img src={gallery_header720} alt="" className="hidden md:block xl:hidden" />
          <img src={gallery_header} alt="" className="hidden xl:block" />
          <img src={gallery_header420} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
      
    </>
  )
}

export default Header
