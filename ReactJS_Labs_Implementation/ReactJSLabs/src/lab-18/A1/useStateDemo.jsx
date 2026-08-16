import React from 'react'
import { useState } from 'react';
function UseStateDemo() {

//Without using useState


    // let count = 0;

    // const increase = () => {
    //     count++;
    //     console.log(count);
    // };

 //Using useState
    const [count, setCount] = useState(0);

    const increase = () => {
        console.log(count);
        setCount(count + 1);
    };

    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={increase}>
                Increment
            </button>
        </>
    );

}

export default UseStateDemo
