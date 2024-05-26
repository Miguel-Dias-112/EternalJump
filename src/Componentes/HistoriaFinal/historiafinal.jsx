import './historiafinal.css'
import Lore from '../SingleplayerGame/Lore/Lore4'
export default function HistoriaFinal( props) {
    let voltar = () => {
        let x = document.getElementById('creditos');
        x.click();
        window.location.reload();
    }
    return(
        <>
             <Lore click={voltar} />
        </>
    )
}