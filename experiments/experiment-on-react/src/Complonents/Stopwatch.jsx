import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
    const [time,settime]=useState({hour:"00",minite:"00",second:"00"});
    const id=useRef(null);
    const starttimmer=()=>{
        if(id.current)clearInterval(id.current)
        id.current=setInterval(()=>{
            increaseTime()
        },1000)
    }
    const pausetimmer=()=>{
        if(id.current)clearInterval(id.current)
    }
    const resettimmer=()=>{
        if(id.current)clearInterval(id.current)
        settime({hour:"00",minite:"00",second:"00"})
        id.current=null;
    }
    const increaseTime=()=>{
        settime(time=>{
            if(+time.second<59){
                return {...time,second:(+time.second<9)?"0"+(+time.second+1):+time.second+1}
            }else if(+time.minite<59){
                return {...time,minite:(+time.minite<9)?"0"+(+time.minite+1):+time.minite+1,second:"00"}
            }else if(+time.hour<59){
                return {...time,hour:(+time.hour<9)?"0"+(+time.hour+1):+time.hour+1,minite:"00",second:"00"} 
            }else{
                return {hour:"00",minite:"00",second:"00"}
            }
        })
        
    }
    
    useEffect(()=>{
        return ()=>{clearInterval(id.current)}
    },[])
   
  return (
    <>
    <h1>Stopwatch</h1>
    <h2>{time.hour}:{time.minite}:{time.second}</h2>
    <button onClick={()=>starttimmer()}>{id.current?"resume":"start"}</button>
    <button onClick={()=>pausetimmer()}>pause</button>
    <button onClick={()=>resettimmer()}>reset</button>
    </>
  )
}
