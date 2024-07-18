import React, {useEffect} from 'react';
import Header from './header';
import ScrollReveal from 'scrollreveal';

function Curiosidades() {
document.body.style.backgroundImage = "url('/imagens/back-curiosidades.jpg')"
document.body.style.marginTop = "75px"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundRepeat = "no-repeat"


  useEffect(()=>{
    const sr = ScrollReveal();
  
    sr.reveal('#card-cur1',{
        duration: 1000,
        origin:'left',
        distance: '250px',
        reset: false,
  })
  sr.reveal('#card-cur2',{
    duration: 1000,
    scale: 1.1,
    reset: false,
})
sr.reveal('#card-cur3',{
  duration: 1000,
  origin:'right',
  distance: '250px',
  reset: false,
})
  
  },[])
  


  return (
    <>
    
    <Header style={{backgroundColor:'transparent'}} ></Header>
<div className='container-geral-curiosidades'>

  <div className='card-curiosidades' id='card-cur1'>
      <img src='/imagens/curiosidades1.png' alt='' className='img-curiosidades' ></img>
      <h2 className='titulo-curiosidades'>Ideia original</h2>
      <p className='texto-curiosidades'>O primeiro Assassin's Creed seria na verdade mais um jogo da franquia Prince of Persia, se tratando de um derivado de Sands of Time. O game se chamaria Prince of Persia: Assassin, mas a Ubisoft rejeitou a 
        ideia porque a história não se concentrava tanto no príncipe.
        Com essa ideia de um derivado descartada, alguns conceitos foram repensados, 
        recriados, e então nasceu a franquia Assassin's Creed.
      </p>
  </div>
  <div className='card-curiosidades' id='card-cur2'>
      <img src='/imagens/curiosidades22.png' alt='' className='img-curiosidades' id='img2-cur' ></img>
      <h2 className='titulo-curiosidades'>Origem</h2>
      <p className='texto-curiosidades'>A ordem vista no primeiro Assassin's Creed é baseada em um grupo real chamado Nizari Ismailis Ḥashshāshīn, 
        que existiu há muito tempo na história. Eles estavam localizados na Síria e na Pérsia,
        e se opunham aos turcos seljúcidas. Assim como em Assassin's Creed,
          eles eram assassinos treinados que eram usados ​​para eliminar líderes importantes.
      </p>
  </div>
  <div className='card-curiosidades' id='card-cur3'>
      <img src='/imagens/inspiração.png' alt='' className='img-curiosidades'  id='img-cur3'></img>
      
      <h2 className='titulo-curiosidades'>Inspiração</h2>
      <p className='texto-curiosidades'>
        Assassin's Creed é fortemente inspirado no livro Alamut, lançado em 1938 por Vladimir Bartol. 
        A obra da década de 30 fala justamente sobre o líder do grupo, Hassan-i Sabbāh,
        e muitos elementos do livro entraram no jogo.
        Embora o livro esteja se aproximando dos 100 anos, agora é amplamente 
        comercializado como o romance que inspirou Assassin's Creed.
      </p>
  </div>
  
</div>

    </>
  );
}

export default Curiosidades;
