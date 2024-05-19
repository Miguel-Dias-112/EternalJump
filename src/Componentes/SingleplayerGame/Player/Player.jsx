import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/dancing.gif'




import React from 'react';


class Player extends React.Component {
  lock = false;
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, cor:'white',visivel:'hidden'};

  }
  componentDidUpdate() {
      if(this.props.pula && !this.lock){
        this.lock = true;
        let p =document.querySelector('#x')
        p.classList.add('jump');
        setTimeout(()=>{
          p.classList.remove('jump')
          this.lock = false
        },1000)
      }
  }
  componentDidMount() {

    const animate = () => {
      let p =document.querySelector('#x')
      p.innerHTML=''
      let img = document.createElement('img')
      img.src = './'+sprite
      p.appendChild(img)
    }
    window.setInterval(animate, 800);
  }
  render() {
    
    return (  
        <>
        <div id='x' className='Player'>
          <img >
          
          </img>
          
        </div>
      </>
    )
  }
}

export default Player
