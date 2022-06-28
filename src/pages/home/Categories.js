import React from 'react'
import data from '../../data'
const Categories = () => {
  let boxes =[
    {
      category:'Case Studies',
      icon:'far fa-file'
    },
    {
      category:'Innovation',
      icon:'far fa-lightbulb'
    },
    {
      category:'Management',
      icon:'fas fa-tasks'
    },
    {
      category:'Advertisement',
      icon:'fas fa-ad'
    }
  ]
  return (
    <>
      <div className="categories overflow-x-auto">
        <div className="margin-container my-8 w-full border-t-2 border-transparent"></div>
        <div className="category-container w-1140 px-8 ml-auto mr-auto  ">
              <div className="category-boxes flex justify-between overflow-x-auto">
                {
                  boxes.map(box => 
                    <div className="box w-23 m-2 inline-block text-center bg-white rounded-2xl" style={{}}>
                      <div className="icon">
                        <i className={`icon ${box.icon} text-3xl pt-4 text-blue-500`} />
                      </div>
                      <h1 style={{fontWeight:'600',padding:'16px',color:'rgb(113, 128, 150)'}}>{box.category}</h1>
                    </div>
                    )
                } 
              </div>
        </div>
      </div>
    </>
  )
}

export default Categories