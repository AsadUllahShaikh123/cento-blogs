import React, { useState } from "react";
import data from "../data";
import DetailContent from "./DetailContent";
import RelatedBlogs from "./RelatedBlogs";

const Blog = ({blogCategory}) => {
  
  return (
    <>
      <div className="blogs" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
          
        <div
          className="margin-top"
          style={{ margin: "32px 0", border: "2px solid transparent" }}
        ></div>
        <div className="blogs-heading-container w-1140 ml-auto mr-auto px-8">
          <div className="blogs-heading">
            <h1
              style={{ lineHeight: "63.8px" }}
              class="text-4xl lg:text-5xl mb-4  text-heading text-gray-700 font-black"
            >
              {blogCategory.articleHeading}
             
            </h1>{" "}
            <div className="description flex">
              <div>
                By
                <a href="#blog">
                  <strong> Steve Grant</strong>
                </a>
              </div>
              <div className="dot">
                published in
                <a href="#blog">
                  <strong> {blogCategory.category}</strong>
                </a>
              </div>
              <div className="dot">April 16, 2020</div>
              <div className="dot">
                <strong>1 min read </strong>
              </div>
            </div>
          </div>
        </div> 

        {/* Blogs Details  */}

        <div
          className="margin-top"
          style={{ margin: "32px 0", border: "2px solid transparent" }}
        ></div>
        <div className="blogs-details w-1140 ml-auto mr-auto px-8 flex ">
          <div className="blogs-detail-content w-2/3 ">
            <div >
              <DetailContent image ={blogCategory.image} />
            </div>
          </div>
          <div className="blogs-related-posts w-1/3 ">
            <div className="side" style={{ paddingLeft: "64px" }}>
              <RelatedBlogs  blogCategory={blogCategory} />
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
