import React, { useEffect, useState } from 'react'

function Color() {
   const [color,setColor] = useState('grey')
   useEffect(()=>{
    document.title=`Title ${color}`
   })
  return (
    <div style={{backgroundColor:color, padding:"100px"}}>
        <button onClick={()=>{setColor('green')}}>Green</button>
        <button onClick={()=>{setColor('orange')}}>Orange</button>
        <button onClick={()=>{setColor('yellow')}}>Yellow</button>
    </div>
  )
}

export default Color