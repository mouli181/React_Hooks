import React from 'react'
import Child from './Child'

function Parent() {
    const message = "message from the parent"
    const arr = ["Hi..", " i am mouli"," from coimbatore"]
    function name(){
        document.getElementById('demo').innerHTML='simple'
        
    }
    
  return (
    <Child msg={message} a={arr} n={name()}/>
  )
}

export default Parent 