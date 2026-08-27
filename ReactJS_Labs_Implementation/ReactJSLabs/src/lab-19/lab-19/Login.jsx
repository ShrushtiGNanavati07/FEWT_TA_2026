import { useState } from "react";
import DashBoard from "./Dashboard";
import LogInHandle from "./LogInHandle";
export default function Login(){

    const [user , setUser] = useState(null);

    const handleLogin = (data)=>{
        setUser(data);
    }
    const handleLogOut = ()=>{
        setUser(null);
    }
    return(
        <>
        {user ? <DashBoard user={user} handleLogOut={handleLogOut}/> : <LogInHandle handleLogin={handleLogin}/>}
        </>
    )
}

