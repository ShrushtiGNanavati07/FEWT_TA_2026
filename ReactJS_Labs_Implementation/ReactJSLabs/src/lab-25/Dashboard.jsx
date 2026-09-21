// import React, { useContext } from 'react'
import { useAuth } from './ComponentRender';

export default function DashBoard() {

    const { user, handleLogOut } = useAuth();
    return (
        <>
            <div className="border border-2 border-primary m-3">
                <div style={{
                    textAlign: 'center',
                    backgroundColor: 'black',
                    color: 'white'
                }}>

                    <h1>Dashboard Page</h1>

                    <button style={{ backgroundColor: 'green', color: 'white' }}
                        onClick={handleLogOut}>Log-Out</button>

                </div>

                <h1 style={{ textAlign: 'center' }}>Hello from {user}</h1>
            </div>
        </>
    )
}