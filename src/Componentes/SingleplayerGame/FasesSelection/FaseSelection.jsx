import './FaseSelection.css'

function goTo( fase){
 
        window.location.href = '/SinglePlayer/fase'+fase;
    
}
export function FaseSelection( props) {
    console.log(props);
    let _display;
    if(props.fase !== 0){
        _display = 'none';
    }
    return (
        <ol className = 'paginaSelecao' style={{display:_display}}>
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
    );
}