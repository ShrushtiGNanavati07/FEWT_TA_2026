// WAP to create a simple class component in ReactJS

// ## Defination: 

// Component is a base class provided by React.
// To create a class component, we inherit from Component.

// for ex : Component is a parent component
//          Component2 is a child componet


import React , {  Component } from "react";

class Component2 extends React.Component{
  render(){
    return(
      <>
      <h1>Hello world using class</h1>
      </>
    )
  }
}

export default Component2;