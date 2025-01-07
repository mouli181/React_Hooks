import React, { createContext, useContext } from 'react'


const context = createContext()

function UseContextHook() {
    const array = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div>
        <context.Provider value={array}>
            <Display />
        </context.Provider>
    </div>
  )
}

export default UseContextHook

function Display(){
    const user = useContext(context);
    return <h2>{user}</h2>
}