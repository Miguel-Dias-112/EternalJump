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
        
        <h1>Credits</h1>
    
        
        <p>Eternal Jump was a game developed for React Jam 2023, based on the story of Raquel Janaina, a child who uses jump rope to achieve her goals. The game development period was from 05/18/2024 to 05/26/2024, and it had the participation of Federal University of Juiz de Fora students and the support of the INOVAGames project.</p>
       

        <h2>Art Director</h2>
        <ol>
        <li>Guilherme Martins</li>
        </ol>

        <h2>Animations & Sprites</h2>

        <ol>
        <li>Guilherme Martins</li>
        <li>Emerson Caneschi</li>
        <li>Miguel Dias</li>

        </ol>
        
        <h2>Music Production</h2>
        <ol>
        <li>Guilherme Martins</li>
        <li>Cauã Moreno</li>
        <li>Miguel Dias</li>
        </ol>
        <h2>Tech Lead</h2>
        <ol>
        <li>Miguel Dias</li>
        
        <h2>Programmers</h2>
        <ol>
        <li>Miguel Dias</li>
        <li>Cauã Moreno</li>
        <li>Estêvão Fiorilo</li>
        <li>Gabriel Basílio</li>
        </ol>

        <h2>Review</h2>
        <ol>
        <li>Emerson Caneschi</li>
        </ol>
        <h2>Translation</h2>
        <ol>
        <li>Emerson Caneschi</li>
        <li>Miguel Dias</li>

        </ol>
        
        </ol>
        <h2>Support</h2>
        <img src={inovalogo}></img>

        


        <button className='botaoVoltar' onClick={voltarPagina}>Voltar</button>
        </div>

        </div>
        </>
    )
}