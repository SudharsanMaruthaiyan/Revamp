
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Banner from "./Banner/Banner"
import Body from "./Body/Body"
import Counter from "./Counter/Counter"
import FeatureCourse3 from "./FeatureCourse3/FeatureCourse3"
import Header from "./Header/Header"


const AboutRoute = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Counter/>
        <Banner/>
        <FeatureCourse3/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default AboutRoute