import React from 'react'
import Card from './Card'
import SingleCard from './SingleCard'

const BlogCards = ({singleCardData,cardData,black}) => {
 
  return (
    <>
    <div className="margin-top" style={{marginTop:'32px',border:'2px solid transparent'}}></div>
      <div className="blog-cards">
        <div className="blog-cards-margin w-1140 ml-auto mr-auto px-8">
            <div className="blog-cards-content flex  justify-between w-full">
                {
                  singleCardData.map(value => 
                    <SingleCard category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} image={value.image} black={black} />
                  )
                }              
            </div>
            {
              cardData && 
              <div className="blog-cards-without-image flex ">
              {
                cardData.map(value => 
                  <Card category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} black={black}/>
                  )
              }
             </div>
            }
            
        </div>
      </div>
    </>
  )
}

export default BlogCards