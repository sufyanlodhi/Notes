import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <h1>Contact Page</h1>

<ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>

    
    
    </>
  )
}
