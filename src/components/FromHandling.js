import React, {Component} from "react"

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            topic:"React"
        }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleSelect=(event)=>{
        this.setState({
                topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.username} knows ${this.state.topic}`)
        event.preventDefault()
        // prevent data disappear while refreshing
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                <select value={this.state.topic} onChange={this.handleSelect}>
                    <option value="React">react</option>
                    <option value="Angular">angular</option>
                    <option value="Vue">vue</option>
                </select>
                <button type="submit">Click</button>
            </form>
        )
    }
}

export default Form