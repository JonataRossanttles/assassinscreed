import React, {useState,useEffect, useContext} from 'react'; 
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import DataContext from '../datacontext';

function Section() {

const {information,localDatajson} = useContext(DataContext)
//const localstorage = JSON.parse(localStorage.getItem('assassinsCreedData'))
const parametro = useParams()
const [nameprev,setNameprev] = useState()
const [namenext,setNamenext] = useState()
const [estado,setEstado] = useState(false)
const [estado2,setEstado2] = useState(false)
const [gameselect, setGameselect] = useState({})

document.body.style.backgroundImage = "url('')"
document.body.style.marginTop = "0"
useEffect(()=>{
  if(localDatajson){
    const obj =  localDatajson.find(element => element.name === parametro.id)
    
    return setGameselect(obj)
  }

},[information,parametro])

useEffect(()=>{
  if(gameselect.id){
    if(gameselect.id === 1 ){
      setEstado(true)
    }else{
      const novoid = gameselect.id - 1
      const novoobj = localDatajson.find(element => element.id === novoid)
      const nameprev = novoobj.name
      setEstado(false)
     return  setNameprev(nameprev)
    }
  }
},[gameselect,information,parametro])
   
useEffect(()=>{
  if(gameselect.id){
    if(gameselect.id === localDatajson.length ){
      setEstado2(true)
    }else{
      const novoid = gameselect.id + 1
      const novoobj =  localDatajson.find(element => element.id === novoid)
      const namenext = novoobj.name
      setEstado2(false)
     return  setNamenext(namenext)
    }
  }
},[gameselect,information,parametro])


    
  return (
    <>
    <div className='container-geral-section'   style={{backgroundImage: `url(${gameselect.imgprincipal})`}}>
      <div className= {`container-section ${gameselect.backbefore}`}  >
        <div className='container-logo'>
        <img src={gameselect.logo} alt='' className='logo' style={{width:gameselect.widthlogo, height:gameselect.heightlogo}}></img>
          <div className='container-geral-play'>
          <img src={gameselect.img1} alt='' className='img-video'></img>
         <Link to={`/${gameselect.name}/pagetrailer`}>
          <div className='container-play'>
            <img src='/imagens/play.png' alt='' className='play'></img>
          </div>
         </Link> 
         </div>
        
        <h2 className='titulo-section'>{gameselect.name} </h2>
        <p className='paragrafo-section'> {gameselect.synopsis}</p>
       
        </div>
      
      </div>
      <Link to='/catalogo' className='link'> <div className='button-voltar'>
          <img src='/imagens/fechar.png' alt='' className='fechar'></img>

           </div></Link> 
           <div className='container-setas'>
            <Link to={`/${nameprev}`}><img src='/imagens/seta.png' alt='' className='prev' style={{display:estado ? 'none' : 'block' }}></img></Link>
            <Link to={`/${namenext}`}><img src='/imagens/seta.png' alt='' className='next' style={{display:estado2 ? 'none' : 'block' }}></img></Link>
           </div>
          
    </div>
   
    
    </>
  );
}

export default Section;
