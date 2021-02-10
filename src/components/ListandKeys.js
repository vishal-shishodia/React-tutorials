import React,{Component} from "react"
import Person from './Person'
function PersonList(){
    // const names=['Bruce',"Clark","Diana"]

    // return(
    // <div>{names.map(name=><h2>{name}</h2>)}</div>
    // )

    const persons=[
        {id:1,name:"Bruce",age:23},{id:2,name:"Clark",age:34}
    ]
const nameList=persons.map(person => <Person key={person.id} person={person}/>)
return(<div>{nameList}</div>)
}

export default PersonList