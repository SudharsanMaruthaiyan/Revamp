import { ArrowRight, ChevronRight, Plus } from "lucide-react";

const Blog2card = (props) => {
  return (
    <>
    <div className=" relative">
      <div className="overflow-hidden group relative hover:-translate-y-2 transition-all">
        <img src={props.imgurl} alt="blog image" className="w-[100%] h-[400px]  object-cover z-20 rounded-t-xl" />
        <div className="absolute top-0 w-full h-full flex justify-center items-center -translate-y-[100%] group-hover:-translate-y-[1%] transition  bg-slate-300 opacity-55 rounded-xl">
            <Plus className=""></Plus>
        </div>
      </div>
      <div className="rounded-xl flex flex-col shadow-lg  transition mx-auto absolute right-4 left-4 -bottom-16 bg-white ">
        <div className="flex flex-col p-5 gap-5">
          <div className="flex justify-between">
            <div>
              <button className="px-3 text-[14px] rounded-md py-0.5 bg-[#FF9F00] font-[Poppins] text-white hover:bg-black ">{props.tag}</button>
            </div>
            <div>
              <p className="font-[Poppins] text-[16px] font-medium text-[#FF9F00] ">{props.date}</p>
            </div>
          </div>
          <div>
            <p className="font-[Poppins] text-[16px] md:text-[18px] lg:text-[24px] text-black transition-colors hover:text-[#FF9F00] font-medium">{props.blogtitle}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div>
                <img src={props.authorimg} alt="" className=" w-12 rounded-full"/>
              </div>
              <div>
                <div>
                  <p className="font-[Poppins] text-[16px] font-medium text-[#2a254d] hover:text-[#FF9F00] cursor-pointer">{props.authorname}</p>
                  <p className="font-[Poppins] text-[12px] font-medium text-[#2a254d]">{props.designation}</p>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-5 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#F57104] rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#F57104] group-hover:translate-x-0 ease">
                  <ArrowRight></ArrowRight>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                <ArrowRight></ArrowRight>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Blog2card;
