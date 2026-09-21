export default function ChildComponent(obj){
    return(
        <>
        <div className="border border-success m-3">
        <h2>child Component</h2>
        <h3>{obj.objName}</h3>

        </div>
        </>

    );
}