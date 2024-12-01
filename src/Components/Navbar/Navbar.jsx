
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button, Paragraph, SideSheet } from "evergreen-ui";
import { logo } from "../../assets/Api/ImageApi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className=" max-w-[100%] mx-auto">
        <div className=" z-10 w-[100%] mx-auto px-10 md:px-[80px] lg:px-24 xl:px-[150px] 3xl:px-[250px] grid grid-cols-2 lg:grid-cols-2 py-4 lg:py-1 border items-center bg-white fixed top-0 rounded-md" id="nav-shadow">
          <div>
            <img src={logo} alt="Logo" className=" w-[120px]"/>
          </div>
          <div className=" py-5 hidden lg:flex lg:justify-end lg:bg-transparent bg-white">
            <ul className=" lg:static  hidden  flex-col lg:flex-row items-center  lg:flex xl:gap-10 gap-7 font-[poppins] text-[20px] text-center">
              <li>
                <Link to={"/"}><a href="" className=" font-[poppins] text-nowrap  font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">Home</a></Link>
              </li>
              <li>
                <Link to={"/course"}> <a className="font-[poppins] text-nowrap  font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">Course</a></Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <a href="#schedule" className=" font-[poppins] text-nowrap font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">About us</a>
                </Link>
              </li>
              <li>
                <Link to={"/gallery"}> <a className="font-[poppins] text-nowrap font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">Gallery</a>
                </Link>
              </li>
              <li>
                <Link to={"/blog"}> <a className="font-[poppins] text-nowrap font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">Blog</a>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                
                <a href="#venue" className=" font-[poppins] text-nowrap font-medium text-lg hover:text-white hover:bg-[#FF9F00] transition-colors py-2 px-3 rounded-full">Contact</a>
                </Link>
              </li>
              <li className="">
                <button className=" font-[poppins] bg-[#FF9F00] py-2 px-4 rounded-md  text-white font-medium text-lg">Login</button>
              </li>
            </ul>
          </div>
          <div className="flex justify-end lg:hidden ">
            <SideSheet
              isShown={isShown}
              onCloseComplete={() => setIsShown(false)}
              width={270}
              className="bg-[white]"
              shouldCloseOnOverlayClick={true}
              onBeforeClose={false}
              isClosing={true}
            >
              <Paragraph height="100vh" backgroundColor="#FF9F00">
                <ul className=" flex flex-col gap-5 font-[poppins] text-[20px] text-center py-5 text-white">
                    <li>
                      <Link to={'/'}>
                        <a href="" className=" font-[poppins] font-medium text-lg">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/course"}> <a className="font-[poppins] font-medium text-lg">Course</a></Link>
                    </li>
                    <li>
                      <Link to={"/about"}><a href="#schedule" className=" font-[poppins] font-medium text-lg">About us</a></Link>
                    </li>
                    <li>
                      <Link to={"/gallery"}>
                        <a href="#venue" className=" font-[poppins] font-medium text-lg">Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <a href="#venue" className=" font-[poppins] font-medium text-lg">Blog</a>
                    </li>
                    <li>
                      <a href="#venue" className=" font-[poppins] font-medium text-lg">Contact</a>
                    </li>
                    <li className="">
                      <button className=" font-[poppins] bg-white hover:bg-[#FF9F00] hover:border-white border-2 py-2 px-4 rounded-md  text-white font-medium text-lg">Login</button>
                    </li>
                </ul>
              </Paragraph>
            </SideSheet>
            <Button
              onClick={() => {
                setIsShown(true);
              }}
              border={0}
              background="#FF9F00"
            >
              <Menu></Menu>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
