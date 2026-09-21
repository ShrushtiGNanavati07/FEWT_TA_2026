import {useState} from "react";
import ChildComponent  from "./childComponent";


export function ParentComponent(){
    const [name, setName] = useState("");
    return (
    <>
    <div className="border border-primary m-3" height= "30px" >
        <h2> Parent Component</h2>
        <input type="text" onChange={(e)=> {setName(e.target.value)}}/> 
        <ChildComponent objName = {name}/>
    </div>
    </>
    )
}