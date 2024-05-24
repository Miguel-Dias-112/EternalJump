import './Final.css'
import botoesplaceholder from '../../../Assets/imagensPlaceHolder/adamsandler.jpeg';
export function Final(props) {
    
    const recarregarPagina = () => {
        window.location.reload();
      };

    const proximo = () => {
        //botao proximo ainda esta quebrado

        window.location.reload();
    }
    
    if(props.tipo === 2)
        { 
            return(
                <>
                <div className='background' >

                <div className="final">
                    <h1>Você perdeu!</h1>
                    <div className='botoes'>
                        <div>
                            <img className='icone' onClick={props.back} src={botoesplaceholder}/>
                            <p onClick={props.back}>Voltar</p>
                        </div>
                        <div>
                            <img className='icone' onClick={recarregarPagina} src={botoesplaceholder}/>
                            <p onClick={recarregarPagina}>Repetir</p>
                        </div>
                    </div>
                </div>

                </div>
            
                </>
            )
        };
    if(props.tipo === 1)
    {
        return(
            <>
            <div className='background' >

            <div className="final">
                <h1>Você ganhou!</h1>
                <div className='botoes'>
                    <div>
                        <img className='icone' onClick={props.back} src={botoesplaceholder} alt="salve caua"/>
                        <p onClick={props.back}>Voltar</p>
                    </div>
                    <div>
                        <img className='icone' src={botoesplaceholder} onClick={proximo} alt="salve caua" />
                        <p onClick={proximo}>Próximo</p>
                    </div>
                </div>
            </div>

            </div>
        
            </>
        )
    };
    
    let _display = 'none';
    return (<div style={{display:_display}} />);
}