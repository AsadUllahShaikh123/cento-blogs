import React,{useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Team from './pages/team/Team'
import Header from './pages/home/Header'
import Footer from './components/footer/Footer'
import Blog from './pages/Blog'
const App = () => {
  let [black,setBlack] = useState(false)
  let [blogCategory,setBlogCategory] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [window.location.href])
  return (
    <>
      <Header black={black} setBlack={setBlack}/>
      <Routes>
        <Route path='/' element={<Home black={black} blogCategory={blogCategory} setBlogCategory={setBlogCategory}/>}/>
        <Route path='/contact' element={<Contact black={black}/>}/>
        <Route path='/team' element={<Team black={black} />}/>
        <Route path='/:heading' element={<Blog blogCategory={blogCategory} />}/>
      </Routes>
      <Footer black={black}/>
    </>
  )
}

export default App