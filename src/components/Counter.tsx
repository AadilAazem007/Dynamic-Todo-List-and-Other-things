import { useState } from "react"

interface CounterProp {
    initialValue: number
}

const Counter = ({initialValue}: CounterProp) => {
    const [count, setCount] = useState(initialValue)
    
    const countIncrement = () => {
        setCount((preVal) => preVal + 1)
    }

    return (
        <>
            Count:- {count}
            <button onClick={countIncrement}>Increment</button>
        </>
    )
}

export default Counter