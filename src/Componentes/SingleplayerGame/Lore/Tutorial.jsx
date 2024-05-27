import './Lore.css'
import t1 from '../../../Assets/tutorial/t1.png'
import t2 from '../../../Assets/tutorial/t2.png'
import t3 from '../../../Assets/tutorial/t3.png'
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
                       <p className='text'>Click on the buttons as soon as they turn green This is a visual indicator of the next key</p>
                      
                       <img src={t1}></img>

                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>The buttons follow the music rhythm</p>
                       <img src={t2}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'> Be careful not to miss the green button or click on the red buttons or you will lose a life!!</p>
                       <img src={t3}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Don’t lose the hearts and earn as many points as possible. Good game!</p>
                       <button onClick={mostraFase}>Close Tutorial</button>
                   </section>
               </SwiperSlide>
           </Swiper>
       </div>
        </>
        
        
    );
}