import React, {Component} from 'react';

// class Message extends Component{
//     constructor(){
//         super()
//         this.state={ message:'Welcome visitor'}
//     }
// // ----------------Note this----------------------
//     // changeMessage(){
//     //     this.setState(
//     //         {
//     //             message:"Thanks for subscribing."
//     //         }
//     //     )
//     // }

//     // render(){
//     //     return(
//     //        <div>
//     //            <h1>{this.state.message}</h1>
//     //            <button onClick={()=>this.changeMessage()}>Subscribe</button>
//     //        </div>
//     //     )
//     // }


// //-------OR Do like this -----------
//     changeMessage=()=>{
//         this.setState(
//             {
//                 message:"Thanks for subscribing."
//             }
//         )
//     }

//     render(){
//         return(
//            <div>
//                <h1>{this.state.message}</h1>
//                <button onClick={this.changeMessage}>Subscribe</button>
//            </div>
//         )
//     }
// }



// export default Message

export class adMessage extends Component{
    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }
    increment=()=>{
        this.setState(
            {
            count : this.state.count +1
            },()=>{
                console.log('callback value',this.state.count)
            })
            console.log(this.state.count)
       
    }

    incrementAgain=()=>{
        this.setState(prevState =>({
            count: prevState.count+1
        }))
        console.log(this.state)
    }

    incrementFive=()=>{
        this.incrementAgain()
        this.incrementAgain()
        this.incrementAgain()
    }

    render(){
        return(<div>
            Count--{this.state.count}
        
        <button onClick={this.incrementFive}>Increment</button>
        </div>)
        
    }
}

export default adMessage