import React, { createContext, useContext } from 'react'

const context = createContext()

function DataPass() {
  return (
    <context.Provider value={"Mouli"}>
        <Child />
    </context.Provider>
  )
}

export default DataPass



function Child(){
    const user = useContext(context);
    return <h2>Logged User is {user}</h2>
}