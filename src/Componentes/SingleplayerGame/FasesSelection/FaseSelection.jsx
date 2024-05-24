import { useState } from 'react';
import './FaseSelection.css'


import { useCookies } from 'react-cookie';



export function FaseSelection( props) {
    const [cookies, setCookie] = useCookies(['dadosCookie']);
    let dados = cookies.dadosCookie;
    let _display
    if(props.fase !== 0){
        _display = 'none';
    }

    function goTo( faseAtual){
    
        dados = cookies.dadosCookie;
    
        const fasesConsluidas= dados.fasesConsluidas
        const faseAnterior = faseAtual -1
        const faseAnteriorConcluida = fasesConsluidas[faseAnterior]
        if(faseAtual===1){
            window.location.href = '/SinglePlayer/fase'+faseAtual;
            return
        }
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
                ←   
                </button>
                
            </header>
            <div  className='mapa' >
                <image className='onetothree'></image>
                <image  className='twotothree'></image>
                    
                    <div className = 'seletorDeFase' style={{gridRow:1}} onClick={ () => goTo(1)}></div>
                    <div className = 'seletorDeFase' style={{gridRow:2}} onClick={ () => goTo(2)}></div>
                    <div className = 'seletorDeFase' style={{gridRow:3}} onClick={ () => goTo(3)}></div>
        
            </div >
        </div>
        
    );
}