import React ,{Component} from 'react'
import './myStyle.css'


const heading={
    fontSize:'52px',
    color:"yellow"
}
function StyleSheet(){
    return(
        <div>
            {/* <h1 style={{color:"red"}}>Stylesheet</h1> */}
            <h1 style={heading}>Stylesheet</h1>
        </div>
    )
}

export default StyleSheet