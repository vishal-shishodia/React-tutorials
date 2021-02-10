import React, {Component} from "react"

class Ref2Demo extends Component{
    constructor(props){
        super(props)
        this.cbRef=null
        this.setcbRef=(element)=>{
            this.cbRef=element
        }
    }
    // Here current ref is assigned by above state
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
       
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(<div>
            <input type="text" ref={this.setcbRef}/>
            <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}

export default Ref2Demo