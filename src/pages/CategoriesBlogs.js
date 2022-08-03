import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data";
import SingleCard from "./home/SingleCard";

const CategoriesBlogs = ({black,index,setBlogCategory}) => {
  
  
  useEffect(()=>{
    AOS.init({
      duration:750
    })
    AOS.refresh()
  })

  
  let location = useLocation();
  let category = location.pathname;
  console.log(location,'location')

  let heading ='';
  let singleCardData = [];
  if (category === "/Advertisement")
  {
    singleCardData = data[0].advertising.slice(0, 6);
    heading="Advertising"
  }
  else if (category === "/CaseStudies")
  {
    singleCardData = data[0].case_studies.slice(0, 6);
    heading="Case Studies"
  }
  else if (category === "/Management")
  {
    singleCardData = data[0].management.slice(0, 6);
    heading="Management"
  }
  else if (category === "/Innovation")
  {
    singleCardData = data[0].innovations.slice(0, 6);
    heading="Innovation"
  }
    // for
  let [next, setNext] = useState(true);
  return (
    <>
      <div
        className="blog-cards"
        style={{ backgroundColor: `${black ? 'rgb(26, 32, 44)': "rgb(248, 248, 248)"}`,border:'1px solid transparent'  }}

      >
        <div className="margin-top mb-16 w-full border-t-2 border-transparent"></div>
        <div className="blog-cards-margin md:w-1140 w-full ml-auto mr-auto px-8 h-full">
        <div className="heading p-2" data-aos="fade-down" data-aos-delay="0">
            <h1 className="text-5xl font-black mb-4" style={{ color: black ? 'rgb(237, 242, 247)':' rgb(45, 55, 72)'}}>{heading}</h1>
            <p style={{color:black ? 'rgb(226, 232, 240)':'rgb(113, 128, 150)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="margin-top mb-8 w-full border-t-2 border-transparent"></div>

          <div className="blog-cards-content flex  flex-wrap justify-between w-full " data-aos="fade-up" data-aos-delay="0">
            {singleCardData.map((value) => (
                <SingleCard
                  index={value.index}
                  category={value.category}
                  articleHeading={value.articleHeading}
                  author={value.author}
                  date={value.date}
                  read={value.read}
                  image={value.image}       
                  black={black} 
                  setBlogCategory={setBlogCategory}
                  isCategory={true}
                          />
            ))}
          </div>
          <div
            className="margin-top"
            style={{ margin: "32px 0", border: "2px solid transparent" }}
          ></div>
          <div
            className={`w-3/4 ml-auto mr-auto rounded-full flex ${
              next ? "justify-end" : "justify-start"
            }   p-1 bg-gray-300`}
          >
            <div
              className="px-6 py-2 text-2xl rounded-full w-36 text-center text-gray-500 font-black hover:cursor-pointer border-2"
              onClick={() => setNext(!next)}
            >
              {next ? "Next" : "Previous"}
            </div>
          </div>
        </div>
        <div
          className="margin-top"
          style={{ margin: "32px 0", border: "2px solid transparent" }}
        ></div>
      </div>
    </>
  );
};

export default CategoriesBlogs;
