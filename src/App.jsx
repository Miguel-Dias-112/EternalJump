import { useState } from 'react'
import './App.css'
import Jogador from './Jogador.jsx'
import SinglePlayerGame from './Componentes/SingleplayerGame/SinglePlayer.jsx'
import StartScreen from './Componentes/StartScreen/StartScreen.jsx'
import { Creditos } from './Componentes/Creditos/creditos.jsx'
import { useCookies, Cookies } from 'react-cookie';

import {
  
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let dadosCookie = {
    fezTutorial: true,
    fasesConcluidas: [1,1,0]
  }

  const [cookies, setCookie] = useCookies(['dadosCookie']);
  
  if (cookies.dadosCookie === undefined) {
    setCookie('dadosCookie', dadosCookie );
  }

  console.log(cookies);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<StartScreen />} />
          <Route path="/creditos/" element={<Creditos />} />
          <Route path="/singleplayer/" element={<SinglePlayerGame  fase={0}/>} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={1}/>} />
          <Route path="/singleplayer/fase2" element={<SinglePlayerGame  fase={2}/>} />
          <Route path="/singleplayer/fase3" element={<SinglePlayerGame  fase={3}/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
