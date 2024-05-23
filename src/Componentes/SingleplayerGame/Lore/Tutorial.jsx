import './Lore.css'
import lore1 from '../../../Assets/imagensPlaceHolder/placeholder1.png'
import lore2 from '../../../Assets/imagensPlaceHolder/placeholder2.png'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCookies } from 'react-cookie';
import { Pagination } from 'swiper/modules';


export function Tutorial( props ) {
    
    const [cookies, setCookie] = useCookies(['dadosCookie']);
    let newBiscuit = cookies.dadosCookie ;
    newBiscuit.fezTutorial = true;
    
    let _display;
    
    
    let mostraFase = () => {
        let loreCtn = document.getElementById('lore');
        let loreFundo = document.getElementById('back');
        loreCtn.classList.add('fadeout');
        setTimeout(() => {
            loreCtn.style.display = 'none';
            loreFundo.style.display = 'none';
        },501)
        setTimeout(() => {props.click()}, 505)
        setCookie('dadosCookie', newBiscuit);

    }
    console.log('Tutorial página')
    return (
        <>
         <div id='back' className='background'>
                
        </div>
        <div style={{display:_display}} className = 'Lore fadein' id='lore'>
           
           <Swiper
               className='swiper'
               spaceBetween={0}
               slidesPerView={1}
               modules={[Pagination]}
               pagination={true}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}>


               <SwiperSlide className='slide'>
                   <section>
                       <p className='text'>Clique nos botões assim que eles ficarem verdes.</p>
                      
                       <img src={lore1}></img>

                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>O botão segue o ritmo da música.</p>
                       <img src={lore2}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Cuidado para não perder o botão verde ou clicar nos botões vermelhos ou perdrá uma vida.</p>
                       <img src={lore2}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Não se perca e ganhe o máximo de pontos.</p>
                       <button onClick={mostraFase}>Fechar tutorial</button>
                   </section>
               </SwiperSlide>
           </Swiper>
       </div>
        </>
        
        
    );
}