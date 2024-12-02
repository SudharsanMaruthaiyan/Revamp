import React from 'react'
import { coursemainheader, coursemainheadermob, coursemainheadertab } from '../../../../assets/Api/ImageApi'

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] lg:pt-[95px] md:pt-[] pt-[86px]">
        <div className="w-[100%] lg:w-[100%] mx-auto grid grid-cols-1">
          <img src={coursemainheadertab} alt="" className="hidden md:block xl:hidden" />
          <img src={coursemainheader} alt="" className="hidden xl:block" />
          <img src={coursemainheadermob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
