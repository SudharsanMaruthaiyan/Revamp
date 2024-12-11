import { ChevronRight } from "lucide-react";
import { Blog1Data } from "../../assets/Api/Blog1data";
import Blog1card from "./Blog2card";

const Blog2 = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="lg:w-[80%] w-[90%] mx-auto grid grid-cols-1 pb-20">
          <div className='grid grid-cols-1 lg:grid-cols-2 items-end'>
            <div className=' flex flex-col items-start justify-center pt-20 mb-10 gap-3'>
                <div className=' flex gap-2'>
                    <h1 className=' text-[#FF9F00] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Articles</h1>
                </div>
                <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Our Blog  <span className=' underline text-[#FF9F00] leading-none'><br className=' md:block lg:hidden'/> Updates</span></h1>
            </div>
            <div className='flex justify-end items-center'>
                <p className=' font-[poppins] font-semibold text-lg bg-[#FF9F00] text-white transition-colors py-2 px-5 rounded-lg mb-10'>Explore All Courses</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 gap-y-24">
            {Blog1Data.map((e) => {
              return (
                <Blog1card
                  imgurl={e.imgurl}
                  tag={e.tag}
                  desc={e.desc}
                  comment={e.comment}
                  blogtitle={e.blogtitle}
                ></Blog1card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog2;
