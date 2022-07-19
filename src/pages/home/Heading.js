import React from 'react'
import { useNavigate } from 'react-router-dom'
const   Heading = ({heading,black}) => {
  
  let category ;
  if(heading === 'Advertising'){
    category = 'Advertisement'
  }
  else if(heading === 'Case Studies'){
    category = 'CaseStudies'
  }
  else if(heading === 'Innovations'){
    category = 'Innovation'
  }
  else if(heading === 'Management'){
    category = 'Management'
  }
  let navigate = useNavigate();
  let handleRoute =()=>{
    navigate(`${category}`)
  }
  return (
    <>
      <div className="margin-top-container"></div>
      <div className="category-heading-container md:w-1140 w-full px-8 ml-auto mr-auto">
          <div className="category-heading-content flex justify-between">
              <div className="category-heading flex justify-center items-center">
                  <div href="#id" className="straight-line md:block hidden">

                  </div>
                  <a href="#id" style={{fontSize:'24px',fontWeight:'700',lineHeight:'31.92px',color:`${black ? 'rgb(237, 242, 247)':'rgb(45, 55, 72)'}`}}>{heading}</a>
              </div>
              <div className="view-more md:block hidden">
                <button onClick={()=> handleRoute()} className='px-4 py-1 rounded-lg' style={{fontSize:'12px',lineHeight:'21.6px'}}>View More</button>
              </div>
          </div>
      </div>
      <div className="margin-bottom-container"></div>
    </>
  )
}

export default Heading