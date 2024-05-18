import { useState } from 'react'
import './SinglePlayer.css'
import Player from './Player/Player'
import React from 'react';
function IndicadorClique(props){
  console.log(props)
    return (
      <>
        <div style={{visibility: props.visivel}} onClick={()=>{props.blink()}} className='IndicadorVisual'>
          Clique na Tela
        </div>
      </>
    )
}
class SinglePlayerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, pontos:0,cor:'white',visivel:'hidden'};

  }
  intervalos=[
    0,1,1,0,0,1,1,0,0,1,1,
    0,0,1,1,0,1,1,0,0,1,1,
    0,0,1,1,0,0,1,1,0,0,1,
    0,0,0,0,0,0,0,0,1,1,0,
    0,0,1,1,0,0,1,1,0,0,0,
    1,1,0,0,0,1,1,0,0,1,5,
    1,1,0,0,1,1,0,0,1,1,
    0,0,1,1,0,1,1,0,0,1,1,
    0,0,1,1,0,0,1,1,0,0,1,
    0,0,0,0,0,0,0,0,1,1,0,
    0,0,1,1,0,0,1,1,0,0,0,
    1,1,0,0,0,1,1,0,0,1,5]
  componentDidMount() {
    console.log('mounted')
    this.interval = setInterval(() => {
      
      this.setState({ contadorTempo: this.state.contadorTempo + 1 });
    

    
      let contador = this.state.contadorTempo
      if(this.intervalos[contador]===1){
        this.setState({ visivel: 'visible' });
      }
      if(this.intervalos[contador]===5){
        window.alert('Fim de jogo')
      }
      if(this.intervalos[contador]===0){
      
      
        this.setState({ visivel: 'hidden' });
      }
    }, 500);
  }
  blink = function(){
    this.setState({ cor: 'green' });
    this.setState({ visivel: 'hidden' });
    this.setState({ pontos: this.state.pontos + 1 });
    window.setTimeout(()=>{
      this.setState({ cor: 'white' });
    }, 200)
  }.bind(this)
  render() {
    
    return (  
      <>
        <main style={{background: this.state.cor}} className='SinglePlayerGame'>
            <Player></Player>
            <IndicadorClique  blink={this.blink} visivel={this.state.visivel}></IndicadorClique>
            Você tem: {this.state.pontos} pontos
        </main>
      </>
    )
  }
}

export default SinglePlayerGame