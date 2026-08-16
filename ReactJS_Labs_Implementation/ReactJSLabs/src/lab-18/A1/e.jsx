import F from "./f";

function E(props) {
  return (
    <>
      <h2>Component E</h2>

      <F name={props.name} />
    </>
  );
}

export default E;