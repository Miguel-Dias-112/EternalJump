import { useState } from 'react'
import './SinglePlayer.css'
import Player from './Player/Player'
import sprite from '../../Assets/sprite.png'
import cronometro from '../../Assets/cronometro.jpg'
import React from 'react';
function IndicadorClique(props){
  console.log(props)
    return (
      <>
        <div style={{visibility: props.visivel}} onClick={()=>{props.blink()}} className='IndicadorVisual'>
           Equilibrar
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
  formatarNumero = function(numero) {
    return numero.toString().padStart(3, '0');
}
  blink = function(){
    this.setState({ cor: 'green' });
    this.setState({ visivel: 'hidden' });
    this.setState({ pontos: this.state.pontos + 1 });
    window.setTimeout(()=>{
      this.setState({ cor: 'white' });
    }, 200)
  }.bind(this)
  back = function(){
    window.location.href = '/'
  }
  render() {
    
    return (  
      <>
        <main style={{background: this.state.cor}} className='SinglePlayerGame'>
          <header>
            <button onClick={this.back}> b</button>
            <h1>{this.formatarNumero(this.state.pontos)}</h1>
             <img src={sprite} alt="" />

          </header>
          <section className='GameArea'>
          <Player></Player>
          <IndicadorClique  blink={this.blink} visivel={this.state.visivel}></IndicadorClique>

          </section>

        </main>
      </>
    )
  }
}

export default SinglePlayerGame