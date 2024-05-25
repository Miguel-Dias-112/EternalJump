import './Lore.css'
import lore2 from '../../../Assets/imagensPlaceHolder/placeholder.png'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCookies } from 'react-cookie';
import { Pagination } from 'swiper/modules';
import { Tutorial } from './Tutorial';
import { Lore1 } from './Lore1';
import { Lore2 } from './Lore2';
import { Lore3 } from './Lore3';

export function Lore( props) {
    
    const [cookies, setCookie] = useCookies(['dadosCookie']);
    let dados = cookies.dadosCookie;
    const fezTutorial = dados.fezTutorial;
    const faseAtual = props.fase;
    


    if(fezTutorial == false && faseAtual == 0)
        {
            console.log('Entrou!')
            return (
                <Tutorial></Tutorial>
            )
        }
        
        switch (faseAtual) {
        case 1: 
            return (
                <Lore1 click = {props.click} />
            )
        case 2: 
            return (
                <Lore2 click={props.click}/>
            )
        case 3: 
            return (
                <Lore3 click={props.click}/>
            )
        default:
            break;
        }
    }