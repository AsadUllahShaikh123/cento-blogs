import React from 'react'
import Hero from './Hero'
import Header from './Header'
const Home = () => {
  return (
    <>
        <Header/>
        <div className="hero-section" style={{backgroundColor:'rgb(248, 248, 248)'}}>
            <Hero/>
        </div>
    </>
  )
}

export default Home