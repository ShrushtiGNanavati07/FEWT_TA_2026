import { useState } from "react";
export default function LogInHandle({handleLogin}){

    const [name , setName] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = ()=>{
        if(name == 'Demo' && password=='1234'){
            handleLogin(name);
        }
        else{
            alert("Please enter valid data !!");
        }
    }

    return(

        <form onSubmit={handleSubmit}>
            
            <h1 style={{textAlign:'center',
                  backgroundColor:'black' ,
                  color:'white',
                  padding:10,
                  marginBottom:100}}>Log-In Page</h1>
            
            <h1 style={{color:'green',textAlign:'center',marginBottom:30}}>Log-In</h1>

            <input type='text' style={{marginLeft:650,textAlign:'center',marginBottom:30}}
            placeholder="Enter the name " 
            value={name}
            onChange={(e)=>setName(e.target.value)}/><br/>

            <input type='text' style={{marginLeft:650,textAlign:'center',marginBottom:30}}
            placeholder="Enter the password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/><br/>

            <button className="btn btn-success" style={{marginLeft:700,textAlign:'center'}}
            type="submit">Log-In </button>
        </form>
    )  
}

