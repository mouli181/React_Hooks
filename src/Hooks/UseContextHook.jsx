import React, { createContext, useContext } from 'react'

const userContext = createContext();

function UseContextHook() {
  return (
    <userContext.Provider value={"Rohit"}>
        <UserDisplay />
    </userContext.Provider>
  )
}

export default UseContextHook

function UserDisplay(){
    const user = useContext(userContext);
    return <p>Logged User : {user}</p>
}