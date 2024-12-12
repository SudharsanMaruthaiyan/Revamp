import { Clock, FileText, Star, Users } from "lucide-react";
import { author_image, coursedhead745, coursedheadmob, courseheader, coursemainheader, coursemainheadermob, coursemainheadertab } from "../../../assets/Api/ImageApi";

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] ">
        <div className="w-[100%] mx-auto grid grid-cols-1 py-20">
        <img src={coursemainheadertab} alt="" className="hidden md:block xl:hidden" />
          <img src={coursemainheader} alt="" className="hidden xl:block" />
          <img src={coursemainheadermob} alt="" className=" md:hidden xl:hidden" />
          
        </div>
      </div>
    </>
  );
};

export default Header;
