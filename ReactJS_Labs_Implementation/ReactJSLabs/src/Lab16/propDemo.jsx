// Props (Properties) are used to pass data 
// from one component to another component, 
// usually from a parent component to a child component.
function L16_A1(obj){

    if(obj.isStudent){
        var str = "Yes"
    }else {
        str = "No"
    }
    return (
        <>
            <h1>
                Hello {obj.name}
            </h1>
            <h1>
                Sum = {obj.n1 + obj.n2}
            </h1>
            <h1>
                Student Status = {str}
            </h1>
        </>
    )
}

export default L16_A1