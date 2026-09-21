import {UserContext} from './ContentRender';
import { useContext } from 'react';

export default function Dashboard() {
    const {user, setUser} = useContext(UserContext);

    return(
        <>
        <div className="border border-2 border-dark m-3 p-3">
            <h2>Welcome to the Dashboard</h2>
        </div>
        <h3>Hello, {user}</h3>

        <button onClick={()=>{setUser(null)}}>Logout</button>
        </>
    )
}