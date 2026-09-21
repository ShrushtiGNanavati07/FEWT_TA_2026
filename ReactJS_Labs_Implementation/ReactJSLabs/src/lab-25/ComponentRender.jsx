import { useState, useContext, createContext } from "react";
import DashBoard from "./Dashboard";
import LogInHandle from "./LogInHandle";

const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export default function ComponentRender(){

    const [user , setUser] = useState(null);


    const handleLogin = (data)=>{
        setUser(data);   //name
    }
    const handleLogOut = ()=>{
        setUser(null);
    }

    return(
        <>
        <div className="border border-2 border-dark m-3 " >

            <h1>This is the Component Render Block</h1>
            <UserContext value = {{user, handleLogOut, handleLogin}}>

                {/* {user ? 
                <DashBoard user={user} handleLogOut={handleLogOut}/>  //When user is not null then show dashboard page
                : <LogInHandle handleLogin={handleLogin}/> //When user is null then show login page
                } */}

                {user ? 
                <DashBoard/>  //When user is not null then show dashboard page
                : <LogInHandle/> //When user is null then show login page
                }

            </UserContext>
        </div>
        
        </>
    )
}

