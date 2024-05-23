import './FaseSelection.css'




function goTo( fase){
 
        window.location.href = '/SinglePlayer/fase'+fase;
    
}
export function FaseSelection( props) {
    let _display;
    if(props.fase !== 0){
        _display = 'none';
    }
    return (
        <div style={{display:_display}} className = 'paginaSelecao'>
            <header>
                <button onClick={()=>{window.location.href = '../'}}>
                
                </button>
            </header>
            <div  className='mapa' >
                <image className='onetothree'></image>
                <image className='twotothree'></image>
                    
                    <div className = 'seletorDeFase' style={{gridRow:1}} onClick={ () => goTo(1)}></div>
                    <div className = 'seletorDeFase' style={{gridRow:2}} onClick={ () => goTo(2)}></div>
                    <div className = 'seletorDeFase' style={{gridRow:3}} onClick={ () => goTo(3)}></div>
        
            </div >
        </div>
        
    );
}