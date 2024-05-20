import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/dancing2.gif'
import morre from '../../../Assets/caindo.gif'
import seguradoras from '../../../Assets/2girls.png'

import pulando1 from '../../../Assets/batercorda/1.png'
import pulando2 from '../../../Assets/batercorda/2.png'
import pulando3 from '../../../Assets/batercorda/3.png'
import pulando4 from '../../../Assets/batercorda/4.png'

import React from 'react';


class Player extends React.Component {
  lock = false;
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, cor:'white',visivel:'hidden'};
    
  }
  dieonce = false;
  baterCorda(){
    let x = document.querySelector('#y')
    let pulando = [pulando1,pulando2,pulando3,pulando4]
    for(let i = 1; i < 4; i++){
      let url = "./.."+pulando[i];
      let cleanUrl = url.split('?')[0];
      setTimeout(()=>{
        x.src= cleanUrl
      },500 *i)
    }

  }
  animate(anim){
    let p =document.querySelector('#x')
    
    p.innerHTML = ''

    let img = document.createElement('img')
    let url = "./.."+anim;
    let cleanUrl = url.split('?')[0];

    img.src = cleanUrl
    p.appendChild(img)


  }
  componentDidUpdate() {
      let p =document.querySelector('#x')
      
      if(this.dieonce){
        return
      }
      if(this.props.vidas === 0){
        this.animate(morre)

        this.dieonce = true;
      }
      if(this.props.acerto === false){
          p.classList.add('alert')
          setTimeout(()=>{
            p.classList.remove('alert')
          },500)
      }
      
      if(this.props.pula && !this.lock){
        
        this.lock = true;
        p.classList.add('jump')
        this.baterCorda()
        setTimeout(()=>{
          p.classList.remove('jump')
          this.lock = false
        },500)
      }
      
      
  }
  componentDidMount() {
    let  x = window.setInterval(()=>{
      if(this.dieonce){
        clearInterval(x)
        return
      }
      this.animate(sprite)

    },800)
    this.baterCorda()
    this.animate(sprite)    
  }
  render() {
    
    return (  
        <>
        <div className='Seguradoras'>
          <img id='y'  src={seguradoras} alt="seguradoras" />
        </div>
        <div id='x' className='Player'>
          <img >
          
          </img>
          
        </div>
      </>
    )
  }
}

export default Player
