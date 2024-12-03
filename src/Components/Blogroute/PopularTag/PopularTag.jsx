import { blogimage1 } from "../../../assets/Api/ImageApi"

const PopularTag = () => {
  return (
    <>
        <div>
            <div className=" p-7 shadow-md border-2 my-10">
                <h1 className=" font-[poppins] text-lg relative pb-2 text-[#000] font-bold">Popular Tags
                    <div className=" absolute w-7 h-1 bg-[#FF9F00] bottom-0 rounded-lg">

                    </div>
                </h1>
                <div className=" flex flex-wrap gap-5 pt-6 font-[poppins]">
                    <p className=" text-[#000] bg-[#ff9d009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Apps</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Art & Design</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Courses</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Education</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Learning</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Programming</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">UI/UX</p>
                    <p className=" text-[#000] bg-[#FF9F009b] px-3 py-2 text-[15px] rounded-md hover:text-white hover:bg-[#FF9F00] transition-colors">Video</p>
                </div>
                
            </div>
            <div>
                <img src={blogimage1} alt=""  className="shadow-lg"/>
            </div>
        </div>
    </>
  )
}

export default PopularTag