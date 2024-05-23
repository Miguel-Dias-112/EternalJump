import './Lore.css'
import lore1 from '../../../Assets/imagensPlaceHolder/placeholder1.png'
import lore2 from '../../../Assets/imagensPlaceHolder/placeholder2.png'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCookies } from 'react-cookie';
import { Pagination } from 'swiper/modules';
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
        setCookie('lorepassou', true, { path: '/' });
        
    }
    let _display;
    if(props.fase === 0 || cookies.lorepassou == true){
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
               modules={[Pagination]}
               pagination={true}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}>


               <SwiperSlide className='slide'>
                   <section>
                       <p className='text'>Era uma vez uma menina chamada raquel janaina, conhecida por sua coragem e decisões imaturas. </p>
                      
                       <img src={lore1}></img>

                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Um dirincando e apareceram duas criaturas que a desafiaram</p>
                       <img src={lore2}></img>
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