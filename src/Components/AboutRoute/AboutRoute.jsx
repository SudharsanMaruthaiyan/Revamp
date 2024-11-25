
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Body from "./Body/Body"
import PreviousNextMethods from "./demo"
import Header from "./Header/Header"


const AboutRoute = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Body/>
        {/* <PreviousNextMethods/> */}
        <Footer/>
    </div>
  )
}

export default AboutRoute