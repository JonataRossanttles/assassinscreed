import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link} from 'react-router-dom'
import DataContext from '../datacontext';
import Descri from './descri';
import Header from './header';

function Catalogo({style}) {
document.body.style.backgroundImage = "url('')"
document.body.style.marginTop = "0"


const {information} = useContext(DataContext)
const [games,setGames] =  useState()
const [elementosfiltrados,setElementosfiltrados] = useState([])



useEffect(() => {
  setElementosfiltrados(information);
}, [information]);


// Criação da lista de games que conhecidem com o que foi digitado
useEffect(()=>{
 const dados=  elementosfiltrados.map(element=> <Link to={`/${element.name}`}><div className='card'>
  <img src= {element.poster} alt='' className='img-card'></img>
  </div></Link>  )

setGames(dados)
},[information,elementosfiltrados])


 
document.body.style.backgroundColor = 'black'


  return (
    <>
    <div style={style} >
       <Header setElementosfiltrados={setElementosfiltrados}></Header>
      <Descri/>
    <div className='container-geral-card'  >
    {games}
    </div>
    </div>
    
    </>
  );
}

export default Catalogo;
