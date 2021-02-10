import React from 'react'
import { useCounter } from './useCounter'

function CounterCustom(){
    const [count,increment] =useCounter()

    return(
        <div>
            {count}
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default CounterCustom