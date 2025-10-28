"use client"
import {
  AboutMeSection,
  BlogSection,
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
