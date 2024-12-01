import { blogheader, blogheadermob, blogheadertab } from "../../../assets/Api/ImageApi"

const Header = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto mt-[100px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
        <img src={blogheadertab} alt="" className="hidden md:block xl:hidden" />
          <img src={blogheader} alt="" className="hidden xl:block" />
          <img src={blogheadermob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
