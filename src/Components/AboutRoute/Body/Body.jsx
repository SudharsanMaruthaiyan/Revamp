import React from 'react'
import StudentReview from '../StudentReview/StudentReview'
import Popular from '../Popular/Popular'
import AboutSection from '../AboutSection/AboutSection'
import CertificateSection from '../CeritificateSection/CertificateSection'
import Header from '../Header/Header'
import Counter from '../Counter/Counter'
import Banner from '../Banner/Banner'
import FeatureCourse3 from '../FeatureCourse3/FeatureCourse3'
import Admission from '../Admission/Admission'
import Faq from '../Faq/Faq'

const Body = () => {
  return (
    <div>
        <Header/>
        <Counter/>
        <AboutSection/>
        <Admission/>
        <FeatureCourse3/>
        <Banner/>
        <Faq/>
        {/* <StudentReview/>
        <Popular/>
        <CertificateSection/> */}
    </div>
  )
}

export default Body