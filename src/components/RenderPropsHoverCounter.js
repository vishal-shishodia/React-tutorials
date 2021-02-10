import React,{Component} from 'react'


class HoverCount extends Component{
    render(){
        const {count,incrementCount}=this.props
        return(
            <div>
                {count}
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverCount