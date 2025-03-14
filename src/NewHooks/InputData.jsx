import React, { useRef } from 'react'

function InputData() {

    const display = useRef(null)

    function inputfocus(){
        display.current.focus()
    }

  return (
    <div>
        <input type="text" ref={display} />
        <button onClick={inputfocus}>Click me</button>
    </div>
  )
}

export default InputData