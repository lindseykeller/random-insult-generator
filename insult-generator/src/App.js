import React, { useState } from "react"
import "./App.css"
import image from "./callthema.png"
import words from "./data"

const App = () => {
  const [insult, setInsult] = useState(
    words[0].setOne[Math.floor(Math.random() * words[0].setOne.length)] +
      " " +
      words[1].setTwo[Math.floor(Math.random() * words[1].setTwo.length)]
  )

  const randomizeInsult = () => {
    setInsult(
      words[0].setOne[Math.floor(Math.random() * words[0].setOne.length)] +
        " " +
        words[1].setTwo[Math.floor(Math.random() * words[1].setTwo.length)]
    )
  }
  return (
    <div className="App">
      <>
        <img src={image} alt="meme" width="50%" />
        <h2>Call em' a</h2>

        <p className="randomInsultText">{insult}</p>
        <button onClick={() => randomizeInsult()}>New Word</button>
      </>
    </div>
  )
}

export default App;
