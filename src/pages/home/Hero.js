import React from "react";
import data from "../../data";
import Banner from "./Banner";
import BlogCards from "./BlogCards";
import Categories from "./Categories";
import Heading from "./Heading";
import MainContent from "./MainContent";
import Subscribe from "./Subscribe";

const Hero = () => {

  let advertise =  data[0].advertising.slice(0,3)
  let adWithoutImages = data[0].advertising.slice(3,6)

  let innovation = data[0].innovations.slice(0,3)
  let inWithoutImages = data[0].innovations.slice(3,6)
  return (


    <>
      <Categories />
      <MainContent/>
      <Heading heading={"Advertising"}/>
      <BlogCards singleCardData={advertise} cardData={adWithoutImages} />
      <Banner/>      
      <Heading heading={"Case Studies"}/>
      <Heading heading={"Innovations"}/>
      <BlogCards singleCardData={innovation} cardData={inWithoutImages}/>
      {/* <Subscribe/> */}
      
    </>
  );
};

export default Hero;
