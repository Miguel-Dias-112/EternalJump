import { useState } from 'react';
import './FaseSelection.css';
import setaBack from '../../../Assets/setaBack.png';


import { useCookies } from 'react-cookie';


export function FaseSelection( props) {
    const backMenu= function() {
        let x = document.getElementById('start');
        x.click();
        window.location.reload();
      }
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
            let x = document.getElementById('fase'+faseAtual)
            x.click()
            window.location.reload();
            return
        }
        
        if( faseAnteriorConcluida === 1 ){
            let x = document.getElementById('fase'+faseAtual)
            x.click()
            window.location.reload();

        }else{
            let bloqueio = document.getElementById('Bloqueio')
            let titulo = document.getElementById('Titulo')
            switch(faseAnterior)
            {
                case 0:

                    bloqueio.style.display = "flex";
                    titulo.innerText = "You have not completed the heaven stage";
                    
                    break;

                case 1:
                    bloqueio.style.display = "flex";
                    titulo.innerText = "You have not completed the hell stage";
                    
                    break;

                default:
                break;
            }
        }
       
        
    }
  
    return (
        <div style={{display:_display}} className = 'paginaSelecao'>
            <header>
            <h1>Stages</h1>
                <button onClick={backMenu}>
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
                        if(fasesConcluidas[index-1] === 1){
                            return <div className = {'seletorDeFase  fase'+index} style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>
                        }
                        return <div className = {'seletorDeFase Concluida fase'+index} style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>

                    })
                    }
                   
        
            </div >
        </div>
        
    );
}