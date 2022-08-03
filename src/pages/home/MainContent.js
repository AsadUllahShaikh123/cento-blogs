import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import data from "../../data";
import Card from "./Card";
import image1 from "./slider/markdown.webp";
import image2 from "./slider/programmatic_outdoor.webp";
import image3 from "./slider/shopping.webp";
const MainContent = ({black,setBlogCategory}) => {
  let navigate = useNavigate();
  let [imageNumber, setImageNumber] = useState(0);
  let image = [image1, image2, image3];
  let advertise = data[0].advertising.slice(0,4)
  let handleRoute =(index)=>{
    navigate(`/category/${index}`)
    setBlogCategory(index);
  }
  return (
    <>
      <div className="main-content mt-8">
        <div className="main-content-container w-1140 ml-auto mr-auto px-4">
          <div className="main-content-content flex justify-between ">
            {/* Slider-Blogs Portion  */}
            <div className="slider-blogs md:w-3/4 w-1/2" >

              {/* Slider Portion  */}
              <div
                className="slider md:w-full w-5/6 relative"
                style={{
                  height: "300px",
                  backgroundImage: `url(${image[imageNumber]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius:'8px'
                }}
              >
                <div className="carousel-button absolute bottom-10 left-10">
                  <button
                    style={{ border: "2px solid gray" }}
                    onClick={() =>
                      setImageNumber(imageNumber === 2 ? 0 : ++imageNumber)
                    }
                  >
                    Previous
                  </button>
                  <button
                    style={{ border: "2px solid gray" }}
                    onClick={() =>
                      setImageNumber(imageNumber === 0 ? 2 : --imageNumber)
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="margin-top" style={{margin:'8px 0px', border:'2px solid transparent'}}>

              </div>
              {/* Blogs-Section below the Slider */}
              <div className="blogs-section flex justify-between w-full flex-wrap" >
                {
                  advertise.map(value => 
                    <div className=" w-5/6 md:w-1/2" onClick={()=> handleRoute(value.index)}>
                      <Card index ={value.index} category={value.category} articleHeading={value.articleHeading} author={value.author} date={value.date} read={value.read} image ={value.image} black={black} setBlogCategory={setBlogCategory} />
                    </div>)
                }
              </div>
            </div>

            {/* Side Bar Portion  */}
            <div className="side-bar hidden md:block" style={{backgroundColor:`${black ? 'rgb(45, 55, 72)':'rgb(237, 242, 247)'}`,marginLeft:'16px',width:'253px',borderRadius:'8px'}}>
                <div style={{padding:'32px'}}>
                    <h2 style={{color: 'rgb(113, 128, 150)',marginBottom:'1rem',fontSize:'24px',fontWeight:'700'}}>
                      <svg className="css-5fuvjv" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>
                      Best Networking Workshops
                    </h2>
                    <h2 style={{color:'rgb(113, 128, 150)',lineHeight:'31.92px',marginBottom:'16px'}}>In this workshop, learn when and how to network with modern best practices.</h2>
                    <ul style={{listStyleType:'circle',fontSize:'14px',fontWeight:'400',lineHeight:'25.2px',color:'rgb(113, 128, 150)'}}>
                      <li style={{margin:'8px 0'}}>Explain the importance of networking for career-building</li>
                      <li style={{margin:'8px 0'}}>Practice modern tips for effective networking</li>
                      <li style={{margin:'8px 0'}}>Understand the steps towards building your own network</li>
                    </ul>
                    <a href="#learn" className="block" style={{padding:'8px 16px',textAlign:'center',width:'10rem',marginLeft:'1rem',marginTop:'1rem',borderWidth:'3px',borderStyle:'solid',borderRadius:'9999px',backgroundColor:'#667eea',color:'white',borderColor:'transparent'}}>Learn More</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
