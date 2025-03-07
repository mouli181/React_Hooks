import React, { createContext, useContext } from 'react'

const user = createContext()

function UseContextHooks() {
  return (
    <user.Provider value={"Mouli"}>
        <Child />
    </user.Provider>
  )
}

export default UseContextHooks

function Child(){
    const data = useContext(user)
    return <p>Logged user {data}</p>
}