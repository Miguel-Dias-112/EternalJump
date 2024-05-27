import './creditos.css'
import inovalogo from '../../Assets/Inova.png'
export function Creditos() {
    let voltarPagina = function(){
        let x = document.getElementById('start')
        x.click()
    }
    return (
        <>
        <div className='fundoCreditos'>

        <div className='creditos'>
        
        <h1>Créditos</h1>
        
        <p>Eternal Jump foi um jogo desenvolvido para a React Jam 2023 pelo Capybara Ninja Team, sobre a história de Raquel Janaina, uma criança que usa de pular corda para atingir seus objetivos. O período de desenvolvimento do jogo foi de 18/05/24 até 26/05/24, e contou com a participação de estudantes da UFJF e apoio do projeto Inova Games.</p>
        
       

        <h2>Diretor de Arte</h2>
        <ol>
        <li>Guilherme Martins</li>
        </ol>

        <h2>Animações & Sprites</h2>

        <ol>
        <li>Guilherme Martins</li>
        <li>Emerson Caneschi</li>
        <li>Miguel Dias</li>

        </ol>
        
        <h2>Produção Musical</h2>
        <ol>
        <li>Guilherme Martins</li>
        <li>Cauã Moreno</li>
        <li>Miguel Dias</li>
        </ol>
        <h2>Lider de técnico</h2>
        <ol>
        <li>Miguel Dias</li>
        
        <h2>Programadores</h2>
        <ol>
        <li>Miguel Dias</li>
        <li>Cauã Moreno</li>
        <li>Estêvão Fiorilo</li>
        <li>Gabriel Basílio</li>
        </ol>

        <h2>Revisão</h2>
        <ol>
        <li>Emerson Caneschi</li>
        </ol>
        
        
        </ol>
        <h2>Apoio</h2>
        <img src={inovalogo}></img>

        


        <button className='botaoVoltar' onClick={voltarPagina}>Voltar</button>
        </div>

        </div>
        </>
    )
}