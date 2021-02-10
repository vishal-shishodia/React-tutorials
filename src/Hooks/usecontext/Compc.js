import React ,{useState,useEffect, useContext} from 'react'
import {FirstName,LastName} from './UseContext'
function CompC(){
    const name=useContext(FirstName)
    const lastname=useContext(LastName)
    return(<div>
        my name is {name} {lastname}
    </div>)
}

export default CompC