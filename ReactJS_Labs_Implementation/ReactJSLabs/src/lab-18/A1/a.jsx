import B from "./b";

function A(props) {
  return (
    <>
      <h2>Component A</h2>

      <B name={props.name} setName={props.setName} />
    </>
  );
}

export default A;