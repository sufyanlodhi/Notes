import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()




  
  const gotopage = useCallback((x) => {
    if (x === "/about") {
      navigate("/about")
    } else if (x === "/") {
      navigate("/")
    }
  }, [navigate])  





  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={() => gotopage("/")}>Home</button>
      <button onClick={() => gotopage("/about")}>About</button>
    </>
  )
}

