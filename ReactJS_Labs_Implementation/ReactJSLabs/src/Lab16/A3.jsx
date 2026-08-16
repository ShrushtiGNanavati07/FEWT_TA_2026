
// 1. The && (logical AND) operator — renders the element only if the condition is true. 
// 2. The ternary operator (condition ? A : B) — renders A if true, otherwise B. 
// 3. A plain if statement inside the component function, returning different JSX. 

export default function A3(props) {
    
    // if (props.isDisplay) {
    //     return <h1>Hello</h1>
    // }

    return (
        <>
            {props.isDisplay && <h1>Welcome</h1>}
        
            {
                // props.isDisplay ? <h1>Hello</h1> : null
            }
        </>
    )

}