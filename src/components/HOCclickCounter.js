import React ,{Component} from 'react'
import updateComp from './HOC'

class ClickCounter extends Component{

    render(){
        const {count,incrementCount}=this.props
        return(
            <div>
                <h1>Helllo</h1>
        <button onClick={incrementCount}>{this.props.name}Clicked {count} times</button>
            </div>
        )
    }
}

export default updateComp(ClickCounter,1)