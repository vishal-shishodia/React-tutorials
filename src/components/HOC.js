import React from 'react'

const updateComp=(originalComp,incrementNum)=>{
    class newComp extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementCount=()=>{
            this.setState(prevState=>{
                return {count:prevState.state+incrementNum}
            })
        }

        render(){
            return(<originalComp count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>)
        }
    }
    return newComp
}

export default updateComp