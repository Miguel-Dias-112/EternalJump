import './Final.css'

export function Final(props) {
    if(props.tipo === 1)
    {
        return(
            <>
            <div id="final">
                <h1>Fim</h1>
                <p>Ganhou</p>
            </div>
            </>
        )
    };
    if(props.tipo === 2)
    {
        return(
            <>
            <div id="final">
                <h1>Fim</h1>
                <p>Perdeu</p>
            </div>
            
            </>
        )
    };
    let _display = 'none';
    return (<div style={{display:_display}} />);
}