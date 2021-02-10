import React, {Component} from 'react'

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }
        // this.clickHandler=this.clickHandler.bind(this)
        // <button onClick={this.clickHandler}>click</button>
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:"goodbye"
        })
    }

    render(){
        return(
            <div>
                {this.state.message}
                {/* <button onClick={this.clickHandler}>Click</button> */} 
                {/* it will give undefined */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* ----OR---- */}
                {/* <button onClick={()=>this.clickHandler()}>click</button> */}

                {/* ---OR----- */}
                {/* <button onClick={this.clickHandler}>click</button> */}

                {/* ---OR----- */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind