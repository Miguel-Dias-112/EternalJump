import { useId, useState } from 'react'
import './Player.css'
import sprite from '../../../Assets/Raquel-Janaina-idle.gif'

import pulando1 from '../../../Assets/AnimPulo/0.png'
import pulando2 from '../../../Assets/AnimPulo/1.png'
import pulando3 from '../../../Assets/AnimPulo/2.png'

import idle1 from '../../../Assets/Idle/0.png'
import idle2 from '../../../Assets/Idle/1.png'

import React from 'react';

class Player extends React.Component {
  cleanUrl(img){
    
    let url = "./.."+img;
    return url.split('?')[0];
  }
  loadImages(array){
    let image = []
    for (let i = 0; i < array.length; i++) {
      image[i] = new Image();
      image[i].src = this.cleanUrl(array[i]);
    }
    return image;
  }
  runAnims(c,images,fps){
    console.log(images)
    for(let i = 0; i < images.length; i++){
     
      setTimeout(()=>{
      
        c.clearRect(0,0,canvas.width,canvas.height);
        c.drawImage(images[i],0,0,24,26);
        i++;
        if(i === images.length){
          i = 0;
        }
      },fps*i)
      
    }
   
  }
 
  lock = false;
  constructor(props) {
    super(props);
    this.state = { contadorTempo: 0, cor:'white',visivel:'hidden'};
  }
  dieonce = false;
  baterCorda(){
  }
  fisicaPulo(){
 
    let p =document.querySelector('#x')
    this.lock = true;
    p.classList.add('jump')
    setTimeout(()=>{
      p.classList.remove('jump')
      this.lock = false
    },500)
    
  }
  componentDidUpdate() {
    var canvas = document.querySelector('canvas');
    if(this.props.vidas === 0){

      this.dieonce = true;
    }
    if(this.props.acerto === false){
        canvas.classList.add('alert')
        setTimeout(()=>{
          canvas.classList.remove('alert')
        },500)
    }
   

      
  }
  componentDidMount() {


    const pulo = [pulando1,pulando2,pulando2,pulando3]
    const idle = [idle1,idle2,idle1]

    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');

    canvas.width= 24;
    canvas.height=26;

    let imagensPulo = this.loadImages(pulo);
    let imagesIdle = this.loadImages(idle);
    this.runAnims(c,imagesIdle)

    setInterval(()=>{
      if(this.props.pula){
        this.fisicaPulo()
        this.runAnims(c,imagensPulo,100)
      }
      else{
        this.runAnims(c,imagesIdle,100)

      }
    },500)
    
     
  }
  render() {
    
    return (  
        <>
        <div className='Seguradoras'>
          <img id='y'  src alt="seguradoras" />
        </div>
        <div id='x' className='Player'>
          <canvas id='canvas' >
          
          </canvas>
          
        </div>
      </>
    )
  }
}

export default Player
