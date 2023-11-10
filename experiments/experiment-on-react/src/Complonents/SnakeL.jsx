import React from 'react'
import "./css/SnakeL.css"

export default function SnakeL() {
    let board=[];
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
          let evenodd = ((((i*10)-10)+j)%2==0)?"even":"odd";
          board.push(<div className={evenodd}>{((i*10)-10)+j}</div>)
        }
    }
    let newboard=[];
    let n=[]
    for(let i=0;i<100;i++){
      n.push(board[i])
      if(board[i]%10==0){
        if(i%0==0){
          
          newboard=[...newboard,...n]
        }
      }
    }
  return (
    <div className='snake'>{board.reverse()}</div>
  )
}
