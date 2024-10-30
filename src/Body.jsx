import React from 'react'
import Reviewc from './Components/Reviewc/Reviewc'
import FindCourse from './Components/FindCourse/FindCourse'
import Homepage from './Components/Homepage/Homepage'
import Review3 from './Components/Review3/Review3'
import Blog2 from './Components/Blog2/Blog2'
import UpcomingEvent from './Components/UpcomingEvent/UpcomingEvent'

const Body = () => {
  return (
    <>
      <Homepage/>
      <Reviewc/>
      <FindCourse/>
      <Review3/>
      {/* <Blog2/> */}
      <UpcomingEvent/>
    </>
  )
}

export default Body