import React,{useRef,useEffect} from 'react'

function FocusInputRef(){
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}
export default FocusInputRef