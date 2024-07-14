import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link} from 'react-router-dom'
import DataContext from '../datacontext';
import Descri from './descri';

function Catalogo({style}) {

const {information} = useContext(DataContext)
const [games,setGames] =  useState()
const [elementosfiltrados,setElementosfiltrados] = useState([])

useEffect(() => {
  setElementosfiltrados(information);
}, [information]);

function add(event){
  
    const elementos = information.filter(element =>  element.name.toLowerCase().includes(event.target.value.toLowerCase())   )
    setElementosfiltrados(elementos)
}

useEffect(()=>{
 const dados=  elementosfiltrados.map(element=> <Link to={`/${element.name}`}><div className='card'>
  <img src= {element.poster} alt='' className='img-card'></img>
  </div></Link>  )

setGames(dados)
},[information,elementosfiltrados])

document.body.style.backgroundColor = 'black'

  return (
    <>
    <div style={style}>
    <header>
      <div className='container-logo-header'>
      <img src='/imagens/logo-header.png' alt='' className='logo-header'></img>
      <span className='text-catalogo'>Catálogo</span>
      </div>
      <input className='input-pesquisa' placeholder='Digite o jogo desejado...' onChange={add}></input>
      <Link to='/linhatemporal' className='link'>
      <div className='container-dna-header'>
      <img src='/imagens/dna.png' alt='' className='logo-dna'></img>
      <span className='text-linhadotempo'>Acesse a linha do tempo</span>
      </div>
      </Link> 
    
    </header>
      <Descri/>
    <div className='container-geral-card'  >
    {games}
    </div>
    </div>
    
    </>
  );
}

export default Catalogo;
