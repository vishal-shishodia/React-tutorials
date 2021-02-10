import React,{Component} from "react"

// function Hero({heroName}){
//     if(heroName=='Joker'){
//         throw new Error('Not a hero')
//     }
// return(<div>{heroName}</div>)
// }

class Hero extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log("error")
        console.log("info")
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default Hero