//WAP in ReactJS to display the element if it has attribute called isDisplay to be true (using conditional rendering)

 function IfElse(){
    let isDisplay = false;
    
        if(!isDisplay==true){
            return(
                <>
                <h3>Displayedd!!!</h3>
                </>
            )  
        } 
        else{
            return(
                <>
                 <h3>Not Displayed!!!</h3>
                </>
            )  
        }
}

function Conditional(props){
    return(
        <>
        {props.isDisplay ? (<h3>Displayed</h3>) : (<h3>Not Displayedd</h3>)}

        </>
    )
}

function AndAnd(props){
    return(
        <>
        {props.isDisplay && <h3>Displayed</h3>}
        {!props.isDisplay && <h3>Not Displayed</h3>}
        </>
    )
}

export{IfElse,Conditional,AndAnd}