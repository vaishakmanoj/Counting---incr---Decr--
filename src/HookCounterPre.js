import { useState } from "react"
import React from 'react'

function HookCounterPre() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    

    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1 )
        }
    }

    return (
        <div>
            <h1>counter</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <br />
            <button style={{ marginRight: '10Px' }} onClick={() => setCount(count - 1)}>Decr</button>
            <button onClick={() => setCount(count + 1)}>Incr</button>
            <br />
            <button onClick={increment5}>Increment 5</button>
        </div>
    )
}

export default HookCounterPre
