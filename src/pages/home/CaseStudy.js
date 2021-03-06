import React from "react";
import CaseCard from "./CaseCard";
import SingleCard from "./SingleCard";

const CaseStudy = ({card,cards_without_photos,card2,black,blogCategory,setBlogCategory}) => {
  
  return (
    <>
      <div
        className="margin-top"
        style={{ marginTop: "32px", border: "2px solid transparent" }}
      ></div>
      <div className="blog-cards">
        <div className="blog-cards-margin md:w-1140 w-full ml-auto mr-auto px-8">
          <div className="blogs-card-content flex md:flex-nowrap flex-wrap">
            {card.map((value) => (
              <SingleCard
                index = {value.index}
                category={value.category}
                articleHeading={value.articleHeading}
                author={value.author}
                date={value.date}
                read={value.read}
                image={value.image}
                black={black}
                blogCategory={blogCategory}
                setBlogCategory={setBlogCategory}
              />
            ))}
            <div className="cards-without-images flex flex-col md:w-2/5 w-full">
                {
                  cards_without_photos.map(value => 
                    <CaseCard index = {value.index} category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} image={value.image} black={black} setBlogCategory={setBlogCategory}/>
                    )

                    
                }
            </div>
            {card2.map((value) => (
              <SingleCard
                index = {value.index}
                category={value.category}
                articleHeading={value.articleHeading}
                author={value.author}
                date={value.date}
                read={value.read}
                image={value.image}
                black={black}
                blogCategory={blogCategory}
                setBlogCategory={setBlogCategory}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
