import './Lore.css'
import lore1 from '../../../Assets/lore1.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Lore( props) {
    let handleClick = () => {
        let x = document.getElementById('lore');
        x.classList.add('fadeout');
        setTimeout(() => {
            let x = document.getElementById('lore');
            let y = document.getElementById('back');
            y.style.display = 'none';
            x.style.display = 'none';
        },501)
        setTimeout(() => {props.click()}, 505)
        
       
    }
    let _display;
    if(props.fase === 0){
        _display = 'none';
    }
    return (
        <>
         <div id='back' className='background'>
                
        </div>
        <div style={{display:_display}} className = 'Lore fadein' id='lore'>
           
           <Swiper
               className='swiper'
               spaceBetween={0}
               slidesPerView={1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}>


               <SwiperSlide className='slide'>
                   <section>
                       <p className='text'>Era uma vez uma menina chamada raquel janaina, conhecida por sua coragem e decisões imaturas. </p>
                      
                       
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Um dirincando e apareceram duas criaturas que a desafiaram</p>
                      
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Raquel, determinada e sem nada pra fazer, aceitou a hora! </p>
                       <button onClick={handleClick}>Start</button>
                   </section>
               </SwiperSlide>
           </Swiper>
       </div>
        </>
        
        
    );
}