import React from 'react'

const Heading = ({heading}) => {
  return (
    <>
      <div className="margin-top-container"></div>
      <div className="category-heading-container md:w-1140 w-full px-8 ml-auto mr-auto">
          <div className="category-heading-content flex justify-between">
              <div className="category-heading flex justify-center items-center">
                  <div href="#id" className="straight-line md:block hidden">

                  </div>
                  <a href="#id" style={{fontSize:'24px',fontWeight:'700',lineHeight:'31.92px',color:'rgb(45, 55, 72)'}}>{heading}</a>
              </div>
              <div className="view-more md:block hidden">
                <a href="#id" className='px-4 py-2 rounded-lg' style={{fontSize:'12px',color:'#718096',lineHeight:'21.6px',backgroundColor:'#e2e8f0'}}>View More</a>
              </div>
          </div>
      </div>
      <div className="margin-bottom-container"></div>
    </>
  )
}

export default Heading