import { useState } from "react"
import './contador.css'

function Contador () {
    const [count, setCount] = useState(1)

    return (
        <div className="contador">
            <button type="button" onClick={() => setCount((count) => count - 1)}>-</button>
            <p>{count}</p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
    )
}

export default Contador