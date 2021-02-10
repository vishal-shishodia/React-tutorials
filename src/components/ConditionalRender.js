import React, {Component} from "react"

class UserGreet extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        // if (this.state.isLoggedIn){
        //     return (<div>Welcome Vishal</div>)
        // }
        // else{
        //     return(<div>Welcome Guest</div>)
        // }

        // -----OR-----

        // let msg
        // if (this.state.isLoggedIn){
        //     msg=<div>Welcome Vishal</div>
        // }
        // else{
        //     msg=<div>Welcome Guest..</div>
        // }
        // return <div>{msg}</div>

        // ------OR------ Ternary Operator
        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Vishal</div> : <div>Welcome Guest</div>
        // )

        // ----OR---- Shortcircuit operator approach

        return(
            this.state.isLoggedIn && <div>Welcome Guest</div>
        )
    }
}

export default UserGreet