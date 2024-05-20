import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/dancing2.gif'
import alert from '../../../Assets/Alert.png'
import morre from '../../../Assets/caindo.gif'



import React from 'react';


class Player extends React.Component {
  lock = false;
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, cor:'white',visivel:'hidden'};

  }
  dieonce = false;
  
  animate(anim){
    let p =document.querySelector('#x')
    p.innerHTML=''
    let img = document.createElement('img')
    p.appendChild(img)
    img.src = './'+anim

  }
  componentDidUpdate() {
      console.log('teste')
      let p =document.querySelector('#x')
      if(this.dieonce){
        return
      }
      if(this.props.vidas === 0){
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
        this.animate(morre)

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
        <div id='x' className='Player'>
          <img >
          
          </img>
          
        </div>
      </>
    )
  }
}

export default Player
