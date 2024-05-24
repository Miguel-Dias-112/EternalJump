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
    const fasesConsluidas= dados.fasesConsluidas

    function goTo( faseAtual){
    
        dados = cookies.dadosCookie;
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
                   { fasesConsluidas.map((fase, index) => {
                        console.log("concluida",fase,index)
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