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
        <ol>
        <li>Guilherme Martins</li>
        <li>Emerson Caneschi</li>
        </ol>
        
        

        <h2>Lider de Projeto</h2>
        <ol>
        <li>Miguel Dias</li>
        </ol>
        
        <h2>Programação</h2>
        <ol>
        <li>Miguel Dias</li>
        <li>Cauã Moreno</li>
        <li>Estêvão Fiorilo</li>
        <li>Gabriel Basílio</li>
        </ol>
        
        

        <h2>Produção Musical</h2>
        <ol>
        <li>Cauã Moreno</li>
        </ol>
        


        <h2>Revisão</h2>
        <ol>
        <li>Emerson Caneschi</li>
        </ol>
        

        <h2>Apoio</h2>
        <ol>
        <li>Inova Games - UFJF</li>
        </ol>
        


        <button className='botaoVoltar' onClick={voltarPagina}>Voltar</button>
        </div>

        </div>
        </>
    )
}