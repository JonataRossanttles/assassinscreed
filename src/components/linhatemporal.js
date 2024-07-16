import React, {useState,useEffect, useContext} from 'react'; 
import DataContext from '../datacontext';
import Header from './header';
import Loader from './loader';

function Linhatemporal() {

const {information} = useContext(DataContext)
const [cards,setCards] = useState()
const [loader,Setloader] = useState(true)



useEffect(()=>{

const elemento = information.map(element => 
<div className='card-temp link' id={`card${element.id}`} >
  <div className='container-img-card-temp'>
  <img src= {element.poster} alt='' className='img-card-temp' ></img>
  </div>
  
  <p className='titulo-card-temp'> {element.release_date}</p>
</div>)

setCards(elemento)
setTimeout(() => {
  Setloader(false)
  
}, 2000);
},[information])
  
   
  return (
    <>


  
  
<Header></Header>
   
   
   
   { loader ? <Loader></Loader> : <div>
    
    <video src='/video/dna.webm' autoPlay muted loop disablePictureInPicture className='video-dna' > </video>
    <div className='container-geral-temp'>{cards}</div>
    
   </div> 
    
    
    }

   
   
   
  
    </>
  );
}

export default Linhatemporal;
