import {useState, createContext} from 'react'
import DashBoard from './Dashboard';
import Login from './Login';


export const UserContext = createContext();
// export const useAuth = () => useContext(UserContext);

export default function ContentRender(){
    const [user, setUser] = useState(null);


    return(
        <>
        <UserContext value={{user, setUser}}>
            {user ? <DashBoard/> : <Login/>}

        </UserContext>
        
        </>

    )
}