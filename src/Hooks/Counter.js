import React,{useState} from 'react'

function Counter(){

    const [count,setState]=useState(0)
    return(
        <div>
            <button onClick={()=> setState(count+1)}>Clicked {count} times</button>
        </div>
    )
}
export default Counter