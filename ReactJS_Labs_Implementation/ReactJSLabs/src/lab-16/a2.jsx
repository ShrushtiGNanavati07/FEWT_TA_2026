//Demonstrate the Event Handling in ReactJS.

export default function Event(){

    function click(){
        alert("Button clicked");
    }
    function dblClick(){
        alert("Duble clicked");
    }
   
    
    return (
        <>
        <button onClick={click}>Click</button>
        <button onDoubleClick={dblClick}>Double Click</button>
        <button onMouseEnter={()=>{alert("Mouse enter")}}>Mouse Enter</button>

        <button onMouseLeave={()=>{alert("mouse out")}}>Mouse out</button>
        </>

    )
}