import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    
   
    </>
    
  )
}
