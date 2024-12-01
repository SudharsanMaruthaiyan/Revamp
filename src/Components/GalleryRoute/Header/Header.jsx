import React from 'react'
import { gallery, gallery1, gallery2, gallery_header, gallery_header420, gallery_header720 } from '../../../assets/Api/ImageApi'

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] lg:pt-[95px] md:pt-[] pt-[86px]">
        <div className="w-[100%] lg:w-[100%] mx-auto grid grid-cols-1">
          <img src={gallery2} alt="" className="hidden md:block xl:hidden" />
          <img src={gallery} alt="" className="hidden xl:block" />
          <img src={gallery1} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
