import React, {Component} from "react"
import RefWithClass from './RefWithClass'

class FocusInput extends Component{
    constructor(props){
        super(props)
        this.compRef=React.createRef()
    }

    
    clickHandler=()=>{
        
        this.compRef.current.focusInput()
    }

    render(){
        return(<div>
            <RefWithClass ref={this.compRef}/>
            <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}

export default FocusInput