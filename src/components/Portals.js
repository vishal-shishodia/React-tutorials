import React, {Component} from 'react'

fuction Portal(){
    return ReactDOM.createPortal(<h1>Posrtal</h1>,document.getElementById('portal-root'))
}