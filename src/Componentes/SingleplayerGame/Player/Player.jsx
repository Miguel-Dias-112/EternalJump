import { useId, useState } from 'react'
import './Player.css'

import pulando1 from '../../../Assets/AnimPulo/0.png'
import pulando2 from '../../../Assets/AnimPulo/1.png'
import pulando3 from '../../../Assets/AnimPulo/2.png'

import idle1 from '../../../Assets/Idle/0.png'
import idle2 from '../../../Assets/Idle/1.png'

import corda1 from '../../../Assets/cordafull/0.png'
import corda2 from '../../../Assets/cordafull/1.png'
import corda3 from '../../../Assets/cordafull/2.png'
import corda4 from '../../../Assets/cordafull/3.png'
import corda5 from '../../../Assets/cordafull/4.png'
import corda6 from '../../../Assets/cordafull/5.png'
import corda7 from '../../../Assets/cordafull/6.png'
import corda8 from '../../../Assets/cordafull/7.png'
import corda9 from '../../../Assets/cordafull/8.png'
import corda10 from '../../../Assets/cordafull/9.png'
import corda11 from '../../../Assets/cordafull/10.png'
import corda12 from '../../../Assets/cordafull/11.png'
import corda13 from '../../../Assets/cordafull/12.png'
import corda14 from '../../../Assets/cordafull/13.png'
import corda15 from '../../../Assets/cordafull/14.png'
import corda16 from '../../../Assets/cordafull/15.png'
import corda17 from '../../../Assets/cordafull/16.png'

import morte1 from '../../../Assets/morte/0.png'
import morte2 from '../../../Assets/morte/1.png'
import morte3 from '../../../Assets/morte/2.png'
import morte4 from '../../../Assets/morte/3.png'
import morte5 from '../../../Assets/morte/4.png'
import morte6 from '../../../Assets/morte/5.png'
import morte7 from '../../../Assets/morte/6.png'
import morte8 from '../../../Assets/morte/7.png'
import morte9 from '../../../Assets/morte/8.png'
import morte10 from '../../../Assets/morte/9.png'

import React from 'react';

class Player extends React.Component {
  cleanUrl(img){
    
    // let url = "./.."+img;
    // return url.split('?')[0];

    return img
  }
  loadImages(array){
    let image = []
    for (let i = 0; i < array.length; i++) {
      image[i] = new Image();
      image[i].src = this.cleanUrl(array[i]);
      
    }
    return image;
  }
  runAnims(c,images,fps,res){
    for(let i = 0; i < images.length; i++){
     
      setTimeout(()=>{
      
        c.clearRect(0,0,canvas.width,canvas.height);
        c.drawImage(images[i],0,0,res[0],res[1  ]);
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
    var canvas = document.querySelector('#canvas');
   
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
    const cordaImgs = [corda1,corda2,corda3,corda4,corda5,corda6,corda7,corda8,corda9,corda10,corda11,corda12,corda13,corda14,corda15,corda16,corda17]
    const mortePng = [morte1,morte2,morte3,morte4,morte5,morte6,morte7,morte8,morte9,morte10]
    var canvas = document.querySelector('#canvas');
    var canvas2 = document.querySelector('#canvas2');
    var canvas2C = canvas2.getContext('2d');
    var c = canvas.getContext('2d');

    canvas.width= 130;
    canvas.height=120;
    const res=[130,120]
    
    canvas2.width= 130
    canvas2.height=120

    let imagensPulo = this.loadImages(pulo);
    let imagesIdle = this.loadImages(idle);
    let imagensCorda = this.loadImages(cordaImgs);
    let imagensMorte = this.loadImages(mortePng);

    this.runAnims(c,imagesIdle)
    this.runAnims(canvas2C,imagensCorda,100,res)

    setInterval(()=>{
      if(this.dieonce){
        return;
      }
      if(this.props.vidas === 0){
        this.runAnims(c,imagensMorte,130,res)
        this.dieonce = true;
      }
      if(this.props.pula){
        this.fisicaPulo()
        this.runAnims(canvas2C,imagensCorda,30,res)
        this.runAnims(c,imagensPulo,100,res)

      }
      else{
        this.runAnims(c,imagesIdle,100,res)

      }
    },500)
    
     
  }
  render() {
    
    return (  
        <>
        <div className='Seguradoras'>
          <canvas id='canvas2' ></canvas>
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
