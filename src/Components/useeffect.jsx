import React, { useEffect, useState } from "react";


function MyComponent() {
// jab bhi function ya state use krni hogi to main return se upar use krunga usey.  
  const [count, setCount] = useState(0) // is state main mera count change hoga jo number hai.
  const [data, setData] = useState("Advanced") // is state main mera text change hoga

useEffect(()=>{ //useeffects tab chalta hai jb bhi koi compnent rerender hota hai....lekin abhi just count state change honey pr hi ye work karega
    console.log("Component Mounted");
},[count])


    return (
  // return main hum wo sb likhtey hain jo humararey frontend pr show hota hai

  <> 
  <h1>My Count... {count}</h1>
  <button onClick={() => setCount(count + 1)}>Clicked me</button>

  <h1>My data... {data}</h1>
  <button onClick={() => setData("PCC")}>Clicked me</button>

  </>
)
}

export default MyComponent