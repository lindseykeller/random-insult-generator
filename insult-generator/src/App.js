
import React from "react";
import "./App.css";
import image from "./callthema.png";
import words from "./data";

function App() {
  return (
    <div className="App">
      <>
        <img src={image} alt="old people at weddings meme" width="50%" />
        <p>Call em' a</p>
        <p>
          {words[0].setOne[Math.floor(Math.random() * words[0].setOne.length)] +
            " " +
            words[1].setTwo[Math.floor(Math.random() * words[1].setTwo.length)]}
        </p>
      </>
    </div>
  );
}

export default App;
