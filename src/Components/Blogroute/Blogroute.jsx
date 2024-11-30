
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Blogtab from "./Blogtab/Blogtab"
import Header from "./Header/Header"

const Blogroute = () => {
  return (
    <>  
      <Navbar/>
      <Header></Header>
      <Blogtab></Blogtab>
      <Footer/>
    </>
  )
}

export default Blogroute