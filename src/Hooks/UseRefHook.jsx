import React, { useRef } from 'react'

function UseRefHook() {
    const input = useRef(null)
  return (
    <div>
        <input type="text" ref={input} />
        <button onClick={()=>{input.current.focus()}}>Click to Focus</button>
    </div>
  )
}

export default UseRefHook