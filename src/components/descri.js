import React, {useState,useEffect, useContext} from 'react'; 
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import DataContext from '../datacontext';

function Descri() {

const {information} = useContext(DataContext)
const parametro = useParams()



    
  return (
    <>
<div className='container-geral-descri'>
  <video src='/video/video-descri.webm' autoPlay muted loop disablePictureInPicture  className='video-descri'></video>
  <img src='/imagens/logo-principal.png'alt='' className='logo-descri'></img>  
  <img src='/imagens/nome-assassins-creed.png' alt='' className='nome-descri'></img>

</div>
 
    </>
  );
}

export default Descri;
