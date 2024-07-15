import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  Routes, Route } from 'react-router-dom';
import Pagehome from './pages/pagehome'
import Pageinterm from './pages/pageinterm';
import Catalogo from './components/catalogo'
import Linhatemporal from './components/linhatemporal'
import Trailer from './components/trailer';
import Section from './components/section';
import Curiosidades from './components/curiosidades';



function App() {
  return (
    <>
    
      <Routes>
        <Route path='/'    element={<Pagehome/>} />
        <Route path='/pageinterm'    element={<Pageinterm/>} />
        <Route path='/catalogo'    element={<Catalogo/>} />
        <Route path='/:id'    element={<Section/>} />
        <Route path='/:id/pagetrailer'    element={<Trailer/>} />
        <Route path='/linha temporal'    element={<Linhatemporal/>} />
        <Route path='/Curiosidades'    element={<Curiosidades/>} />
    
        
      </Routes>
 
    </>
  );
}

export default App;
