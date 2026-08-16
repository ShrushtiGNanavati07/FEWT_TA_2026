// Demonstrate the ReactJS props.

// => Props (Properties) are used to pass data from a parent component to a child component.



// const Username="Greshi";

// function A1(){
//     return(
//         <>
//         <h5>Hello world from {Username}</h5>
//         </>
//     )
// }
// export default A1;


// with using prop

function Parent(){
    return(
        <Child uname="Greshi" age="18"/>
    )
}

function Child(props){
    return(
        <>
        <h1>Using props</h1>
        <h3>Uname : {props.uname}</h3>
        <h3>Age : {props.age}</h3>
        </>
    )
}


//without props using destructuring

function Parent2(){
    return(
        <Child2 uname="Greshi" age="18"/>
    )
}

function Child2({uname, age}){
    return(
        <>
        <h1>Without props using destructuring</h1>
        <h3>Name : {uname}</h3>
        <h3>Age : {age}</h3>
        </>
    )
}

export {Parent, Parent2}



