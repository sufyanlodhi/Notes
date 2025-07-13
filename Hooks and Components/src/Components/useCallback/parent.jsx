import { useCallback, useState } from "react";
import Child from "./child";


function Parent() {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const myfun = useCallback(() => {
    return "Hye this me Arrow";
  }, [count]); 
  
console.log(myfun);

  return (
    <>
      <Child myfun={myfun} /> {/* Main ne function (myFun) prop main paas kia hai child component ko*/}

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <br />
      <h1>{minus}</h1>
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
    </>
  );
}

export default Parent;
