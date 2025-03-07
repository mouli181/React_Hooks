import React, { useRef } from 'react'

function UseRefHooks() {
    const input = useRef(null)

    function inputfocus(){
        input.current.focus()
    }
  return (
    <div>
        <input type="text" ref={input} />
        <button onClick={inputfocus}>Click</button>
    </div>
  )
}

export default UseRefHooks