import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link,useLocation} from 'react-router-dom'
import DataContext from '../datacontext';


function Header({ setElementosfiltrados }) {

const {information} = useContext(DataContext)
const path = useLocation()
const [menu,setMenu] = useState([])
const [menumobile,setMenumobile] = useState(false)
const list = ['Loja','Curiosidades','Linha temporal']

console.log(menumobile)
useEffect(() => {
  if (setElementosfiltrados) {
    setElementosfiltrados(information);
  }
}, [information, setElementosfiltrados]);

// Função onclick do input 
function add(event){
  if(setElementosfiltrados){
    const elementos = information.filter(element =>  element.name.toLowerCase().includes(event.target.value.toLowerCase())   )
    setElementosfiltrados(elementos)
  }
   
}

// Criação da lista do menu
useEffect(()=>{
  const li =  list.map((element,index)=> element === 'Loja' ? (
    <a 
      href="https://store.ubisoft.com/ofertas/assassins-creed?lang=pt_BR&gad_source=1&gclid=Cj0KCQjwkdO0BhDxARIsANkNcreDyKO5Y1SzteEjFatVKCp9euGwN4OPaUPW9uWTNREwUKZB0lLIRq8aAsYNEALw_wcB" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="link" 
      key={index}
    >
      <li className="option">{element}</li>
    </a>
  ):(
    <Link to={`/${element}`} className="link" key={index}>
      <li className="option">{element}</li>
    </Link>
  )
  
   )
 
 setMenu(li)
 },[])

 
  return (
    <>
    
    <header style={{backgroundColor: path.pathname === '/Linha%20temporal' ? 'transparent' : 'black' }}>
      <div className='container-logo-header'>
      <Link to='/catalogo' className='link'>
        <img src='/imagens/logo-header.png' alt='' className='logo-header'></img>
        <span className='text-catalogo' >Catálogo</span>
      </Link>  
      </div>
      <input className='input-pesquisa' placeholder='Digite o jogo desejado...' onChange={add} style={{display: path.pathname === '/catalogo' || path.pathname === '/pageinterm' ? 'block':'none' }}></input>
      
      <div className='menu-mobile'  onClick={() => setMenumobile(!menumobile)}>
        <img src= {menumobile  ?  '/imagens/icon-close.svg' : '/imagens/icon-hamburger.svg'  } alt='' className='hamburguer'></img>
        <ul className='container-options-mobile'>
        {menumobile ?  menu : '' }
        </ul>
      </div>
      
      
      <ul className='container-options'>
        {menu}
      </ul>
      
    </header>   
    
    </>
  );
}

export default Header;
