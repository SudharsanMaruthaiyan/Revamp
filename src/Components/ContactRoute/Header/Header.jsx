import React from 'react'
import { contactheader, contactheadermob, contactheadertab } from '../../../assets/Api/ImageApi'

const Header = () => {
  return (
    <>
      <div className=" max-w-[100%] mx-auto mt-[100px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
        <img src={contactheadertab} alt="" className="hidden md:block xl:hidden" />
          <img src={contactheader} alt="" className="hidden xl:block" />
          <img src={contactheadermob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
