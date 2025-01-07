
import React, { useRef } from 'react'

function UseRefHooks() {
   const input =useRef(null)
   const input1 =useRef(null)

  return (
    <div>
        <input type="text" ref={input1} />
        <input type="text" ref={input} />
        <button onClick={()=>{input.current.focus()}}>Focus</button>
        <button onClick={()=>{input1.current.focus()}}>Focusfirst</button>
    </div>
  )
}

export default UseRefHooks