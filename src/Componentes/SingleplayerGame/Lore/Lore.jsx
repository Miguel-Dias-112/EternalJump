import './Lore.css'
import lore1 from '../../../Assets/imagensPlaceHolder/placeholder1.png'
import lore2 from '../../../Assets/imagensPlaceHolder/placeholder2.png'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCookies } from 'react-cookie';
import { Pagination } from 'swiper/modules';
import { LorePrimeira } from './LorePrimeira';
import { Tutorial } from './Tutorial';

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
                <LorePrimeira click = {props.click} />
            )
        /*case 2: 
            return (
                <LoreSegunda click={props.click()}/>
            )
        */default:
            break;
        }
    }