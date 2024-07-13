import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link} from 'react-router-dom'
import DataContext from '../datacontext';


function Catalogo() {

const {information} = useContext(DataContext)
const [games,setGames] =  useState()

useEffect(()=>{
 const dados=  information.map(element=> <Link to={`/${element.name}`}><div className='card'>
  <img src= {element.poster} alt='' className='img-card'></img>
  </div></Link>  )

setGames(dados)
},[information])


document.body.style.backgroundColor = 'black'

  return (
    <>
     
    <div className='container-geral-card' >
    {games}
    </div>
    </>
  );
}

export default Catalogo;
