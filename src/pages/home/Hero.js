import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data";
import Banner from "./Banner";
import BlogCards from "./BlogCards";
import CaseStudy from "./CaseStudy";
import Categories from "./Categories";
import Heading from "./Heading";
import MainContent from "./MainContent";
import Subscribe from "./Subscribe";

const Hero = ({ black, blogCategory, setBlogCategory }) => {
  let advertise = data[0].advertising.slice(0, 3);
  let adWithoutImages = data[0].advertising.slice(3, 6);

  let innovation = data[0].innovations.slice(0, 3);
  let inWithoutImages = data[0].innovations.slice(3, 6);

  let case_studies = data[0].case_studies.slice(0, 1);
  let case_studies_without_photos = data[0].case_studies.slice(1, 4);
  let case_studies_2 = data[0].case_studies.slice(4, 5);

  let management = data[0].management.slice(0, 1);
  let management_without_photos = data[0].management.slice(1, 4);
  let management_2 = data[0].management.slice(4, 5);

  useEffect(() => {
    AOS.init({
      duration: 750,
    });
    AOS.refresh();
  });
  return (
    <>
      <Categories black={black} setBlogCategory={setBlogCategory} />
      <MainContent black={black} setBlogCategory={setBlogCategory} />
      <div data-aos="fade-up" data-aos-delay="0">
        <Heading heading={"Advertising"} black={black} />
        <BlogCards
          singleCardData={advertise}
          cardData={adWithoutImages}
          black={black}
          blogCategory={blogCategory}
          setBlogCategory={setBlogCategory}
        />
      </div>
      <Banner black={black} />

      <div data-aos="fade-up" data-aos-delay="0">
        <Heading heading={"Case Studies"} black={black} />
        <CaseStudy
          card={case_studies}
          cards_without_photos={case_studies_without_photos}
          card2={case_studies_2}
          black={black}
          index={blogCategory}
          setBlogCategory={setBlogCategory}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Heading heading={"Innovations"} black={black} />
        <BlogCards
          singleCardData={innovation}
          cardData={inWithoutImages}
          black={black}
          blogCategory={blogCategory}
          setBlogCategory={setBlogCategory}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Heading heading={"Management"} black={black} />
        <CaseStudy
          card={management}
          cards_without_photos={management_without_photos}
          card2={management_2}
          black={black}
          index={blogCategory}
          setBlogCategory={setBlogCategory}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Subscribe black={black} />
      </div>
    </>
  );
};

export default Hero;
