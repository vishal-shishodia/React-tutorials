import React,{Component} from "react"

function NameList(){
    // const names=['Bruce',"Clark","Diana"]

    // return(
    // <div>{names.map(name=><h2>{name}</h2>)}</div>
    // )

    const names=[
        {id:1,name:"Bruce",age:23},{id:2,name:"Clark",age:34}
    ]
const personList=names.map(name=>(<h2>I am {name.name}. I am {name.age} old</h2>))
return(<div>{personList}</div>)
}

export default NameList