import { useState } from 'react';
import './FaseSelection.css';
import setaBack from '../../../Assets/setaBack.png';


import { useCookies } from 'react-cookie';


export function FaseSelection( props) {
    const [cookies, setCookie] = useCookies(['dadosCookie']);
    let dados = cookies.dadosCookie;
    let _display
    if(props.fase !== 0){
        _display = 'none';
    }
    const fasesConcluidas= dados.fasesConcluidas
    function goTo( faseAtual){
    
        dados = cookies.dadosCookie;
        const faseAnterior = faseAtual -2
        const faseAnteriorConcluida = fasesConcluidas[faseAnterior]
        if(faseAtual===1){
            window.location.href = '/SinglePlayer/fase'+faseAtual;
            return
        }
        
        if( faseAnteriorConcluida === 1 ){
            window.location.href = '/SinglePlayer/fase'+faseAtual;
        }else{
            let bloqueio = document.getElementById('Bloqueio')
            let titulo = document.getElementById('Titulo')
            switch(faseAnterior)
            {
                case 0:

                    bloqueio.style.display = "flex";
                    titulo.innerText = "Você ainda não passou pelo Céu";
                    
                    break;

                case 1:
                    bloqueio.style.display = "flex";
                    titulo.innerText = "Você ainda não passou pelo Inferno";
                    
                    break;

                default:
                break;
            }
        }
       
        
    }
  
    return (
        <div style={{display:_display}} className = 'paginaSelecao'>
            <header>
            <h1>fases</h1>
                <button onClick={()=>{window.location.href = '../'}}>
                <img className='seta' src={setaBack} alt="←" />
                </button>
                
            </header>
            <div id='Bloqueio'>
                <h1 id='Titulo'>TÍTULO</h1>
                <button onClick={() => {let bloqueio = document.getElementById('Bloqueio'); bloqueio.style.display = 'none'}}>OK</button>
            </div>
            <div  className='mapa' >
                <image className='onetothree'></image>
                <image  className='twotothree'></image>
                   { fasesConcluidas.map((fase, index) => {
                        if(index==0){
                            return <div className = {'seletorDeFase fase'+index} style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>
                        }
                        if(fase === 1){
                            return <div className = {'seletorDeFase fase'+index} style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>
                        }else{
                            return <div className = {'seletorDeFase Concluida fase'+index} style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>

                        }
                    })
                    }
                   
        
            </div >
        </div>
        
    );
}