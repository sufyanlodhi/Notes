import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
  const navigate = useNavigate()


  const gotopage = useCallback((x) => {
    if (x === "/about") {
      navigate("/about")
    } else if (x === "/contact") {
      navigate("/contact")
    }
  }, [navigate])  



  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => gotopage("/about")}>About</button>
      <button onClick={() => gotopage("/contact")}>Contact</button>
    </>
  )
}
