import { Phone } from "lucide-react"
import { useState } from "react"
import { profile3 } from "../../../assets/Api/ImageApi"
import FaqAccodion from "./Accodion/FaqAccodion"

const Faq = () => {
    const [open, setOpen] = useState(false)
    const toggle = (index) =>{
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }
    const accordionData = [
        {
            title:"1. Why choose us for your education?",
            desc:"We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
        },
        {
            title:"2. Why choose us for your education?",
            desc:"We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
        },
        {
            title:"3. What We Offer To You?",
            desc:"We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
        },
        {
            title:"How We Provides Service For You?",
            desc:"We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
        },
    ]
  return (
    <>
        <div className=" 2xl:container mx-auto bg-white pb-20 py-14">
            <div className="lg:w-[80%] xl:w-[80%] mx-auto py-20 w-[80%]">
                <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className=" relative">
                        <div className="">
                            <img src={profile3} alt="Profile" className=" relative"/>
                        </div> 
                        <div className=" absolute xl:absolute md:absolute xl:-right-3 xl:top-[524px] bg-[#150d04] lg:absolute lg:top-[400px] lg:right-0 md:right-3 md:top-[604px] py-5 px-7 rounded-lg z-0">
                            <h1 className=" font-[poppins] text-[22px] font-bold text-wrap text-white">Contact Us For a <span className=" text-[#FF8C05]">Free Learning</span>  <br className=" lg:hidden xl:block"/> Consulting Evaluation</h1>
                            <div className="flex items-center gap-1 py-3 px-3 bg-[#FF8C05] mt-4 rounded-lg w-fit">
                                <Phone className=" stroke-white "/>
                                <p className="text-white"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
                            </div>
                        </div>
                    </div>
                    {/* FaqAccodion section  */}
                    <div className="mt-72 md:mt-40 lg:mt-0">
                        <div>
                            <div className=" flex items-center  gap-1">
                                <div className=" p-2 bg-[#ff8a0567] rounded-full">
                                    <div className=" h-3 w-3 bg-[#FF8C05] rounded-full shadow-yellow-300"></div>
                                </div>
                                <p className=" text-[#FF8C05] font-bold font-[poppins] text-[18px]">FAQ</p>
                            </div>
                            <p className="text-[48px] font-[poppins] leading-[57px] pt-4 font-bold">Frequently Asked <br /> Questions</p>
                            <p className=" pt-5 font-[poppins] text-[#6c6f70] text-[16px] pb-5" >Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                            {
                                accordionData.map((data, index) =>{
                                    return(
                                        <>
                                            <FaqAccodion key={index} open={index===open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                                        </>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq