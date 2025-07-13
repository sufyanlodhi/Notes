import React, { useCallback } from 'react'
import useGoToPage from '../Customhook/useGoToPage'




export default function About() {
const goToPage = useGoToPage()

  return (
     <>
     <h1>About Page</h1>
      <button onClick={() => goToPage("/")}>Home</button>
      <button onClick={() => goToPage("/about")}>About</button>
      <button onClick={() => goToPage("/contact")}>Contact</button>
    </>
  )
}

