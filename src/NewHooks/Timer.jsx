import React, { useEffect, useState } from 'react'

function Timer() {
    const [timer,setTime] = useState(0)

    useEffect(()=>{
        const intervel = setInterval(()=>{
            setTime((prevTime)=>prevTime+1)},1000)

            console.log("useeffect");
            

        return ()=> clearInterval(intervel) 
    },[])
  return (
    <div>
        <p>Timer {timer} </p>
    </div>
  )
}

export default Timer