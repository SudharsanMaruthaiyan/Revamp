import { Folders,UserRound,History, Heart, Star, ArrowRight,Share } from "lucide-react"
import { les, prj, stu, suganth, timer } from "../../../src/assets/Api/ImageApi"

const FindCourseCard = ({float,name,lesson,price,cart,rating,student,profile,image,domain,title,project,hourse,mark}) => {
  return (
    <>
        <div>
            <div className="">
                <div className=" bg-white border rounded-3xl relative" id="shadow">
                    <div className=" relative p-3">
                        <div className=" relative w-full">
                            <img src={image} alt="Course_image" className=" rounded-2xl w-full" />
                            <p className=" bg-[#FF9F00] text-white px-2 py-1 w-fit rounded-md font-bold  font-[poppins] text-sm absolute top-8 left-8">{float}</p>
                        </div>
                        <div className=" absolute w-full -bottom-1">
                            <div className=" flex items-center gap-2 justify-between px-8">
                                <div className=" flex items-center shadow-lg border px-3 py-1 rounded-3xl bg-white gap-1">
                                    <div className=" flex items-center gap-1">
                                        <Star className=" w-4 stroke-[#FF9F00] fill-[#FF9F00]"/>
                                        <Star className=" w-4 stroke-[#FF9F00] fill-[#FF9F00]"/>
                                        <Star className=" w-4 stroke-[#FF9F00] fill-[#FF9F00]"/>
                                        <Star className=" w-4 stroke-[#FF9F00] fill-[#FF9F00]"/>
                                        <Star className=" w-4 stroke-[#FF9F00] fill-[#FF9F00]"/>
                                    </div>
                                    <p className=" font-[poppins]">{rating}</p>
                                </div>
                                <div className=" hover:cursor-pointer">
                                    <Share className=" w-9 h-9 bg-white shadow-lg border p-2 rounded-full"/>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" px-7 pt-6">
                        <div className=" flex items-center gap-2">
                            <img src={suganth} alt="Course_profile_image" className=" rounded-full w-8" />
                            <p className=" font-[poppins]"> <span className=" text-[#FF9F00]">{name}</span> {domain}</p>
                        </div>
                        <h1 className=" font-[poppins] md:text-xl text-lg font-bold py-3 md:text-nowrap 2xl:text-nowrap">{title}</h1>
                        <div className=" flex items-center gap-x-4 gap-y-3 flex-wrap">
                            <div className=" flex items-center gap-2">
                                {/* <History className=" w-5 stroke-[#FF9F00]"/> */}
                                <img src={timer} alt="" />
                                <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">{hourse}</p>
                            </div>
                            <div className=" flex items-center gap-2">
                                {/* <UserRound className=" w-5 stroke-[#FF9F00]"/>   */}
                                <img src={stu} alt="" />
                                <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">{student}</p>
                            </div>
                            <div className=" flex items-center gap-2">
                                {/* <Folders className=" w-5 stroke-[#FF9F00]"/> */}
                                <img src={les} alt="" />
                                <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">{lesson}</p>
                            </div>
                            <div className=" flex items-center gap-2">
                                {/* <Folders className=" w-5 stroke-[#FF9F00]"/> */}
                                <img src={prj} alt="" />
                                <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">{project}</p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-between py-4 flex-wrap gap-2" id="">
                            <button className=" flex items-center font-[poppins] font-bold hover:bg-black bg-[#FF9F00] px-4 py-2 transition-colors rounded-lg text-white text-sm gap-2"><span className="line-through">{mark}</span>{price}</button>
                            <button className=" flex items-center font-[poppins] font-bold bg-black hover:bg-[#FF9F00] px-4 py-2 transition-colors rounded-lg text-white text-sm gap-2">{cart}<ArrowRight className=" w-5 "/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FindCourseCard