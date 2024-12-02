import { ArrowRight, ChevronRight, Plus, RectangleEllipsisIcon, User } from "lucide-react";

const Blog2card = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 p-5 border rounded-xl border-gray-500">
        <div className="lg:col-span-2 w-full h-full">
            <img src={props.imgurl} alt=""  className="lg:w-[200px] lg:h-[220px] object-cover hover:scale-105 transition rounded-lg"/>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex gap-7">
            <div>
              <p className="flex gap-2 font-[Poppins] items-center"><User></User> {props.tag}</p>
            </div>
            <div>
              <p className="flex gap-2 font-[Poppins] items-center"><RectangleEllipsisIcon></RectangleEllipsisIcon> {props.comment} Comments</p>
            </div>
          </div>
          <div>
            <p className="font-[Poppins] font-bold text-[20px] hover:text-[#FF9F00] lg:text-[25px]">{props.blogtitle}</p>
          </div>
          <div>
            <p className="font-[Poppins] text-[14px] ">{props.desc}</p>
          </div>
          <div>
            <button className="font-[Poppins] text-[16px] flex gap-2 items-center">Read More <ArrowRight></ArrowRight></button>
          </div>
        </div>

      </div>
    
    
    </>
  );
};

export default Blog2card;
