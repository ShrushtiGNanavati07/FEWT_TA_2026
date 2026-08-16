import { useState } from "react";
import B from "./loginButton";

function A(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Component A</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <B
        username={username}
        password={password}
        setMessage={props.setMessage}
      />
    </>
  );
}

export default A;