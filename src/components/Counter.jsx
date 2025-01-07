import React, { useState } from 'react'

function Counter() {
   const [count,setCount] =useState(0)
  return (
    <div>
        <p>Counter {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count-1)}}>decrease</button>
    </div>
  )
}

export default Counter;