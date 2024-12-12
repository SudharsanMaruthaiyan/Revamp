import { Clock, FileText, Star, Users } from "lucide-react"
import { blogdetailsheader, blogdetailsheadermob } from "../../../assets/Api/ImageApi"

const BlogdetailsHeader = () => {
  return (
    <>
     <div className="max-w-[100%] pt-20">
     <img src={blogdetailsheadermob} alt="" className="hidden md:block xl:hidden" />
          <img src={blogdetailsheader} alt="" className="hidden xl:block" />
          <img src={blogdetailsheadermob} alt="" className=" md:hidden xl:hidden" />
      </div> 
    </>
  )
}

export default BlogdetailsHeader
