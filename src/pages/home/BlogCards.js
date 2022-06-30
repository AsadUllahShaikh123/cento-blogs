import React from 'react'
import data from '../../data'
import SingleCard from './SingleCard'

const BlogCards = () => {
 let advertise =  data[0].advertising.slice(0,3)
  return (
    <>
    <div className="margin-top" style={{marginTop:'32px',border:'2px solid transparent'}}></div>
      <div className="blog-cards">
        <div className="blog-cards-margin w-1140 ml-auto mr-auto px-8">
            <div className="blog-cards-content flex justify-between w-full">
                {
                  advertise.map(value => 
                    <SingleCard category ={value.category} articleHeading={value.articleHeading} author = {value.author} date ={value.date} read={value.read} image={value.image} />
                  )
                }
                              
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogCards