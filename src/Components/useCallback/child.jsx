import { memo } from "react";





function Child( myfun ) {
  console.log("I m Child");

  return (
    <>
     
    </>
  );
}

export default memo(Child);
