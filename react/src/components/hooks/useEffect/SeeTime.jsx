import React, { useEffect, useState } from 'react'

export const SeeTime = () => {
const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
       

       const intervalId = setInterval(() => {
        const data = new Date().toLocaleTimeString();
       setTime(data);
       },1000)

       return () => clearInterval(intervalId);



    },[])
  return (
    <div>{time}</div>
  )
}
