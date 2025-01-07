import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `title  ${count} times changed`
    })
  return (
    <div>
        <p>Count {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>

    </div>
  )
}

export default Counter