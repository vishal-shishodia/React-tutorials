import React, {Component} from "react"

// function FunctionClick(){

//     function clickHandler(){
//         console.log("button clicked")
//     }
//     return(
//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     )
// }


// export default FunctionClick

class ClassClick extends Component{
    clickHandlers(){
        console.log("button clicked")
    }
    render(){
        return(
            <div>
            <button onClick={this.clickHandlers}>click</button>
        </div>
        )
        
    }
}

export default ClassClick