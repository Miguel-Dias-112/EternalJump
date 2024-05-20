import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/dancing2.gif'
import morre from '../../../Assets/caindo.gif'
import seguradoras from '../../../Assets/2girls.png'
import pulando from '../../../Assets/batecorda.gif'


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
    x.innerHTML=''
    p.innerHTML=''
    let img2 = document.createElement('img')
    img2.src = './'+pulando
    x.appendChild(img2)
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
      console.log('teste')
      let p =document.querySelector('#x')
      if(this.dieonce){
        return
      }
      console.log(this.props)
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
    
    this.animate(sprite)    
  }
  render() {
    
    return (  
        <>
        <div id='y' className='Seguradoras'>
          <img src={seguradoras} alt="seguradoras" />
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
