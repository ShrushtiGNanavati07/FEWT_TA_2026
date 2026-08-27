import React from 'react'

export default function DashBoard({ user, handleLogOut }) {

    return (
        <>
            <div style={{ textAlign: 'center',
                backgroundColor: 'black',
                color: 'white'}}>

                <h1>Dashboard Page</h1>
                <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleLogOut}>Log-Out</button>

            </div>

            <h1 style={{ textAlign: 'center' }}>Hello from {user}</h1>

        </>
    )
}