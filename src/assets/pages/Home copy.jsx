import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureHighlights from '../components/FeatureHighlights'
import HowItWorks from '../components/HowItWorks'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        <CallToAction />
      </div>
      <Footer />
    </>
  )
}

export default Home
