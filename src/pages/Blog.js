import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blogs">
        <div
          className="margin-top"
          style={{ margin: "32px 0", border: "2px solid transparent" }}
        ></div>
        <div className="blogs-container w-1140 ml-auto mr-auto px-8">
          <div className="blogs-content">
            <h1
              style={{ lineHeight: "63.8" }}
              class="text-4xl p-6 lg:text-5xl  tracking-tight text-heading text-gray-700 font-bold"
            >
              An 5 Easy Ways to Boost Your Team Performance Immediately
            </h1>{" "}
            <div className="description flex">
              <p>By</p>
              <p>Steve Grant </p>
              <p> . </p>
              <p>Published in Manaemeng</p>
              <p>April 17, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
