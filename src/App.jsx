import { useState } from 'react'
import './App.css'
import bounce from './bounce.gif'
import Jogador from './Jogador.jsx'
import SinglePlayerGame from './Componentes/SingleplayerGame/SinglePlayer.jsx'
import StartScreen from './Componentes/StartScreen/StartScreen.jsx'
let lock = false
function App() {
  const [count, setCount] = useState(0)
  
  const increment = () => {setCount(count + 1)
    console.log(lock)
    if (lock) return
    lock = true
    setTimeout(() => {
      lock = false
    }, 500);


     let p =document.querySelector('#x')
     p.innerHTML=''
      let img = document.createElement('img')
      img.src = './'+bounce
      p.appendChild(img)
      
      console.log(bounce)
  }
  return (
    <>
   
        {/* <StartScreen ></StartScreen> */}
      <SinglePlayerGame></SinglePlayerGame>

      {/* <main>
        
        <div className='cenario'>

          <Jogador teste={count}></Jogador>
        </div>
          <div className='inputArea' onClick={increment}>
            você pulou: {count}
          </div>
      </main> */}
    </>
  )
}

export default App
