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
      console.log(this.props)
      let p =document.querySelector('#x')
      if(this.dieonce){
        return
      }
      if(this.props.vidas === 0 && !this.dieonce){
        this.animate(morre)
        this.dieonce = true;
        return}
      this.animate(sprite)
      if(this.props.acerto === false){
        p.classList.add('alert')
      }
      if(this.props.pula && !this.lock){
        this.lock = true;
       
      }

      p.classList.add('jump');
      setTimeout(()=>{
        p.classList.remove('jump')
        p.classList.remove('alert')
        this.lock = false
      },1000)
  }
  componentDidMount() {

   
  this.animate()    
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
