export default function Event() {

    function name(){
        return "This is normal function inside the Event Component"
    }


    return (
        <>
            <h1>
                hello , {name()} {/* name function can be right as Name */}
            </h1>
            <h1>
                Works as component : <GetName />
            </h1>
            <h1>Works as Function : {GetName()}</h1>
        </>
    )
}
function GetName() {
    return "Rohaan"
}