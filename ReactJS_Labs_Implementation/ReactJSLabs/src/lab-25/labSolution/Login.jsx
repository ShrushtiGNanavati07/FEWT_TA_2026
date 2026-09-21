import { useState, useContext } from "react";
import {UserContext} from "./ContentRender";

export default function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useContext(UserContext);

    const handleLogin = ()=>{
        if(name == 'demo' && password == '1234'){
            setUser(name);
        }
        else{
            alert("Invalid Credentials");
        }

    }


    return(

    <>
    <div>
        <h2>
            This is the Login Page

        </h2>
        <div className="border border-2 border-dark m-3 p-3">
            <h3>
                Login Form
            </h3>
            Name : <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="name" placeholder="Enter your name"/><br/><br/>
            Password : <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="Enter your password"/><br/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>

    </div>
    
    </>        
    )


}