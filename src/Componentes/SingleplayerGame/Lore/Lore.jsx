import './Lore.css'
import lore1 from '../../../Assets/lore1.png'
export function Lore( props) {
    let handleClick = () => {
        props.click()
        let x = document.getElementById('lore');
        x.style.display = 'none';
    }
    return (
        <div className = 'Lore' id='lore'>
            <img src={lore1} ></img>
            <button onClick={handleClick}>continuar</button>
        </div>
        
    );
}