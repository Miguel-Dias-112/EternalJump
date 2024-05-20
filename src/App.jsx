import { useState } from 'react'
import './App.css'
import Jogador from './Jogador.jsx'
import SinglePlayerGame from './Componentes/SingleplayerGame/SinglePlayer.jsx'
import StartScreen from './Componentes/StartScreen/StartScreen.jsx'

import {
  
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<StartScreen />} />
          <Route path="/singleplayer" element={<SinglePlayerGame />} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={1}/>} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={2}/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
