
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button, Paragraph, SideSheet } from "evergreen-ui";
import { logo } from "../../assets/ImageApi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className=" max-w-[100%] mx-auto">
        <div className=" z-10 w-[85%] mx-auto lg:px-12 grid grid-cols-2 lg:grid-cols-2 py-4 lg:py-1 border items-center bg-white fixed px-4 md:right-10 md:left-10 right-4 left-4 top-5" id="nav-shadow">
          <div>
            <img src={logo} alt="Logo" className=" w-[120px]"/>
          </div>
          <div className=" py-5 hidden lg:flex lg:justify-end lg:bg-transparent bg-white">
            <ul className=" lg:static  hidden  flex-col lg:flex-row items-center  lg:flex xl:gap-10 gap-7 font-[Stylish] text-[20px] text-center">
              <li>
                <a href="" className=" font-[poppins] text-nowrap hover:text-[#FF9F00] font-bold text-lg">Home</a>
              </li>
              <li>
                <a href="#about" className=" font-[poppins] text-nowrap hover:text-[#FF9F00] font-bold text-lg">Hackathon</a>
              </li>
              <li>
                <Link to={"/course"}> <a className="font-[poppins] text-nowrap hover:text-[#FF9F00] font-bold text-lg">Course</a></Link>
              </li>
              <li>
                <a href="#schedule" className=" font-[poppins] text-nowrap hover:text-[#FF9F00] font-bold text-lg">About us</a>
              </li>
              <li>
                <a href="#venue" className=" font-[poppins] text-nowrap hover:text-[#FF9F00] font-bold text-lg">Contact</a>
              </li>
              <li className="">
                <button className=" font-[poppins] bg-[#FF9F00] py-2 px-4 rounded-md  text-white font-bold text-lg">Login</button>
              </li>
            </ul>
          </div>
          <div className="flex justify-end lg:hidden ">
            <SideSheet
              isShown={isShown}
              onCloseComplete={() => setIsShown(false)}
              width={270}
              className="bg-[black]"
              shouldCloseOnOverlayClick={true}
              onBeforeClose={false}
              isClosing={true}
            >
              <Paragraph height="100vh" backgroundColor="#FF9F00">
                <ul className=" flex flex-col gap-5 font-[poppins] text-[20px] text-center py-5 text-white">
                    <li>
                      <a href="" className=" font-[poppins] font-bold text-lg">Home</a>
                    </li>
                    <li>
                      <a href="#about" className=" font-[poppins] font-bold text-lg">Hackathon</a>
                    </li>
                    <li>
                      <Link to={"/course"}> <a className="font-[poppins] font-bold text-lg">Course</a></Link>
                    </li>
                    <li>
                      <a href="#schedule" className=" font-[poppins] font-bold text-lg">About us</a>
                    </li>
                    <li>
                      <a href="#venue" className=" font-[poppins] font-bold text-lg">Contact</a>
                    </li>
                    <li className="">
                      <button className=" font-[poppins] bg-black hover:bg-[#FF9F00] hover:border-black border-2 py-2 px-4 rounded-md  text-white font-bold text-lg">Login</button>
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
