import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <h1>About Page</h1>

    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    
   
    </>
    
  )
}
