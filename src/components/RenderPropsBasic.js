import React, {Component} from "react"

// const Render=(props)=>{
// return( <div>
//     Hello {props.name(false)}
//     </div>)
// }
// export default Render

class RenderProps extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }

    render(){
        return(<div>
            {this.props.children(this.state.count,this.incrementCount)}
            </div>
        )
    }
}

export default RenderProps