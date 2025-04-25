import React, { useEffect, useState } from 'react'
import "../styles/counter.css"

function Counter() {
    const [count,setCount] =useState(0)

    useEffect(()=>{
        document.title = `Title changed ${count}`
    })
  return (
    <div>
        <p>Count {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  )
}

export default Counter