import { useState } from 'react'
import './App.css'
import bounce from './bounce.gif'
import Jogador from './Jogador.jsx'
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
      <main>
        
        <div className='cenario'>

          <Jogador teste={count}></Jogador>
        </div>
          <div className='inputArea' onClick={increment}>
            você pulou: {count}
          </div>
      </main>
    </>
  )
}

export default App
