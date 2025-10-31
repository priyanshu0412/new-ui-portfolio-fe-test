"use client";
import React, { useState } from "react";
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
  WorkTogetherSection,
} from "@/components";

const Home = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      {!verified ? (
        <div className="flex h-screen justify-center items-center">
          <CaptchaSection onVerify={() => setVerified(true)} />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
