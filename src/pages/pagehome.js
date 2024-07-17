import React from 'react';
import {Link} from 'react-router-dom'

function Pagehome() {
document.body.style.backgroundImage = "url('')"

  return (
    <>
    
    <div className='pageprincipal'>
      <video src='/video/background-principal.webm' autoPlay muted loop disablePictureInPicture ></video>
    </div>
    <Link to='/pageinterm'>
      <div className='container-logo-home'>
        <img src='/imagens/logo-principal.png' alt='' className='logo-principal'></img>
        <img src='/imagens/nome-assassins-creed.png' alt='' className='nome-principal'></img>
      </div>
    </Link>
    </>
  );
}

export default Pagehome;
