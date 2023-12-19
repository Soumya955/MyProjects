
   import React, { useEffect, useRef, useState } from 'react'
   
   export default function Timmer() {
    const timmerid=useRef(null);
    const [time,settime]=useState("")

    useEffect(()=>{
     if(timmerid.current)clearInterval(timmerid.current);
    timmerid.current=setInterval(()=>{
        let date=new Date();
        settime(date.toString().split(" ")[4])
    },1000)

    return ()=>{clearInterval(timmerid.current)}
    })
    
     return (
       <>
        <h1>timer</h1>
         <h2>{time}</h2>
       </>
     )
   }
   