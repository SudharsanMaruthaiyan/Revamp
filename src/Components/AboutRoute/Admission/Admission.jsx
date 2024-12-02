import { AdmissionCardApi } from "../../../assets/Api/AdmissionCardApi"
import { arrow, arrow1 } from "../../../assets/Api/ImageApi"
import AdmissionCard from "./AdmissionCard/AdmissionCard"


const Admission = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[80%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#FF8C05] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Admission</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Admission Process</h1>
                </div>
                <div className="  relative">
                    <div className=" xl:absolute xl:-top-1">
                        <h1 className=' text-[#FF8C05] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Admission</h1>
                        <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Admission Process</h1>
                    </div>
                    <div className=" xl:block hidden z-0">
                        <img src={arrow1} alt="Arrow" />
                    </div>
                    <div className=" xl:absolute z-40 xl:pt-10 xl:pl-10 py-5">
                        <button className=" font-[poppins] hover:text-white hover:bg-[#FF8C05] bg-white border border-[#FF8C05] px-4 py-2 font-bold text-base rounded-full text-[#FF8C05] transition-colors uppercase">Admission Now</button>
                    </div>
                    <div className=" xl:absolute xl:top-10 xl:right-0">
                        <div className=' grid grid-cols-1 xl:grid-cols-9 gap-5'>
                            <div className=" col-span-3">
                            </div>
                            <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 col-span-7 xl:col-span-6">
                                {
                                    AdmissionCardApi.map((e,index)=>(
                                        <>
                                            <div key={index}>
                                                <AdmissionCard icon={e.icon} title={e.title} ctn={e.ctn} readmore={e.readmore} /> 
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admission