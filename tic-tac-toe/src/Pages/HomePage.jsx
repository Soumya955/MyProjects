import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

import "./HomePage.css";
import { createRandomCookie } from "../Cookies/CreateCookie";
import { getDataFromLocalstorage, setdataToLocalStirage } from "../LocalStorage.js/LocalStorage";

export default function HomePage() {
  const [name, setName] = useState(getDataFromLocalstorage("Soumya-myApp-tic-tac-toe-name")||"");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let navigate=useNavigate();


  useEffect(() => {
    const cookieValue = Cookies.get('myCookie-for-tic-tac-toe');
    (cookieValue)? console.log(cookieValue):setCookies()  
  }, []);

  function setCookies(){
    let newcookie=createRandomCookie()
    Cookies.set('myCookie-for-tic-tac-toe', newcookie, { expires: 7, path: '/', secure: true });
  }
 
  function handleSubmit(event) {
    event.preventDefault();
   if(name){
    setdataToLocalStirage("Soumya-myApp-tic-tac-toe-name",name)
    navigate("/play");

   }else{
    Swal.fire({
      title: "Are you Entered your Name?",
      text: `For proceeding you have to Enter your name!`,
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
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        onRequestClose={() => setModalIsOpen(false)}
      >
      <p>
      Tic Tac Toe is a classic two-player game that is played on a 3x3 grid. The game is simple to learn, yet difficult to master. It is often used as a teaching tool to introduce basic concepts of game theory, logic, and strategy. The objective of the game is to be the first player to get three in a row (horizontally, vertically, or diagonally) on the board.
      </p>
      <p>
        The game begins with an empty board, with players taking turns placing their respective marks (either "X" or "O") on the board. Once a player has placed their mark, the other player takes their turn. The game continues until one player achieves a win or a draw is declared when the board is completely filled with no winner.
      </p>
        <input
          onClick={() => {
            setModalIsOpen(false);
          }}
          type="ok"
          value="ok"
        />
      </Modal>
      <div className="container">
        <h1>Welcome to my app!</h1>
        <Link onClick={()=>setModalIsOpen(true)}>about</Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event)=>setName(event.target.value)}
          />
          <button type="submit" >Lets Start</button>
        </form>
      </div>
    </>
  );
}
