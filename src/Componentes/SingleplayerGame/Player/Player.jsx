import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/bounce.gif'




import React from 'react';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, cor:'white',visivel:'hidden'};

  }
 
  componentDidMount() {
    const animate = () => {
        console.log('mounted')
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
