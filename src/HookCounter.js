import React, {useState} from "react";

function HookCounter () {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={()=>setCount(count + 1)}>increCount</button>
            <button>{count}</button>
        </div>
    )
}
export default HookCounter ; 