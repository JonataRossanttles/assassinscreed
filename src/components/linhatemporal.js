import React, {useState,useEffect, useContext} from 'react'; 
import DataContext from '../datacontext';
import Header from './header';
import Loader from './loader';



function Linhatemporal() {

const {information} = useContext(DataContext)
const [cards,setCards] = useState()
const [loader,Setloader] = useState(true)
const listidleft = ["#card1","#card3","#card5","#card7","#card9","#card111"]
const listidright= ["#card2","#card4","#card6","#card8","#card10","#card12"]

document.body.style.backgroundImage = "url('https://static-dm.ubisoft.com/assassins-creed/franchise/prod/b7db6092b3081a637071c8a88a9270a0.jpg')"
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'top' 
document.body.style.backgroundRepeat = 'no-repeat' 
document.body.style.height = '100vh' 
document.body.style.marginTop = "0"
useEffect(()=>{
 
const elemento = information.map((element,index) => 
<div className='card-temp' id={`card${element.id}`} >
  <div className='container-img-card-temp'>
  <img src= {element.img1} alt='' className='img-card-temp'  ></img>
  </div>
  <div className='text-card-temp' id={`text${index}`}>
    <img src={element.logo} alt='' style={{width:element.widthlogo, height:element.heightlogo,marginBottom:'10px'}}></img>
   <span className='inform-temp'> Data de lançamento: {element.release_date} </span> 
    <span className='inform-temp'> Desenvolvido por: {element.developer}</span> 
    <span className='inform-temp'> Motor gráfico: {element.engine}</span> 

  </div>

  
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
    
    
    <div className='container-geral-temp'>
     
      {cards}
      
      

    </div>
    
   </div> 
    
    
    }
   
  
    </>
  );
}

export default Linhatemporal;
