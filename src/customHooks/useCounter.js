import {useState} from 'react'

 export const useCounter=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(prevState=>prevState+1)
    }

    return [count,increment]
}