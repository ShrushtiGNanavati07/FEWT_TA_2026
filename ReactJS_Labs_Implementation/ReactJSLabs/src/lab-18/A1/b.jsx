import { useState } from "react";
import C from "./c";

function B(props) {

  //Syntax for useState hook
  // const [stateVariable, setStateFunction] = useState(initialValue);
  // Here, we are creating a state variable called inputName and a function called setInputName
  //  to update its value. The initial value of inputName is an empty string.
  
  const [inputName, setInputName] = useState("");

  function handleClick() {
    props.setName(inputName);
  }

  return (
    <>
      <h2>Component B</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={handleClick}>
        Set Name
      </button>

      <C name={props.name} />
    </>
  );
}

export default B;