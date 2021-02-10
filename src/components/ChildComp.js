import React, {Component} from "react"

function ChildComp(props){
    return(
        <div>
            <button onClick={props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComp