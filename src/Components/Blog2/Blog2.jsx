import { ChevronRight } from "lucide-react";
import { Blog1Data } from "../../assets/Api/Blog1data";
import Blog1card from "./Blog2card";

const Blog2 = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[80%] mx-auto grid grid-cols-1 pb-20">
          <div className="flex justify-center flex-col items-start">
            <div className="">
              <h5 class="flex gap-3">
                    <p className="font-[Poppins] text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-[#FF9F00] ">
                      Latest Blog
                    </p>
                    <svg
                      class="arrow-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 55 13"
                      className="w-[60px] fill-[#F57104]"
                    >
                      <g clip-path="url(#clip0_324_36194)">
                        <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                        <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                        <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                        <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                      </g>
                    </svg>
              </h5>
            </div>
            <div className="flex justify-center pb-9">
              <p className="font-[Poppins] text-[22px]  md:text-[32px] lg:text-[40px] font-semibold">Latest <span className=" underline text-[#FF9F00]">Updates & Articles</span></p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-24">
            {
                Blog1Data.map((e)=>{
                    return(
                        <Blog1card
                            imgurl = {e.imgurl}
                            tag = {e.tag}
                            designation = {e.designation}
                            date = {e.date}
                            authorimg = {e.authorimg}
                            blogtitle = {e.blogtitle}
                            authorname= {e.authorname}
                        >
                        </Blog1card>
                    )
                })
            }
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog2;
