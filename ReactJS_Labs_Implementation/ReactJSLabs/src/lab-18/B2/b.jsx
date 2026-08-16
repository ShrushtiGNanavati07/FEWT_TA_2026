import C from "./c";

function B(props) {

  function handleClick() {
    props.setName(props.text);
  }

  return (
    <>
      <h2>Component B</h2>

      <button onClick={handleClick}>
        Submit
      </button>

      <C name={props.name} />
    </>
  );
}

export default B;