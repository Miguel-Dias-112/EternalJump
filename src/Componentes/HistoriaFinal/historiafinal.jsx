import './historiafinal.css'
import Lore from '../SingleplayerGame/Lore/Lore4'
export default function HistoriaFinal( props) {
    let voltar = () => {
        window.location.href = '../SinglePlayer/';
    }
    return(
        <>
             <Lore click={voltar} />
        </>
    )
}