import React, { useState } from 'react'

function CounteApp() {
    const [count,setCount] =useState(0)

  return (
    <div>
        <p>Count {count} </p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
        <button onClick={()=>{setCount(count-1)}}>deacrese</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default CounteApp