import React from 'react'
import Hero from './Hero'
const Home = ({black}) => {
  return (
    <>
        <div className="hero-section overflow-hidden" style={{backgroundColor:`${black ? 'rgb(26, 32, 44)':'rgb(248, 248, 248)'}`}}>
            <Hero black={black}/>
        </div>
    </>
  )
}

export default Home