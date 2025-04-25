import React, { createContext, useContext } from 'react'

const mydata = createContext()


function Datapass() {
  return (
    <mydata.Provider value={"Mouli"}>
        <Data />
    </mydata.Provider>
  )
}

export default Datapass

function Data(){
    const user = useContext(mydata)
    return <p>Logged user is {user}</p>
}