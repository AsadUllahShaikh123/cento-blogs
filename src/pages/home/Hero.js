import React from "react";
import Banner from "./Banner";
import BlogCards from "./BlogCards";
import Categories from "./Categories";
import Heading from "./Heading";
import MainContent from "./MainContent";
import Subscribe from "./Subscribe";

const Hero = () => {
  return (
    <>
      <Categories />
      <MainContent/>
      <Heading/>
      <BlogCards/>
      {/* <Banner/>
      <Subscribe/> */}
      
    </>
  );
};

export default Hero;
