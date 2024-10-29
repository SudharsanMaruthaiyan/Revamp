
import { Folders,UserRound,History, Heart, Star, ArrowRight,Share,ArrowUpRight } from "lucide-react"
import { suganth, FcourseImg1, FProfileimag, vectorl, vectorr, prj, les, stu, timer, mern } from "../../assets/Api/ImageApi";
const Homepage = () => {
  return (
    <>
        <div className="max-w-[100%] mx-auto"> 
            <div className="w-[80%] lg:w-[80%] mx-auto py-[50px] lg:pt-[4.3rem] lg:pb-[4rem] mt-24">
                <div className="grid grid-cols-1 md:grid-cols-4 w-full items-center gap-y-10">
                    <div className="col-span-4 xl:col-span-3  order-2 md:order-1 lg:pt-5">
                        <div className="flex items-center gap-2">
                            <img src={vectorl} alt="Vector_icon" />
                            <p className=" font-[poppins] text-base text-[#FF9F00]">EDUCATE THEM WHILE THEY ARE STUDENT</p>
                            <img src={vectorr} alt="Vector_icon" />
                        </div>
                        <div className=" py-2">
                            <p className=" text-[26px] font-[poppins] lg:text-[66px] font-bold md:text-[54px] text-wrap md:text-nowrap leading-tight">MOULDING YOUNG MINDS <br /> <span className="lg:text-[66px] md:text-[52px] text-[24px] font-medium">to Enhance their Skills</span> </p>
                            
                            <p className=" font-[poppins] lg:text-[66px] text-[26px] font-bold md:leading-tight md:text-[54px] underline text-[#FF9F00]">WITH REVAMP </p>

                            <p className=" font-[poppins] text-slate-600 py-5 text-wrap lg:pr-72">Discover a world of knowledge and opportunities with our online education platform pursue a new career</p>
                        </div>
                        <div className=" flex items-center gap-5 flex-wrap ">
                            <div className="flex flex-col py-3 px-4 rounded-lg border" id="shadow">
                                <p className=" font-[poppins] font-bold text-lg flex items-center"> <span className=" text-[#3686F7] font-[poppins]">G</span>  <span className=" text-[#FF302F] font-[poppins]">o</span>  <span className=" text-[#FFBA40] font-[poppins]">o</span>  <span className=" text-[#3686F7] font-[poppins]">g</span> <span className=" text-[#20B15A]">l</span> <span className=" text-[#FF302F]">e</span> <span className=" text-[#3686F7] font-[poppins] pl-1"> R</span>  <span className=" text-[#FF302F] font-[poppins]">e</span>  <span className=" text-[#FFBA40] font-[poppins]">v</span>  <span className=" text-[#3686F7] font-[poppins]">i</span>  <span className=" text-[#20B15A] font-[poppins]">e</span>  <span className=" text-[#FF302F] font-[poppins]">w</span> <span className=" text-[#FFBA40]">s</span></p>
                                <div className=" flex items-center gap-2 pt-1">
                                    <p className=" font-[poppins]">4.8</p>
                                    <div className=" flex items-center gap-1">
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                    </div>
                                    <p className=" font-[poppins]">(246)</p>
                                </div>
                            </div>
                            <div className=" flex items-center gap-5 md:space-x-[70px] space-x-[70px]">
                                <div className=" flex items-center relative">
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px]">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full p-1 hover:scale-105 transition bg-white" alt="student" />
                                    </div>
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 -right-10 md:-right-10">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full bg-white p-1  hover:scale-105 transition" alt="student" />
                                    </div>
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 md:-right-20 -right-20">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full hover:scale-105 transition bg-[#fff] p-1 " alt="student" />
                                    </div>
                                </div>
                                <div className="">
                                    <p className=" text-lg font-[poppins] font-bold leading-6 flex items-center gap-2"> Premium Students</p>
                                    <p className=" text-slate-600 font-[poppins] text-sm text-nowrap">Join now Live Sessions</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-10 gap-4 flex-wrap">
                            <button className=" flex items-center py-2 px-8 font-medium font-[poppins] rounded-md  border border-[#FF9F00] hover:bg-[#FF9F00] hover:text-white transition text-nowrap">Explore</button>
                            <button className=" flex items-center py-2 bg-white hover:bg-[#FF9F00] px-8 hover:text-white font-medium font-[poppins] rounded-md text-[#131836] border border-[#FF9F00]  transition text-nowrap">Contact Us</button>
                        </div>
                    </div>
                    {/* card  */}
                    <div className="col-span-5 xl:col-span-1 order-2 md:order-1">
                        <div className=" bg-white border rounded-3xl pb-4 " id="shadow">
                            <div className=" relative p-3">
                                <div className=" relative w-full">
                                    <img src={mern} alt="Course_image" className=" rounded-2xl w-full" />
                                    <p className=" bg-[#FF9F00] text-white px-2 py-1 w-fit rounded-md font-bold  font-[poppins] text-sm absolute top-8 left-8">FEATURED</p>
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
                                            <p className=" font-[poppins]">5</p>
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
                                    <p className=" font-[poppins]"> <span className=" text-[#FF9F00]">Jenica Smith</span>  in Marketing</p>
                                </div>
                                <h1 className=" font-[poppins] md:text-xl text-lg font-bold py-3 2xl:text-nowrap">MERN STACK DEVELOPMENT</h1>
                                <div className=" flex items-center gap-x-4 gap-y-1 flex-wrap">
                                    <div className=" flex items-center gap-2">
                                        <img src={timer} alt="" />
                                        <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">72.5 hrs</p>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <img src={stu} alt="" />  
                                        <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">100 Students</p>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <img src={les} alt="" />
                                        <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">140+ Lesson</p>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <img src={prj} alt="Project" />
                                        <p className=" font-[poppins] text-slate-600 text-nowrap text-sm">12 Projects</p>
                                    </div>
                                </div>
                                <div className=" py-4 flex items-center gap-2">
                                    <button className=" flex items-center font-[poppins] font-bold hover:bg-black bg-[#FF9F00] px-4 py-2 transition-colors rounded-lg text-white text-sm gap-2"><span className="line-through">₹7000</span>₹3500</button>
                                    <button className=" flex items-center font-[poppins] font-bold bg-black hover:bg-[#FF9F00] px-4 py-2 transition-colors rounded-lg text-white text-nowrap text-sm gap-2">Enroll Now<ArrowRight className=" w-5 "/></button>
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

export default Homepage