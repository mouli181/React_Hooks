import React, { useEffect, useState } from 'react'
import "../styles/watch.css"

function Watch() {

    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        let intervel = setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(intervel)
        }
    },[])

    function timer(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const cur = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12



        return (`${padZero(hours)}: ${padZero(minutes)} : ${padZero(seconds)} ${cur}`)

    }
    function padZero(number){
        return (number < 10 ? "0" : "")+ number;
    }
  return (
    <div className='timer'>
        {timer()}
        
    </div>
  )
}

export default Watch