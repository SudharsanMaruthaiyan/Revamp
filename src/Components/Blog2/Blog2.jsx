import { ChevronRight } from "lucide-react";
import { Blog1Data } from "../../assets/Api/Blog1data";
import Blog1card from "./Blog2card";

const Blog2 = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="lg:w-[80%] w-[90%] mx-auto grid grid-cols-1 pb-20">
          <div className="flex justify-center flex-col items-center gap-3 py-5 w-[60%] mx-auto">
            <div>
              <p className="font-[Poppins] text-[#FF9F00]">Articles</p>
            </div>
            <div>
              <h1 className="lg:text-[48px] text-[24px] font-[Poppins] font-bold">Our Blog Updates</h1>
            </div>
            <div>
              <p className="text-center text-[16px] font-[Poppins]">Seuris finibus eleifend ante quis scelerisque. Nunc rutrum eget dui quis pulvinar. Curabitur et tincidunt lectus, gravida elementum ligula</p>
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
