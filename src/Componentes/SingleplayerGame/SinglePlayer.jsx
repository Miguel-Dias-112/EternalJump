import React, { Component } from 'react';
import './SinglePlayer.css';
import Player from './Player/Player';
import sprite from '../../Assets/sprite.png';
import michael from '../../Sons/michael.mp3';
import musica from '../../Sons/musica8bitSemCopyRight.mp3';

function IndicadorClique(props) {
  
  return (
    <div style={{ visibility: props.visivel }} onClick={props.blink} className='IndicadorVisual'>
    </div>
  );
}

class SinglePlayerGame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      start: false,
      contadorTempo: 0, pontos: 0, pula: false, 
      visivel: ['hidden','visible','hidden'] };
    this.blink = this.blink.bind(this);
    this.back = this.back.bind(this);
  }

  intervalos = [
    0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
    0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1,
    0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0,
    1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 5,
    1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
    0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1,
    0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0,
    1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 5
  ];
  start(){

    this.interval = setInterval(() => {
      this.setState((prevState) => ({ contadorTempo: prevState.contadorTempo + 1 }), () => {
        let contador = this.state.contadorTempo;
        if (this.intervalos[contador] === 1) {
          this.setState({ visivel: ['visible','visible','visible'] });
        } 
        
        else if (this.intervalos[contador] === 5) {
          window.alert('Fim de jogo');
          clearInterval(this.interval);
        } 
          
        else {
            this.setState({ visivel: ['hidden','hidden','hidden'] });
          }
      });
    }, 500);
  }
  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatarNumero(numero) {
    return numero.toString().padStart(3, '0');
  }

  blink() {
    if(this.state.start === false){
      this.start();
      let audio = document.getElementById('audio2');
      audio.play();
      this.setState({ start: true });
    }
    this.setState({ pula: true, visivel: ['hidden','hidden','hidden'] });
    let audio = document.getElementById('audio');
    audio.play();


    this.setState((prevState) => ({ pontos: this.state.pontos + 1 }));
    setTimeout(() => {
      this.setState({ pula: false });
    }, 810);
  }

  back() {
    window.location.href = '/';
  }

  render() {
    return (
      <main  className='SinglePlayerGame'>
        <header>
          <button onClick={this.back}>←</button>
          <h1>{this.formatarNumero(this.state.pontos)}</h1>
          {/* <img src={sprite} alt="" /> */}
        </header>
        <section className='GameArea'>
          <section className='Game'>
            <div className='GameBackground'></div>
            <Player pula={this.state.pula}/>

          </section>
          <section className='GameControls'>  
            <IndicadorClique blink={this.blink} visivel={this.state.visivel[0]} />
            <IndicadorClique blink={this.blink} visivel={this.state.visivel[1]} />
            <IndicadorClique blink={this.blink} visivel={this.state.visivel[0]} />
          </section>
        </section>
        <audio  id = 'audio' src={michael} />
        <audio  id = 'audio2' src={musica} />

      </main>
    );
  }
}

export default SinglePlayerGame;
