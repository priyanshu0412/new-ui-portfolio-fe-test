"use client"
import {
  AboutMeSection,
  BlogSection,
  CaptchaSection,
  Footer,
  HeroSection,
  Navbar,
  RecentProjectSection,
  TechnicalExpertiseSection,
  WorkExpSection,
  WorkTogetherSection
} from '@/components'
import React from 'react'

// ------------------------------------

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CaptchaSection />
      <AboutMeSection />
      <TechnicalExpertiseSection />
      <RecentProjectSection />
      <WorkExpSection />
      <BlogSection />
      <WorkTogetherSection />
      <Footer />
    </>
  )
}

export default Home
