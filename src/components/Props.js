import React, { Component } from 'react';

// const Greeting=props=>{
//     console.log(props)
// return(
//     <div>
//          <h1>Hello {props.name} aka {props.heroName}</h1>
//     <p>{props.children}</p> 
//     {/* children for children html tag inside components in App.js */}
//     </div>
   

// ) 
// }

class Greeting extends Component{
    render(){
        return(
            <div>
                <h1>
                    Hello, {this.props.name}
                </h1>
                <p>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default Greeting 