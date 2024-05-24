import { useState } from 'react'
import './App.css'
import Jogador from './Jogador.jsx'
import SinglePlayerGame from './Componentes/SingleplayerGame/SinglePlayer.jsx'
import StartScreen from './Componentes/StartScreen/StartScreen.jsx'
import { useCookies, Cookies } from 'react-cookie';

import {
  
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let dadosCookie = {
    fezTutorial: false,
    fasesConcluidas: [0,0,0]
  }

  const [cookies, setCookie] = useCookies(['dadosCookie']);
  
  if (cookies.dadosCookie === undefined) {
    console.log("Isso está indefinido");
    setCookie('dadosCookie', dadosCookie );
  }

  console.log(cookies);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<StartScreen />} />
          <Route path="/singleplayer/" element={<SinglePlayerGame  fase={0}/>} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={1}/>} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={2}/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
