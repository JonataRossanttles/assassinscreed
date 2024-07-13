import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link} from 'react-router-dom'
import DataContext from '../datacontext';


function Pageinterm() {

const {information} = useContext(DataContext)
const [transicao,setTransicao] = useState(true)
const [games,setGames] =  useState()


useEffect(()=>{
 const dados=  information.map(element=> <Link to={`/${element.name}`}><div className='card'>
  <img src= {element.poster} alt='' className='img-card'></img>
  </div></Link>  )

setGames(dados)
},[])

useEffect(()=>{
setTimeout(() => {
  setTransicao(false)
  
}, 7500);
},[information])

document.body.style.backgroundColor = 'black'

  return (
    <>
     <video src='/video/background-intermediario.webm' autoPlay muted disablePictureInPicture className='video2' style={{display: transicao ? 'block' : 'none'}} ></video>
   
    <div className='container-geral-card' style={{display: transicao ? 'none' : 'grid'}}>
    {games}
    </div>
    </>
  );
}

export default Pageinterm;
