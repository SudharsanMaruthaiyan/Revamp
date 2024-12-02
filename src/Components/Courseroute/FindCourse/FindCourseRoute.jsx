import React from 'react'
import UnstyledTabsBasic from './Navtab/Navtab'
import Header from './Header/Header'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const FindCourseRoute = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <UnstyledTabsBasic></UnstyledTabsBasic>
        <Footer></Footer>
    </div>
  )
}

export default FindCourseRoute
