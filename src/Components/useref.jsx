import { useRef, useState } from "react"; // React se useRef aur useState hooks import kiye

function Useref() {

  // Input element ke liye reference banaya
  const refElement = useRef();

  // Paragraph ke liye alag reference banaya
  const refPeragraph = useRef();

  // State banayi jisme input ka value store hoga, default "Advanced"
  const [name, setName] = useState("Advanced");

  // Jab Reset button dabayen to ye function chalega
  function reset() {
    setName(""); // input ka value blank kar do
    refElement.current.focus(); // input box pe cursor/focus le jao
  }

  // Jab Color Change button dabayen to ye function chalega
  function handlecolor() {
    refElement.current.style.color = "Red"; // input ka text red ho jaye
    refPeragraph.current.style.color = "Blue"; // paragraph ka text blue ho jaye
  }

  // Component ka return part jahan HTML/JSX likha jata hai
  return (
    <>
      {/* Paragraph jisme refPeragraph lagaya gaya hai */}
      <p ref={refPeragraph}>Hello Pakistan</p>

      {/* Input field jisme refElement laga hua hai, aur value state se control ho rahi hai */}
      <input
        ref={refElement}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)} // jab user type kare to state update ho
      />

      {/* Reset button - click pe reset function chalega */}
      <button onClick={reset}>Reset</button>

      {/* Color Change button - click pe handlecolor function chalega */}
      <button onClick={handlecolor}>Color Change</button>
    </>
  );
}

export default Useref; // Component ko export kiya taake dusri files mein use ho sake
