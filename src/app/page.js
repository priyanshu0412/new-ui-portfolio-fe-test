"use client";
import React from "react";
import {
  AboutMeSection,
  BlogSection,
  Footer,
  HeroSection,
  Navbar,
  RecentProjectSection,
  TechnicalExpertiseSection,
  WorkExpSection,
  WorkTogetherSection,
} from "@/components";

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
  );
};

export default Home;
