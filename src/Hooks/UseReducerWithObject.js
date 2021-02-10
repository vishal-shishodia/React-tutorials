import React, { useReducer } from 'react'

const initialState={
    firstCount:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case('increment'):
        return state.firstCount+1
        case('decrement'):
        return state.firstCount-1
        case('reset'):
        return state.firstCount
        default:
            return state
    }
}

function CounterWithReducerObject(){
    const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            count {count}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterWithReducerObject