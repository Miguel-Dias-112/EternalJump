import { useState } from 'react'
import './StartScreen.css'
export default function StartScreen(props) {

  let startGame = function(){
    window.location.href = '/SinglePlayer/'
  }

  return (
    <>
      <main className='StartScreen'>
        <h1>Jump Adventure</h1>
        <button onClick={startGame}> Single Player</button>
        <button> Multiplayer</button>
      </main>
    </>
  )
}


