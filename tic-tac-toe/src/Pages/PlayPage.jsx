import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { getDataFromLocalstorage, setdataToLocalStirage } from '../LocalStorage.js/LocalStorage'
import { winner } from '../Winner/Winner';
import "./PlayPage.css"


function findRandomIndex(){
    let randomIndex = Math.floor(Math.random() * 9);
    return randomIndex
}

export default function PlayPage() {

   const [data,setdata]=useState(["","","","","","","","",""]) 
   const [player,setplayer]=useState(false) 
   const [score,setScore]=useState(getDataFromLocalstorage("Soumya-myApp-tic-tac-toe-score")||0)
   const [name,setName]=useState(getDataFromLocalstorage("Soumya-myApp-tic-tac-toe-name"))

let navigate=useNavigate();

useEffect(()=>{
    if(!getDataFromLocalstorage("Soumya-myApp-tic-tac-toe-name")){
        navigate("/")
    }
},[])  

function handleClick(n){
if(!data[n]){
    let winner1=winner(data);
    console.log(winner1,"ppp;")
    if(winner1==="Not End"){
        let dt=[...data]
            dt[n]="X"
        setdata(dt)
        setplayer(true)
        setTimeout(()=>{
            setplayer(false);
            let randomI,flag=0;
            dt=[...dt]
            while(dt[randomI]!==""){
                randomI=findRandomIndex()
                flag++
                if(flag>200){
                    break;
                }
            }
            dt[randomI]="O"
            setdata(dt)
            winner1=winner(dt);
            if(winner1==="Draw"){
                Swal.fire({
                    title: "!!!",
                    text: "Match Drawww..",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    customClass: {
                      container: 'my-swal-container',
                      title: 'my-swal-title',
                      content: 'my-swal-content',
                      confirmButton: 'my-swal-confirm-button',
                      cancelButton: 'my-swal-cancel-button',
                      actions: 'my-swal-actions'
                    },
                  })
                  setdata(["","","","","","","","",""])
            }else if(winner1==="X"||winner1==="O"){
                Swal.fire({
                    title: "!!!",
                    text: (winner1==="X")?"You Won" : "You lose",
                    icon:  (winner1==="X")?"success" : "warning",
                    buttons: true,
                    dangerMode: true,
                    customClass: {
                      container: 'my-swal-container',
                      title: 'my-swal-title',
                      content: 'my-swal-content',
                      confirmButton: 'my-swal-confirm-button',
                      cancelButton: 'my-swal-cancel-button',
                      actions: 'my-swal-actions'
                    },
                  })
                  setdata(["","","","","","","","",""])
                  
          setdataToLocalStirage("Soumya-myApp-tic-tac-toe-score",(winner1==="X")?score+1:score-1)
          setScore((winner1==="X")?score+1:score-1)
            } 
        },1000)
    }else if(winner1==="Draw"){
        Swal.fire({
            title: "!!!",
            text: "Match Drawww..",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              content: 'my-swal-content',
              confirmButton: 'my-swal-confirm-button',
              cancelButton: 'my-swal-cancel-button',
              actions: 'my-swal-actions'
            },
          })
          setdata(["","","","","","","","",""])
          
    }else{
        Swal.fire({
            title: "!!!",
            text: (winner1==="X")?"You Won" : "You lose",
            icon: (winner1==="X")?"success" : "warning",
            buttons: true,
            dangerMode: true,
            customClass: {
              container: 'my-swal-container',
              title: 'my-swal-title',
              content: 'my-swal-content',
              confirmButton: 'my-swal-confirm-button',
              cancelButton: 'my-swal-cancel-button',
              actions: 'my-swal-actions'
            },
          })
          setdata(["","","","","","","","",""])
          setdataToLocalStirage("Soumya-myApp-tic-tac-toe-score",(winner1==="X")?score+1:score-1)
          setScore((winner1==="X")?score+1:score-1)
    } 
}else{
    Swal.fire({
        title: "!!!",
        text: `you cant change already filled data`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        customClass: {
          container: 'my-swal-container',
          title: 'my-swal-title',
          content: 'my-swal-content',
          confirmButton: 'my-swal-confirm-button',
          cancelButton: 'my-swal-cancel-button',
          actions: 'my-swal-actions'
        },
      })
}
}
  return (
    <>
    <h1>Welcome {name} </h1>
    <h3>Your Score is {score}</h3>
        <div className="tic-tac-toe">
  <div className="row">
    <div className="box" onClick={()=>handleClick(0)}>{data[0]}</div>
    <div className="box" onClick={()=>handleClick(1)}>{data[1]}</div>
    <div className="box" onClick={()=>handleClick(2)}>{data[2]}</div>
  </div>
  <div className="row">
    <div className="box" onClick={()=>handleClick(3)}>{data[3]}</div>
    <div className="box" onClick={()=>handleClick(4)}>{data[4]}</div>
    <div className="box" onClick={()=>handleClick(5)}>{data[5]}</div>
  </div>
  <div className="row">
    <div className="box" onClick={()=>handleClick(6)}>{data[6]}</div>
    <div className="box" onClick={()=>handleClick(7)}>{data[7]}</div>
    <div className="box" onClick={()=>handleClick(8)}>{data[8]}</div>
  </div>
</div>

    </>
  )
}
