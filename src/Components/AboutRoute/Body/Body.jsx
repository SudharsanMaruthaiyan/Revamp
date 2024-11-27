import React from 'react'
import StudentReview from '../StudentReview/StudentReview'
import Popular from '../Popular/Popular'
import AboutSection from '../AboutSection/AboutSection'
import CertificateSection from '../CeritificateSection/CertificateSection'

const Body = () => {
  return (
    <div>
        <StudentReview/>
        <Popular/>
        <AboutSection></AboutSection>
        <CertificateSection></CertificateSection>
    </div>
  )
}

export default Body