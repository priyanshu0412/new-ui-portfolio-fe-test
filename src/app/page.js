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
import { FetchApi } from "@/utilities/fetchApi";

const Home = async () => {

  const skillsRes = await FetchApi({ url: "/skills" });
  const projectRes = await FetchApi({ url: "/project" });
  const expRes = await FetchApi({ url: "/exp" });
  const blogRes = await FetchApi({ url: "/blog?isFeatured=true&sort=desc" });
  const footerRes = await FetchApi({ url: "/footerContent" });

  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutMeSection />

      <TechnicalExpertiseSection
        data={skillsRes?.data || []}
      />

      <RecentProjectSection
        data={projectRes?.data?.projects || []}
      />

      <WorkExpSection
        data={expRes?.data || []}
      />

      <BlogSection
        data={blogRes?.data?.data || []}
      />

      <WorkTogetherSection
        footerContent={footerRes?.data?.data?.[0]}
      />

      <Footer
        footerContent={footerRes?.data?.data?.[0]}
      />
    </>
  );
};

export default Home;
