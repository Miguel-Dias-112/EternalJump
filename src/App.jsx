import { useState } from 'react'
import './App.css'
import Jogador from './Jogador.jsx'
import HistoriaFinal from './Componentes/HistoriaFinal/historiafinal.jsx'
import SinglePlayerGame from './Componentes/SingleplayerGame/SinglePlayer.jsx'
import StartScreen from './Componentes/StartScreen/StartScreen.jsx'
import { Creditos } from './Componentes/Creditos/creditos.jsx'
import { useCookies, Cookies } from 'react-cookie';

import {
  
  Routes,
  Route,
  useRoutes,
  Link,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let dadosCookie = {
    fezTutorial: false,
    fasesConcluidas: [0,0,0]
  }

  const [cookies, setCookie] = useCookies(['dadosCookie']);
  
  if (cookies.dadosCookie === undefined) {
    setCookie('dadosCookie', dadosCookie );
  }

  console.log(cookies);

  return (
    <>
     
      <HashRouter >
      <Link id='singleplayer' to='/singleplayer'></Link>
      <Link id='fase1' to='/'></Link>
      <Link id='fase2' to='/ProjectsPage'></Link>
      <Link id='fase3' to='/Main2'></Link>
      <Link id='creditos' to='/creditos'></Link>
      <Link id='finalizacao' to='/finalizacao'></Link>
      
        <Routes>
          <Route path="/" index element={<StartScreen />} />
          <Route path="/creditos/" element={<Creditos />} />
          <Route path="/finalizacao/" element={<HistoriaFinal />} />
          <Route path="/singleplayer/" element={<SinglePlayerGame  fase={0}/>} />
          <Route path="/singleplayer/fase1" element={<SinglePlayerGame  fase={1}/>} />
          <Route path="/singleplayer/fase2" element={<SinglePlayerGame  fase={2}/>} />
          <Route path="/singleplayer/fase3" element={<SinglePlayerGame  fase={3}/>} />

        </Routes>
      </HashRouter>
    </>
  )
}


export default App
