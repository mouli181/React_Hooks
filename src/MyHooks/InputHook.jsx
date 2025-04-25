import React, { useRef } from 'react'

function InputHook() {
    const input = useRef(null)
  return (
    <div>
        <input type="text" ref={input}  />
        <button onClick={()=>{input.current.focus()}}>Focus</button>
    </div>
  )
}

export default InputHook