import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data";
import DetailContent from "./DetailContent";
import RelatedBlogs from "./RelatedBlogs";



const Blog = ({index,setBlogCategory,black}) => {
  
  useEffect(()=>{
    AOS.init({
      duration:750
    })
    AOS.refresh()
  })  
  
  let filtered = [];

  data.map(values => {
    for(let key in values){
      let filter =  values[key].filter(value => value.index === index)
      if(filter.length > 0){
        filtered = [...filtered,filter]
     }      
    }
  }
    )

    console.log(filtered,'filtered')
    let image,articleHeading,category;
    if(filtered.length > 0){
      image =filtered[0][0].image;
      articleHeading = filtered[0][0].articleHeading;
      category = filtered[0][0].category;
    }
     
  
  return (
    <>
      <div className="blogs" style={{ backgroundColor: `${black ? 'rgb(26, 32, 44)' :"rgb(248, 248, 248)"}` ,border:'1px solid transparent' }}>
          
        <div
          className="heading-margin-top"
          style={{ border: "2px solid transparent" }}
        ></div>
        <div className="blogs-heading-container md:w-1140 w-full ml-auto mr-auto px-8" data-aos="fade-down" data-aos-duration="0">
          <div className="blogs-heading">
            <h1
              style={{ color:`${black? 'rgb(237, 242, 247)':'rgb(45, 55, 72)'}` }}
              class="text-3xl lg:text-5xl mb-4  text-heading  font-black"
            >
              {articleHeading}
             
            </h1>{" "}
            <div className="description flex flex-wrap ">
              <div style={{color:`${black ? 'rgb(226, 232, 240)':' rgb(113, 128, 150)'}`}}>
                By
                <a href="#blog">
                  <strong style={{color:`${black ? '#e2e8f0':'#718096'}`}}> Steve Grant</strong>
                </a>
              </div>
              <div className="dot" style={{color:`${black ? 'rgb(226, 232, 240)':' rgb(113, 128, 150)'}`}}>
                published in
                <a href="#blog">
                  <strong style={{color:`${black ? '#e2e8f0':'#718096'}`}}> {category}</strong>
                </a>
              </div>
              <div className="dot" style={{color:`${black ? 'rgb(226, 232, 240)':' rgb(113, 128, 150)'}`}}>April 16, 2020</div>
              <div className="dot-red" style={{color:`${black ? 'rgb(226, 232, 240)':' rgb(113, 128, 150)'}`}}>
                <strong className="red">1 min read </strong>
              </div>
            </div>
          </div>
        </div> 

        {/* Blogs Details  */}

        <div
          className="margin-top"
          style={{ margin: "32px 0", border: "2px solid transparent" }}
        ></div>
        <div className="blogs-details md:w-1140 w-full ml-auto mr-auto px-8 flex " data-aos="fade-up" data-aos-duration="0">
          <div className="blogs-detail-content md:w-2/3 w-full ">
            <div >
              <DetailContent image ={image} black={black} />
            </div>
          </div>
          <div className="blogs-related-posts w-1/3 hidden md:block ">
            <div className="side" style={{ paddingLeft: "64px" }}>
              <RelatedBlogs  index={index} setBlogCategory={setBlogCategory} black={black} />
            </div>
          </div>
        </div>
        <div
          className="margin"
          style={{ marginTop: "126px", borderTop: "2px solid transparent" }}
        ></div>
      </div>
    </>
  );
};

export default Blog;
