import { useState } from 'react'
import './StartScreen.css'

export default function StartScreen(props) {

  let startGame = function(){
    window.location.href = '/SinglePlayer/'
  }

  let creditos = function(){
    window.location.href = '/creditos/'
  }

  return (
    <>
      <main className='StartScreen'>
        <h1>Jump Your Way to Heaven</h1>
        <button onClick={startGame}> Single Player</button>
        <button onClick={creditos}> Creditos</button>
      </main>
    </>
  )
}


