import { UpcomingCardApi } from "../../assets/Api/UpcomingCardApi"
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard"


const UpcomingEvent = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[80%] mx-auto pb-20">
                <div className=" flex items-end justify-between ">
                    <div className=' flex flex-col items-start justify-center pt-20 pb-10'>
                        <h1 className=' text-[#FF9F00] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Event & Program</h1>
                        <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Upcoming <span className=" text-[#FF9F00] underline">Events & program</span> </h1>
                    </div>
                    <div>
                        <p className=' font-[poppins] font-semibold text-lg bg-[#FF9F00] text-white transition-colors py-2 px-5 rounded-lg mb-10'>Explore All Courses</p>
                    </div>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-12'>
                    {
                        UpcomingCardApi.map((e,index)=>(
                            <>
                                <div key={index} className="">
                                    <UpcomingEventCard image={e.image} month={e.month} location={e.location} head={e.head} day={e.day} year={e.year} viewdetails={e.viewdetails}/>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default UpcomingEvent