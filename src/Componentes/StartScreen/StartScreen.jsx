import { useState } from 'react'
import './StartScreen.css'

export default function StartScreen(props) {

  let startGame = function(){
    let x = document.getElementById('singleplayer')
    x.click()
  }

  let creditos = function(){
    let x = document.getElementById('creditos')
    x.click()
  }

  return (
    <>
      <main className='StartScreen'>
        <h1>Eternal Jump</h1>
        <button onClick={startGame}> Play</button>
        <button onClick={creditos}> Credits</button>
      </main>
    </>
  )
}


