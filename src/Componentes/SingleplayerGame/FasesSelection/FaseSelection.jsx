import './FaseSelection.css'

function goTo( fase){
 
        window.location.href = '/SinglePlayer/fase'+fase;
    
}
export function FaseSelection( props) {
    console.log(props);
    let _visibility= 'hidden'
    if(props.fase === 0){
        _visibility = 'visible';
    }
    return (
        <ol className = 'paginaSelecao' style={{visibility:_visibility}}>
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