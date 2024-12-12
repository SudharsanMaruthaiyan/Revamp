
import Blog2 from "../Blog2/Blog2"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Blogtab from "./Blogtab/Blogtab"
import Header from "./Header/Header"

const Blogroute = () => {
  return (
    <>  
      <Navbar></Navbar>
      <Header></Header>
      <Blog2></Blog2>
      <Blogtab></Blogtab>
      <Footer></Footer>
    </>
  )
}

export default Blogroute