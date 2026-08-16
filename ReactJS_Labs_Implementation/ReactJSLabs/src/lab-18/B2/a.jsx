import { useState } from "react";
import B from "./b";

function A(props) {

  const [text, setText] = useState("");

  return (
    <>
      <h2>Component A</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <B
        text={text}
        setName={props.setName}
        name={props.name}
      />
    </>
  );
}

export default A;