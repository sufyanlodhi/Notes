import { useCallback, useEffect, useMemo, useState } from "react";

function Usememo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);


  const multiplication = useMemo(() => {
    console.log("Memo Function");
    return add * 5
  });


  return (
    <>
      <h1>{add}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setAdd(add + 1)}
      >
        Click
      </button>

      <h1>{minus}</h1>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setMinus(minus - 1)}
      >
        Click
      </button>
    </>
  );
}

export default Usememo;
