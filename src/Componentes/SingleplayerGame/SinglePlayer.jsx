import React, { Component } from 'react';
import './SinglePlayer.css';
import Player from './Player/Player';
import michael from '../../Sons/michael.mp3';
import musicaf1 from '../../Sons/musica8bitSemCopyRight.mp3';
import getFase from '../../Data/Fases';
import { FaseSelection } from './FasesSelection/FaseSelection.jsx';

function IndicadorClique(props) {
  if (props.longo === true) {
    return (
      <div style={{ visibility: props.visivel,  backgroundColor: props.cor }} onClick={props.click} className='IndicadorVisual longo'>
        START
      </div>
    );
  }
  return (
    <div style={{ visibility: props.visivel,  backgroundColor: props.cor }} onClick={props.click} className='IndicadorVisual'>
    </div>
  );
}

class SinglePlayerGame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vidas:5,
      
      contadorTempo: 0, pontos: 0,
      pula: false, 
      acerto:true,
      botoesVisibility: ['hidden','visible','hidden'] ,
      botoesType: [1,2,1],
      botoesColor :['rgba(172, 255, 47, 0.664)','rgba(172, 255, 47, 0.664)','rgba(172, 255, 47, 0.664)'],
      jogada: false,
    }

    this.click = this.click.bind(this);
    this.back = this.back.bind(this);
  }

  checaJogada(but, oldBut)
  {
    // console.log('O estado anterior eh: ' + oldBut);
    // console.log('O botoes eh: ' + but);
    // console.log('O valor da jogada eh: ' + this.state.jogada);

    if(!(but.every((val,index) => val === oldBut[index])) && !(but.every(val => val === 1)))
    {   
      if( !this.state.jogada)
        {
          this.setState({ vidas: this.state.vidas - 1 });
        }
      
      this.setState({ jogada: false });
    }
  }

  começou= false
  start(){

    const TimeLine = getFase(this.props.fase).intervalos  // array de marc temporal
  
   
    
    let prevTypes = [1,1,1];
    
    this.interval = setInterval( () => {
      if(this.state.vidas <= 0){
        clearInterval(this.interval);
        return;
      }
      const intervalo = getFase(this.props.fase).intervalos // array com a sequencia de botoõe
      this.setState({ contadorTempo: this.state.contadorTempo + 1 });
      let contador = this.state.contadorTempo
      const botoes = intervalo[contador];
      let visivel = this.state.botoesVisibility;
      
      
      this.setState({ botoesType: botoes });
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

      this.setState({ botoesVisibility: visivel, botoesColor: cor })  

      setTimeout( () => {
        this.checaJogada(botoes, prevTypes);
        prevTypes = botoes.slice();    
      }, 1000)
          
      },125); //voltar p 100 dps teste
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

  selecionarMusica(fase) {
    switch (fase) {
      case 1:
        return musicaf1;
      //case 2:
      //  return musicaf2;
      //case 3:
      //  return musicaf3;
      //case 4:
      //  return musicaf4;
      //case 5:
      //  return musicaf5;
      //case 6:
      //  return musicaf6;
      //case 7:
      //  return musicaf7;
      //case 8:
      //  return musicaf8;
      //case 9:
      //  return musicaf9;
      //case 10:
      //  return musicaf10;
    }
  }

  click(event, tipo) {
    let botao = event.target;
    if(this.state.vidas <= 0){
      return;
    }
    if(this.começou === false){
      this.start();
      this.começou = true;
      let audio = document.getElementById('audio2');
      audio.play();
      botao.innerHTML = ""
      botao.classList.remove("longo")
    }
    // console.log('click',tipo)
    if(tipo==1){
      this.setState({acerto:false,vidas: this.state.vidas - 1, pula: true, visivel: ['hidden','hidden','hidden'], jogada: true });
      window.setTimeout(() => {
        this.setState({pula: false, acerto:true,visivel: ['hidden','hidden','hidden'] });
      },1100)
      // console.log('errou',this.state.vidas);
    }
    if(tipo==2){
      this.setState({pontos: this.state.pontos + 1, pula: true, visivel: ['hidden','hidden','hidden'], jogada: true });
      // console.log('acertou');
      let audio = document.getElementById('audio');
      audio.play();
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
    window.location.href = '../SinglePlayer/';
  }
  render() {
    return (
      <main  className='SinglePlayerGame'>
        <FaseSelection 
        
        fase={this.props.fase} />
        <header>
          <button onClick={this.back}>←</button>


          <section> 
            <h1>{this.showLifeBar() }
            </h1>
            <h1>{this.formatarNumero(this.state.pontos)}</h1>

          </section>
          {/* <img src={sprite} alt="" /> */}
        </header>
        <section className='GameArea'>
          <section className='Game'>
            
            <Player pula={this.state.pula} vidas ={this.state.vidas} contador={this.state.contadorTempo} acerto={this.state.acerto}/>

          </section>

          <section className='GameControls'>  
            <section className='GameControlsButtons'>
              <IndicadorClique click={(e)=> this.click(e,this.state.botoesType[0])} cor={this.state.botoesColor[0]} visivel={this.state.botoesVisibility[0]} />
              <IndicadorClique   click={(e)=> this.click(e,this.state.botoesType[1])} longo={true} cor={this.state.botoesColor[1]} visivel={this.state.botoesVisibility[1]} />
              <IndicadorClique  click={(e)=> this.click(e,this.state.botoesType[2])} cor={this.state.botoesColor[2]} visivel={this.state.botoesVisibility[2]} />
            </section>
            
          </section>
        </section>
        <audio  id = 'audio' src={michael} />
        <audio  id = 'audio2' src={this.selecionarMusica(this.props.fase)} />

      </main>
    );
  }
}


export default SinglePlayerGame;
