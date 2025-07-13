import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()




  
  const gotopage = useCallback((x) => {
    if (x === "/") {
      navigate("/")
    } else if (x === "/contact") {
      navigate("/contact")
    }
  }, [navigate])  


  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => gotopage("/")}>Home</button>
      <button onClick={() => gotopage("/contact")}>Contact</button>
    </>
  )
}

