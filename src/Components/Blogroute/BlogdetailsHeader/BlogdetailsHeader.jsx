import { Clock, FileText, Star, Users } from "lucide-react"

const BlogdetailsHeader = () => {
  return (
    <>
     <div className="max-w-[100%] bg-[#FF9F00]">
        <div className="w-[100%] mx-auto grid grid-cols-1 pt-44 pb-28 bg-[#FF9F00]">
          <div className="w-[90%] mx-auto">
          <div className="flex flex-col gap-3 items-start">
            <div>
              <p className="font-[poppins] font-semibold text-[24px] text-white md:text-[32px] lg:text-[36px]">
              40 Java Interview Questions for Freshers with Clear & Concise Answers              </p>
            </div>
            <div>
              <p className="font-[poppins] text-[14px] ld:text-base text-[#000] font-normal">
              Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablis
              </p>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                
                <div className="flex">
                  <p className="font-[poppins] text-[#000] text-base m-0">
                   Blog by : Suganth PV
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          </div>
          
        </div>
      </div> 
    </>
  )
}

export default BlogdetailsHeader
