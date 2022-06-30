import React from "react";
import data from "../../data";
import Card from "./Card";
import CaseCard from "./CaseCard";
import SingleCard from "./SingleCard";

const CaseStudy = () => {
  let card = data[0].case_studies.slice(0, 1);
  let cards_without_photos = data[0].case_studies.slice(1,4);
  let card2 = data[0].case_studies.slice(1, 2);


  return (
    <>
      <div
        className="margin-top"
        style={{ marginTop: "32px", border: "2px solid transparent" }}
      ></div>
      <div className="blog-cards">
        <div className="blog-cards-margin w-1140 ml-auto mr-auto px-8">
          <div className="blogs-card-content flex">
            {card.map((value) => (
              <SingleCard
                category={value.category}
                articleHeading={value.articleHeading}
                author={value.author}
                date={value.date}
                read={value.read}
                image={value.image}
              />
            ))}
            <div className="cards-without-images flex flex-col w-2/5">
                {
                  cards_without_photos.map(value => 
                    <CaseCard category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} image={value.image}/>
                    )

                    
                }
            </div>
            {card.map((value) => (
              <SingleCard
                category={value.category}
                articleHeading={value.articleHeading}
                author={value.author}
                date={value.date}
                read={value.read}
                image={value.image}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
