import React from 'react'
import Card from './Card'
import SingleCard from './SingleCard'

const BlogCards = ({singleCardData,cardData,black,blogCategory,setBlogCategory}) => {
 
  return (
    <>
    <div className="margin-top" style={{marginTop:'32px',border:'2px solid transparent'}}></div>
      <div className="blog-cards">
        <div className="blog-cards-margin md:w-1140 w-full ml-auto mr-auto px-8">
            <div className="blog-cards-content flex md:flex-nowrap flex-wrap justify-between w-full">
                {
                  singleCardData.map(value => 
                    <SingleCard index ={value.index} category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} image={value.image} black={black} blogCategory={blogCategory} setBlogCategory={setBlogCategory} />
                  )
                }              
            </div>
            {
              cardData && 
              <div className="blog-cards-without-image md:flex-nowrap flex-wrap flex  w-full ">
              {
                cardData.map(value => 
                  <Card index={value.index} category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} black={black} blogCategory={blogCategory} setBlogCategory={setBlogCategory} />
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