import E from "./e";

function D(props) {
  return (
    <>
      <h2>Component D</h2>

      <E name={props.name} />
    </>
  );
}

export default D;