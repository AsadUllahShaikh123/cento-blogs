import React, { useState } from 'react'
import image1 from './slider/markdown.webp'
import image2 from './slider/programmatic_outdoor.webp'
import image3 from './slider/shopping.webp'
const MainContent = () => {
  let [imageNumber,setImageNumber] = useState(0);
  let [image,setImage] = useState([image1,image2,image3])
  return (
    <>
      <div className="main-content">
        <div className="main-content-container w-1140 px-4">
          <div className="main-content-content flex">
              <div className="slider md:w-2/3">
                  <div className="slider-container w-full " >
                    <img src={image[imageNumber]} style={{width:'100px',height:'100px'}} alt="" srcset="" />
                  </div>
                  <button onClick={()=> setImageNumber(imageNumber === 2 ? 1 : ++imageNumber ) }>Next</button>
                  <button onClick={()=> setImageNumber(imageNumber === 0 ? 2 : --imageNumber)}>previous</button>
                  <h1>helo</h1>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent