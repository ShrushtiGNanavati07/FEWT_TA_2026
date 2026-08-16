import C from "./extra";

function B(props) {

  function handleLogin() {

    if (
      props.username === "admin" &&
      props.password === "123"
    ) {
      props.setMessage("Login Successful");
    }
    else {
      props.setMessage("Invalid Username or Password");
    }
  }

  return (
    <>
      <h2>Component B</h2>

      <button onClick={handleLogin}>
        Login
      </button>

      <C />
    </>
  );
}

export default B;