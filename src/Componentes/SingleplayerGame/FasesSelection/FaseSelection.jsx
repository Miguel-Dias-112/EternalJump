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
            <ol  >
                <li>
                    <div className = 'seletorDeFase' onClick={ () => goTo(1)}></div>
                    <h2>Fase 1</h2>
                </li>

                <li>
                    <div className = 'seletorDeFase' onClick={ () => goTo(2)}></div>
                    <h2>Fase 2</h2>
                </li>
                <li>
                    <div className = 'seletorDeFase' onClick={ () => goTo(3)}></div>
                    <h2>Fase 3</h2>
                </li>

            </ol>
        </div>
        
    );
}