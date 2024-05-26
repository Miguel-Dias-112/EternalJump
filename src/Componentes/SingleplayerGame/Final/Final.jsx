import './Final.css'
import botoesplaceholder from '../../../Assets/imagensPlaceHolder/adamsandler.jpeg';
import { useCookies } from 'react-cookie';

export function Final(props) {
    const tipoTela = props.tipo;
    const fase = props.fase;

    const [cookies, setCookie] = useCookies(['dadosCookie']);
    let dados = cookies.dadosCookie;

    const recarregarPagina = () => {
        if(tipoTela === 1){
            let biscuit = cookies.dadosCookie;
            
            
            biscuit.fasesConsluidas[fase-1] = 1;
            setCookie("dadosCookie", biscuit)
        }
        let finalCtn = document.getElementById('backFim');

        finalCtn.style.display = "none";
        window.location.reload();
    };
    const voltarGanhou = function(){
        let biscuit = cookies.dadosCookie;
        biscuit.fasesConcluidas[fase-1] = 1;
        setCookie("dadosCookie", biscuit)
        let finalCtn = document.getElementById('backFim');
        finalCtn.style.display = "none";
        props.back();
    }
    const proximo = () => {
        let biscuit = cookies.dadosCookie;

        biscuit.fasesConcluidas[fase-1] = 1;
        setCookie("dadosCookie", biscuit)
        const fasesConcluidas= dados.fasesConcluidas
        let x = document.getElementById('fase'+(fase+1))
        let finalCtn = document.getElementById('backFim');

        finalCtn.style.display = "none";

        x.click()

    }
    const final = () => {
        let x = document.getElementById('finalizacao')
        let finalCtn = document.getElementById('backFim');

        finalCtn.style.display = "none";
        x.click()        
    }
    
    if(tipoTela === 2)
        { 
            return(
                <>
                <div className='background' id='backFim'>

                <div className="final">
                    <h1>Você perdeu!</h1>
                    <div className='botoes'>
                        <div>
                            {/* <img className='icone' onClick={props.back} src={botoesplaceholder}/> */}
                            <p onClick={props.back}>Voltar</p>
                        </div>
                        <div>
                            {/* <img className='icone' onClick={recarregarPagina} src={botoesplaceholder}/> */}
                            <p onClick={recarregarPagina}>Repetir</p>
                        </div>
                    </div>
                </div>

                </div>
            
                </>
            )
        };
    
    if(tipoTela === 1 && fase === 3)
        {
            return(
                <>
                <div className='background' id='backFim'>
    
                <div className="final">
                    <h1>Você ganhou!</h1>
                    <div className='botoes'>
                        <div>
                            {/* <img className='icone' onClick={props.back} src={botoesplaceholder} alt="salve caua"/> */}
                            <p onClick={voltarGanhou}>Voltar</p>
                        </div>
                        <div>
                        {/* <img className='icone' src={botoesplaceholder} onClick={proximo} alt="salve caua" /> */}
                        <p onClick={final}>Fim!</p>
                    </div>
                    </div>
                </div>
    
                </div>
            
                </>
            )
        };
        if(tipoTela === 1)
            {
                return(
                    <>
                    <div className='background' id='backFim'>
        
                    <div className="final">
                        <h1>Você ganhou!</h1>
                        <div className='botoes'>
                            <div>
                                {/* <img className='icone' onClick={props.back} src={botoesplaceholder} alt="salve caua"/> */}
                                <p onClick={voltarGanhou}>Voltar</p>
                            </div>
                            <div>
                                {/* <img className='icone' src={botoesplaceholder} onClick={proximo} alt="salve caua" /> */}
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