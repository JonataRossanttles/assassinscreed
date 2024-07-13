import React, { useEffect, useState } from 'react';
import {useContext} from 'react'
import{Link,useParams} from 'react-router-dom'
import DataContext from '../datacontext';


function Pagetrailer() {

const {information} = useContext(DataContext)
const parametro = useParams()
const [gameselect, setGameselect] = useState({})

useEffect(()=>{
  if(information){
    const obj =  information.find(element => element.name === parametro.id)
    
    return setGameselect(obj)
  }

},[information,parametro])


console.log(gameselect.trailer)
document.body.style.backgroundColor = 'black'

  return (
    <>
   <div dangerouslySetInnerHTML={{ __html: gameselect.trailer }}></div>
    <Link to={`/${parametro.id}`} className='link'> <div className='button-voltar' style={{background:'gray'}}>
          <img src='/imagens/fechar.png' alt='' className='fechar'></img>

           </div>
      </Link> 
   
    </>
  );
}

export default Pagetrailer;
