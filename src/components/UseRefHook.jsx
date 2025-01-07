import React, { useRef } from 'react'

function UseRefHook() {
    const input = useRef(null)

    function inputFocus(){
        input.current.focus();
    }
  return (
    <div>
        <input type="text" ref={input} />
        <button onClick={inputFocus}>Focus</button>
    </div>
  )
}

export default UseRefHook;