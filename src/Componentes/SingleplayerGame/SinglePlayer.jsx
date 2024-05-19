import React, { Component } from 'react';
import './SinglePlayer.css';
import Player from './Player/Player';
import sprite from '../../Assets/sprite.png';

function IndicadorClique(props) {
  
  return (
    <div style={{ visibility: props.visivel }} onClick={props.blink} className='IndicadorVisual'>
      Equilibrar
    </div>
  );
}

class SinglePlayerGame extends Component {
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, pontos: 0, pula: false, visivel: 'hidden' };
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

  componentDidMount() {
    console.log('mounted');
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ contadorTempo: prevState.contadorTempo + 1 }), () => {
        let contador = this.state.contadorTempo;
        if (this.intervalos[contador] === 1) {
          this.setState({ visivel: 'visible' });
        } else if (this.intervalos[contador] === 5) {
          window.alert('Fim de jogo');
          clearInterval(this.interval);
        } else {
          this.setState({ visivel: 'hidden' });
        }
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatarNumero(numero) {
    return numero.toString().padStart(3, '0');
  }

  blink() {
    this.setState({ pula: true });
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
          <Player pula={this.state.pula}/>
          <IndicadorClique blink={this.blink} visivel={this.state.visivel} />
        </section>
      </main>
    );
  }
}

export default SinglePlayerGame;
