import React, {Component} from "react"

// const Greet=({name})=>{
//     return(
//     <div>Hello {name }</div>
//     )
// }
// -------OR-------

// const Greet =(props)=>{
//     const{name}=props
//     return(
//         <div>Hello {name }</div>
//     )
// }

//  ------OR-------

class Greet extends Component{
    render(){
        const{name}=this.props
        // const{name,value2}=this.props
            return(
        <div>Hello {name }</div>
    )
    }
    
}

export default Greet