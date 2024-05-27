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
                       <p className='text'>Clique nos botões assim que eles ficarem verdes.</p>
                      
                       <img src={t1}></img>

                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Os botões seguem o ritmo da música.</p>
                       <img src={t2}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Cuidado para não perder o botão verde ou clicar nos botões vermelhos ou perderá uma vida!</p>
                       <img src={t3}></img>
                   </section>
               </SwiperSlide>
               <SwiperSlide className='slide'>
                   <section>
                       <p  className='text'>Não se perca e ganhe o máximo de pontos. Bom jogo!</p>
                       <button onClick={mostraFase}>Fechar tutorial</button>
                   </section>
               </SwiperSlide>
           </Swiper>
       </div>
        </>
        
        
    );
}