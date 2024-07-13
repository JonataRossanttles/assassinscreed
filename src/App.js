import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  Routes, Route } from 'react-router-dom';
import Pagehome from './pages/pagehome'
import Pageinterm from './pages/pageinterm';
import Catalogo from './components/catalogo'
import Pagefinal from './pages/pagefinal'
import Pagetrailer from './pages/pagetrailer'

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/'    element={<Pagehome/>} />
        <Route path='/pageinterm'    element={<Pageinterm/>} />
        <Route path='/catalogo'    element={<Catalogo/>} />
        <Route path='/:id'    element={<Pagefinal/>} />
        <Route path='/:id/pagetrailer'    element={<Pagetrailer/>} />

      </Routes>
 
    </>
  );
}

export default App;
