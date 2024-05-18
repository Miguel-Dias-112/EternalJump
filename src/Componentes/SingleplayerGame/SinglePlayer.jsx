import { useState } from 'react'
import './SinglePlayer.css'
import Player from './Player/Player'
import React from 'react';
function IndicadorClique(props){
  console.log(props)
    return (
      <>
        <div style={{visibility: props.visivel}} className='IndicadorVisual'>
        </div>
      </>
    )
}
class SinglePlayerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, visivel:'hidden'};

  }

  componentDidMount() {
    this.interval = setInterval(() => {
      
      this.setState({ contadorTempo: this.state.contadorTempo + 1 });
      // for (let i = 0; i < intervalos.length; i++) {
      //   const intervalo = intervalos[i];
      //   if(this.state.contadorTempo > intervalo[0] && this.state.contadorTempo < intervalo[1]){
      //     this.setState({ visivel: 'visible' });
      //   }else{
      //     for (let x = 0; x < intervalos.length; x++) {
            
      //       if(this.state.contadorTempo > intervalos[x][1]){
      //         this.setState({ visivel: 'hidden' });
      //       }
            
      //     }
      //   }
      // }

      let intervalos=[0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,]
      let contador = this.state.contadorTempo
      if(intervalos[contador]===1){
        this.setState({ visivel: 'visible' });
      }
      else{
        this.setState({ visivel: 'hidden' });
      }

    
    
      
    }, 500);
  }

  render() {
    
    return (  
      <>
        <main className='SinglePlayerGame'>
            <Player></Player>
            {this.state.contadorTempo}
            <IndicadorClique visivel={this.state.visivel}></IndicadorClique>
        </main>
      </>
    )
  }
}

export default SinglePlayerGame