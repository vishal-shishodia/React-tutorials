import React,{useEffect, useState} from 'react'

function CounterWithEffect(){
    // const [count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`You clicked ${count} times`
    // })
    // return(
    //     <div>
    //         <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    //     </div>
    // )
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        document.title=`you clicked ${count} times`
        console.log('useEffect -updating title')
    },[count])

    //----useEffect depends on count here------

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            {/* <ul>
            {items.map(item=><li key={item.id}>{item.value}</li>)}
            </ul> */}
        </div>
    )
}

export default CounterWithEffect