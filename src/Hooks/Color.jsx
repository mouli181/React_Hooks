import React, { useState } from 'react'

function Color() {
    const [color,setColor]=useState('red')
  return (
    <div style={{backgroundColor:color, padding:'100px'}}>
        <button onClick={()=>{setColor('blue')}}>Blue</button>
        <button onClick={()=>{setColor('orange')}}>Orange</button>
        <button onClick={()=>{setColor('green')}}>Green</button>
    </div>
  ) 
}

export default Color