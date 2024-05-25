import { useState } from 'react';
import './FaseSelection.css'


import { useCookies } from 'react-cookie';
import seta from '../../../Assets/seta.png'


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
        console
        if( faseAnteriorConcluida === 1 ){
            window.location.href = '/SinglePlayer/fase'+faseAtual;
        }else{
            window.alert("você não fez a fase "+ faseAnterior)
        }
       
        
    }
  
    return (
        <div style={{display:_display}} className = 'paginaSelecao'>
            <header>
            <h1>fases</h1>
                <button onClick={()=>{window.location.href = '../'}}>
                </button>
                
            </header>
            <div  className='mapa' >
                <image className='onetothree'></image>
                <image  className='twotothree'></image>
                   { fasesConcluidas.map((fase, index) => {
                        if(fase === 1){
                            return <div className = 'seletorDeFase Concluida' style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>
                        }else{
                            return <div className = 'seletorDeFase ' style={{gridRow:index+1}} onClick={ () => goTo(index+1)}></div>

                        }
                    })
                    }
                   
        
            </div >
        </div>
        
    );
}