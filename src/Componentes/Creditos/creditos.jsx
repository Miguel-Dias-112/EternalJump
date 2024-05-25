import './creditos.css'

export function Creditos() {
    let voltarPagina = function(){
        window.location.href = '/'
    }
    return (
        <>
        <div className='fundoCreditos'>

        <div className='creditos'>
        
        <h1>Créditos</h1>
        <p>Jumping Adventure foi desenvolvido desenvolvido para a React Jam 2023, se baseando na história de Raquel Janaina, uma criança que usa de pular corda para atingir seus objetivos. O período de desenvolvimento do jogo foi de 18/05/24 até 26/05/24, e contou com a participação de estudantes da UFJF e apoio do projeto Inova Games.</p>
        

        <h2>Animações e Cenários</h2>
        <p>Guilherme Martins</p>
        <p>Emerson Caneschi</p>
        

        <h2>Programação</h2>
        <p>Miguel Dias</p>
        <p>Cauã Moreno</p>
        <p>Estêvão Fiorilo</p>
        <p>Gabriel Basílio</p>
        

        <h2>Produção Musical</h2>
        <p>Cauã Moreno</p>


        <h2>Revisão</h2>
        <p>Emerson Caneschi</p>


        <button className='botaoVoltar' onClick={voltarPagina}>Voltar</button>
        </div>

        </div>
        </>
    )
}