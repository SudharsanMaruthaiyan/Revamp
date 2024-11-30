import { User,CalendarDays,MessageCircle,Search} from "lucide-react"
import DuringThisProgram from "../DuringThisProgram/DuringThisProgram"
import Blogform from "../Blogform/Blogform"
import PopularTag from "../PopularTag/PopularTag"
import Navbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import BlogdetailsHeader from "../BlogdetailsHeader/BlogdetailsHeader"
const BlogDetails = () => {
  return (
    <>
        <div className=" max-w-[100%]">
            <Navbar></Navbar>
            <BlogdetailsHeader></BlogdetailsHeader>
            <div className=" w-[90%] mx-auto my-14">
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16">
                    <div className=" py-5 lg:py-10 col-span-2 md:col-span-2">
                        <div>
                        </div>
                        <div className=" flex gap-5 items-center py-5 flex-wrap">
                            <div className="flex items-center gap-2">
                                <User className=" stroke-1 w-5 stroke-[#FF9F00]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">Code Galatta</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays className=" stroke-1 w-5 stroke-[#FF9F00]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">June 22, 2023</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageCircle className=" stroke-1 w-5 stroke-[#FF9F00]"/>
                                <p className=" font-[poppins] text-sm text-[#39557e]">No Comments</p>
                            </div>
                        </div>
                        <p className=" text-[#39557e] font-[poppins]">Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et iusto odio dignissim qui blandit praesent consectetur adipiscing idealorem.</p>
                        <div className=" bg-[#F1F8FF] border-l-[6px] border-[#FF9F00] my-10"> 
                            <h1 className=" md:py-12 md:px-12 px-8 py-8 lg:pr-40 text-lg md:text-xl text-[#FF9F00] font-bold font-[poppins]">“ urabitur varius eros rutrum consequat Mauris sollicitudin enim condimentum luctus enim justo non molestie nisl ”</h1>
                        </div>
                        <DuringThisProgram/>
                        <Blogform></Blogform>
                    </div>

                    <div className=" pb-5 lg:py-10 col-span-2 lg:col-span-1">
                        
                        
                        
                        <PopularTag/>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    </>
  )
}

export default BlogDetails