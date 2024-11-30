import { Link } from "react-router-dom";
import { Blogtabcontent2Data } from "../../../API/Blogtabcontent2Data";
import TrendingCard from "../TrendingCard/TrendingCard";
import { Blogtabcontent3Data } from "../../../API/Blogtabcontent3Data";

const Blogtabcontent3 = () => {
  return (
    <>
      <>
      <div className="max-w-[100%]">
        <div className="">
          <div>
            <h1 className=" text-[28px] font-[poppins] font-bold">
              Trending Articles
            </h1>
            <hr className=" mb-2 p-[1.2px] bg-[#E3E3E3]" />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
            {Blogtabcontent3Data.map((e, index) => {
              return (
                <>
                <Link to={"/blogdetails"}>
                <div key={index} id="certi" className="hover:scale-[1.01] rounded-lg">
                    <TrendingCard
                      timg={e.timg}
                      view={e.view}
                      desc={e.desc}
                      name={e.name}
                      year={e.year}
                      ctn={e.ctn}
                    />
                  </div>
                </Link>
                  
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default Blogtabcontent3
