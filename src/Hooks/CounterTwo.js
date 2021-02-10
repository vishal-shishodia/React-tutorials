import React, {useState} from "react"

function CounterTwo(){
    const initialValue=0
    const [count,setCount]=useState(initialValue)
    return(
        <div>
            {count}
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
        </div>
    )
}

export default CounterTwo