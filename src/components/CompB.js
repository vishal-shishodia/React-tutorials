import React,{Component} from 'react'
import {UserConsumer} from './Context'
class CompB extends Component{
    render(){
        return(<UserConsumer>
            {(username)=>{return <div>Hello {username}</div>}}
        </UserConsumer>)
        
    }
}
export default CompB