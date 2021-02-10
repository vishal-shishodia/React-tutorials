import React,{Component} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Vishal"
        }
    }
    componentDidMount(){
        setInterval(
            ()=>{
                this.setState({name:"Vishal"})
            },2000)
    }
    render(){
        console.log("Parent Comp")
        return(
            <div>
                Parent Comp
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            
            </div>
        )
    }
}

export default ParentComp