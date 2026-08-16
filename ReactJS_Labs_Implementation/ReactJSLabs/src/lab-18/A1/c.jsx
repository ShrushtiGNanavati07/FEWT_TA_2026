import D from "./d";

function C(props) {
  return (
    <>
      <h2>Component C</h2>

      <D name={props.name} />
    </>
  );
}

export default C;