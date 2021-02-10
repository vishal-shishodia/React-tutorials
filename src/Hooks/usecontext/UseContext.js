import React ,{useState,useEffect} from 'react'
import CompA from './CompA'
const FirstName=React.createContext()
const LastName=React.createContext()

function UserContext(){

    return(<div>
       <FirstName.Provider value='Vishal'>
        <LastName.Provider value="Shishodia">
          <CompA/>
        </LastName.Provider>
      </FirstName.Provider>
    </div>)
}

export default UserContext

export {FirstName,LastName}