import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import DataContext from '../datacontext';
import Catalogo from '../components/catalogo';



function Pageinterm() {

const {information} = useContext(DataContext)
const [transicao,setTransicao] = useState(true)


useEffect(()=>{
setTimeout(() => {
  setTransicao(false)
  
}, 7500);
},[information])

document.body.style.backgroundColor = 'black'

  return (
    <>
    
     <video src='/video/background-intermediario.webm' autoPlay muted disablePictureInPicture className='video2' style={{display: transicao ? 'block' : 'none'}} ></video>
   
   <Catalogo style={{display: transicao ? 'none' : 'block'}}/>
   
    </>
  );
}

export default Pageinterm;
