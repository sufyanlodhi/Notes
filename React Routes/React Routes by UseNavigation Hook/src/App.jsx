import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
