import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import "./HomePage.css";

export default function HomePage() {
  const [name, setName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Welcome, ${name}!`);
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
            onChange={handleInputChange}
          />
          <button type="submit">Lets Start</button>
        </form>
      </div>
    </>
  );
}
