import React from 'react'

function Child(props) {
  return (
    <div>
        <h2>{props.msg}</h2>
        <h2>{props.a}</h2>
        <h2 id='demo'>{props.n}</h2>
    </div>
  )
}

export default Child