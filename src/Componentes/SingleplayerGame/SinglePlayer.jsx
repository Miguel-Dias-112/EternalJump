import React, { Component } from 'react';
import './SinglePlayer.css';
import Player from './Player/Player';
import sprite from '../../Assets/sprite.png';
import michael from '../../Sons/michael.mp3';
import musica from '../../Sons/musica8bitSemCopyRight.mp3';
import getFase from '../../Data/Fases';

function IndicadorClique(props) {
  
  return (
    <div style={{ visibility: props.visivel, backgroundColor: props.cor }} onClick={props.click} className='IndicadorVisual'>
    </div>
  );
}

class SinglePlayerGame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vidas:5,
      start: false,
      contadorTempo: 0, pontos: 0,
      pula: false, 
      acerto:true,
      botoesVisibility: ['hidden','visible','hidden'] ,
      botoesColor :['rgba(172, 255, 47, 0.664)','rgba(172, 255, 47, 0.664)','rgba(172, 255, 47, 0.664)'] }

    this.click = this.click.bind(this);
    this.back = this.back.bind(this);
  }


  start(){

    this.interval = setInterval( () => {

      const intervalo = getFase(1).intervalos // array com a sequencia de botoões

        this.setState({ contadorTempo: this.state.contadorTempo + 1 });
        let contador = this.state.contadorTempo;

        const botoes = intervalo[contador];
        let visivel = this.state.botoesVisibility;
        let cor = this.state.botoesColor;
        botoes.forEach((botão, index) => {
            if (botão === 1) {
              visivel[index] = 'visible';
              cor[index] = 'lightcoral';
            } else if (botão === 2) {
              visivel[index] = 'visible';
              cor[index] = 'rgba(172, 255, 47, 0.664)';
            } else {
              visivel[index] = 'hidden';
            }
        });
        this.setState({ botoesVisibility: visivel, botoesColor: cor });
        
          
       
    }, 2000);
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

  click(event) {
    let botao = event.target;

    if(this.state.start === false){
      this.start();
      let audio = document.getElementById('audio2');
      audio.play();
      this.setState({ start: true });
    }
    if(botao.style.backgroundColor === 'lightcoral'){
      this.setState({acerto:false,vidas: this.state.vidas - 1, pula: true, visivel: ['hidden','hidden','hidden'] });
      window.setTimeout(() => {
        this.setState({pula: false, acerto:true,visivel: ['hidden','hidden','hidden'] });
      },1100)
      console.log('errou',this.state.vidas);
    }
    if(botao.style.backgroundColor === 'rgba(172, 255, 47, 0.664)'){
      console.log('acertou');
      let audio = document.getElementById('audio');
      audio.play();
      this.setState({pontos: this.state.pontos + 1, pula: true, visivel: ['hidden','hidden','hidden'] });
    }

    window.setTimeout(() => {
      this.setState({pula: false, acerto:true,visivel: ['hidden','hidden','hidden'] });
    },500)
    
    



  }
 showLifeBar() {
    let str = "";
    for (let i = 0; i < this.state.vidas; i++) {
      str += '❤️';
    }
    for (let i = 0; i < 5 - this.state.vidas ; i++) {
      str+= '🖤';
    }
    return str;
  }
  back() {
    window.location.href = '/';
  }

  render() {
    return (
      <main  className='SinglePlayerGame'>
        <header>
          <section>
          <button onClick={this.back}>←</button>

          </section>
          <section>
            
          </section>
          <section> 
            <h1>{this.showLifeBar() }
            </h1>
          </section>
          {/* <img src={sprite} alt="" /> */}
        </header>
        <section className='GameArea'>
          <section className='Game'>
            <div className='GameBackground'></div>
            <Player pula={this.state.pula} vidas ={this.state.vidas} contador={this.state.contadorTempo} acerto={this.state.acerto}/>

          </section>
          <section className='GameControls'>  
            <IndicadorClique click={this.click} cor={this.state.botoesColor[0]} visivel={this.state.botoesVisibility[0]} />
            <IndicadorClique click={this.click} cor={this.state.botoesColor[1]} visivel={this.state.botoesVisibility[1]} />
            <IndicadorClique click={this.click} cor={this.state.botoesColor[2]} visivel={this.state.botoesVisibility[0]} />
          </section>
        </section>
        <audio  id = 'audio' src={michael} />
        <audio  id = 'audio2' src={musica} />

      </main>
    );
  }
}

export default SinglePlayerGame;
